import React, { useState } from 'react';
const Support = () => {
  const [posterPreview, setPosterPreview] = useState('');

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  // Function to handle uploading of poster image
  const handlePosterUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPosterPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  //Radio button
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>


      <div className='h-screen w-full bg-[#babcbf]' >
        <div className="w-2/3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white rounded-xl">

          <div className="mt-6 flex justify-center ">
            <div className='w-3/4 flex justify-center'>
              <div className="w-11/12 flex  justify-between text-lg">
                <div className="header text-white">
                  <h1 className='px-3 py-2  bg-[#4C00A4] rounded-full '> Options</h1>
                </div>
                <div className="w-2/3 flex options justify-between  ">
                  <select id="year" className='border-2 border-gray-500 shadow-2xl px-4 rounded-full'>
                    <option value="1">Category</option>
                    <option value="2">1st Year</option>
                    <option value="3">2nd Year</option>
                    <option value="4">3rd Year</option>
                    <option value="5">4th Year</option>
                  </select>
                  <select id="stream" className='border-2 border-gray-500 shadow-2xl px-4 rounded-full'>
                    <option value="science">Sub-category</option>
                    <option value="commerce">Commerce</option>
                    <option value="arts">Arts</option>
                  </select>

                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 flex justify-center">
            <div className="w-3/4 grid grid-cols-3 ">
              {/* First column: Event details */}
              <div className="w-11/12 p-4 text-lg">
                <label htmlFor="title" className="mt-3 block  font-medium text-gray-700">Subject:</label>
                <label htmlFor="title" className="mt-3 block  font-medium text-gray-700">Description:</label>
                <label htmlFor="title" className="mt-3 block  font-medium text-gray-700">Recive OTP on:</label>
                <label htmlFor="title" className="mt-3 block  font-medium text-gray-700">Documents(if any):</label>
              </div>

              {/* Second column: Input fields */}
              <div className="w-full p-4">
                <div className="mb-4 text-lg">
                  <input
                    type="text"
                    id="title"
                    name="Subject"
                    // value={eventDetails.title}
                    // onChange={handleInputChange}
                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-500 rounded-md"
                  />
                  <textarea
                    type="text"
                    id="title"
                    name="Description"
                    // value={eventDetails.title}
                    // onChange={handleInputChange}
                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm  border-gray-500 rounded-md"
                  />
                  <div>
                    <label className='mr-2'>
                      <input
                        type="radio"
                        value="phone_no"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                        className='mr-2'
                      />
                      Phone no
                    </label>

                    <label >
                      <input
                        type="radio"
                        value="email"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                        className='mr-2'
                      />
                      Email
                    </label>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePosterUpload}
                    className="w-[80px] border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border-gray-500 rounded-md"
                  />
                </div>
              </div>

              {/* Third column: Poster preview */}
              <div className=" p-4">
                {/* <h2 className="text-lg font-bold mb-2">Poster Preview</h2> */}
                <div className=" mb-4 border-2 h-40 border-gray-400 rounded-md flex items-center justify-center">
                  {/* Display poster preview */}
                  {posterPreview && <img src={posterPreview} alt="Poster Preview" className="w-full object-center object-contain " />}
                </div>
                {/* Input for uploading poster image */}

              </div>
            </div>
          </div>

        <div className='flex justify-center items-end mb-4'>
          <button className='px-3 py-2 bg-[#4C00A4] rounded-full text-white font-semibold'>Raise Query</button>
        </div>
        </div>

      </div>


    </>
  )
}

export default Support
