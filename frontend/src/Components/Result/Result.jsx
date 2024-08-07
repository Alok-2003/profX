import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";

const Result = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshToken, setRefreshToken] = useState(0);
  useEffect(() => {
    const handleMarksGet = async () => {
      try {
        const response = await axios.get('https://profx-api.vercel.app/api/receive');
        // const response = await axios.get('http://localhost:4000/api/receive');
        // Assuming the response contains the fetched data
        const data = response.data;
        // Handle the fetched data as needed, such as setting state or logging
        console.log('Fetched data:', data);
        setData(data)
        return data; // Return the fetched data if needed
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Throw the error to handle it in the calling code
      }
    };

    handleMarksGet();
  }, []);

  const createChartData = () => {
    const chartData = [["Student", "Physics", "Maths", "Python"]];
    data.forEach(student => {
      chartData.push([
        student.Name,
        parseFloat(student.MarksOneSub),
        parseFloat(student.MarksSecSub),
        parseFloat(student.MarksThirSub)
      ]);
    });
    return chartData;
  };


  return (
    <div className='mx-10'>
      <div className="mt-8 my-3 flex items-center justify-center border-2 rounded-md p-3 px-6">
        <p className="text-3xl font-bold" >Exam Results</p>
      </div>


      <table className='w-full shadow-lg my-4'>
        <thead>
          <tr className="border border-gray-800 px-4 py-2  text-blue-600 font-bold text-xl">
            <th className="border border-gray-800 px-4 py-2" >Name</th>
            <th className="border border-gray-800 px-4 py-2" >UID</th>
            <th className="border border-gray-800 px-4 py-2" >Section</th>
            <th className="border border-gray-800 px-4 py-2" >Physic</th>
            <th className="border border-gray-800 px-4 py-2" >Maths</th>
            <th className="border border-gray-800 px-4 py-2" >Python</th>
          </tr>
        </thead>
        <tbody className='text-xl'>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-800 px-4 py-2 text-center" >{item.Name}</td>
              <td className="border border-gray-800 px-4 py-2 text-center" >{item.UID}</td>
              <td className="border border-gray-800 px-4 py-2 text-center" >{item.Section}</td>
              <td className="border border-gray-800 px-4 py-2 text-center" >{item.MarksOneSub}</td>
              <td className="border border-gray-800 px-4 py-2 text-center" >{item.MarksSecSub}</td>
              <td className="border border-gray-800 px-4 py-2 text-center" >{item.MarksThirSub}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='my-10'>
        <Chart

          chartType="Bar"
          data={createChartData()}
          width="100%"
          height="300px"
          options={{
            title: 'Student Marks out of 100',
            titleTextStyle: {
              fontSize: 20, // Set the desired font size for the title
            },
            chartArea: { width: '60%' },
            hAxis: {
              title: 'Marks',
              minValue: 0,
              maxValue: 100,
            },
            vAxis: {
              titleTextStyle: { fontSize: 38 },
              title: 'Students',
            },
          }}
        />
      </div>

    </div>
  );
};

export default Result;
