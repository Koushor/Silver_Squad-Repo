import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/courses')
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.log('Error occurred...', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-48 py-12 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white p-6 rounded-lg shadow-md relative flex flex-col">
            <img
              src={`http://localhost:3000/${course.imageUrl}`}
              alt={course.title}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-700 flex-grow">{course.desc}</p>
            {/* <button className="bg-green-500 text-white px-4 py-2 rounded hover:ring absolute bottom-4 left-1/2 transform -translate-x-1/2">
              Enroll
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
