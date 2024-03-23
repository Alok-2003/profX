import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { Button } from '@chakra-ui/react';

const Announce = () => {
    // State variables for form inputs

    const [posterPreview, setPosterPreview] = useState('');


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
    const [customText, setCustomText] = useState('');

    const handleCustomTextChange = (event) => {
        setCustomText(event.target.value);
    };




    return (
        <div className='h-screen w-full bg-[#babcbf]' >
            {/* top events */}
            {/* <div className='w-4/5 '> */}



            <div className='py-4 flex justify-center items-center'>
                <div className='w-4/5 h-16 flex justify-center bg-white items-center rounded-lg'>
                    <div className="w-5/6 flex justify-between text-white  ">
                        <div>
                            <h1 className='px-3 py-2 bg-[#4C00A4] rounded-full '>Organize an event</h1>
                        </div>
                        <div className='w-64 flex justify-between'>
                            <div>
                                <h1 className='px-3 py-2 bg-[#4C00A4] rounded-full '>For Students</h1>
                            </div>
                            <div>
                                <h1 className='px-3 py-2 bg-[#4C00A4] rounded-full'>For Teachers</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className='px-3 py-2 bg-[#4C00A4] rounded-full'>Organize an event</h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white rounded-xl">

                <div className="mt-6 flex justify-center ">
                    <div className='w-5/6 flex justify-center'>
                        <div className="w-5/6 flex  justify-between">
                            <div className="header text-white">
                                <h1 className='px-3 py-2 bg-[#4C00A4] rounded-full '> Options:</h1>
                            </div>
                            <div className="w-2/3 flex options justify-between  ">
                                <select id="year" className='border-2 border-gray-500 shadow-2xl px-4 rounded-full'>
                                    <option value="1">Year</option>
                                    <option value="2">1st Year</option>
                                    <option value="3">2nd Year</option>
                                    <option value="4">3rd Year</option>
                                    <option value="5">4th Year</option>
                                </select>
                                <select id="stream" className='border-2 border-gray-500 shadow-2xl px-4 rounded-full'>
                                    <option value="science">Science</option>
                                    <option value="commerce">Commerce</option>
                                    <option value="arts">Arts</option>
                                </select>
                                <select id="section" className='border-2 border-gray-500 shadow-2xl px-4 rounded-full' >
                                    <option value="A">Section A</option>
                                    <option value="B">Section B</option>
                                    <option value="C">Section C</option>
                                </select>
                                <select id="group" className='border-2 border-gray-500 shadow-2xl px-4 rounded-full'>
                                    <option value="group1">Group 1</option>
                                    <option value="group2">Group 2</option>
                                    <option value="group3">Group 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 flex justify-center">
                    <div className="w-2/3 grid grid-cols-3 ">
                        {/* First column: Event details */}
                        <div className="w-3/4 p-4">
                            <label htmlFor="title" className="mt-3 block text-sm font-medium text-gray-700">Title of the event:</label>
                            <label htmlFor="title" className="mt-3 block text-sm font-medium text-gray-700">Venue:</label>
                            <label htmlFor="title" className="mt-3 block text-sm font-medium text-gray-700">Category:</label>
                            <label htmlFor="title" className="mt-3 block text-sm font-medium text-gray-700">Eligibility:</label>
                            <label htmlFor="title" className="mt-3 block text-sm font-medium text-gray-700">Date:</label>
                            <label htmlFor="title" className="mt-3 block text-sm font-medium text-gray-700">Poster:</label>
                        </div>

                        {/* Second column: Input fields */}
                        <div className="w-11/12 p-4">
                            <div className="mb-4">

                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    // value={eventDetails.title}
                                    // onChange={handleInputChange}
                                    className="border-2   mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    // value={eventDetails.title}
                                    // onChange={handleInputChange}
                                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    // value={eventDetails.title}
                                    // onChange={handleInputChange}
                                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    // value={eventDetails.title}
                                    // onChange={handleInputChange}
                                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={eventDetails.date}
                                    onChange={handleInputChange}
                                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePosterUpload}
                                    className="border-2 mt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
                                />
                            </div>
                        </div>

                        {/* Third column: Poster preview */}
                        <div className=" p-4">
                            <h2 className="text-lg font-bold mb-2">Poster Preview</h2>
                            <div className=" mb-4">
                                {/* Display poster preview */}
                                {posterPreview && <img src={posterPreview} alt="Poster Preview" className="w-full h-auto" />}
                            </div>
                            {/* Input for uploading poster image */}

                        </div>
                    </div>
                </div>
                <Button colorScheme='blue' color={'white'} ml={'30%'} mb={'3%'}>Announce</Button>
            </div>


            {/* </div> */}
        </div>
    )
}





export default Announce;