import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import About from './About';
import Contact from './Contact';

const Admin = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<b>Ecolearn - A Cloud Based Environmental Educational Platform</b>'],
            typeSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const courses = [
        {
            id: 1,
            title: 'Introduction to Environmental Science',
            description: 'Learn about the basic principles of environmental science and sustainability.',
        },
        {
            id: 2,
            title: 'Climate Change and Its Impact',
            description: 'Explore the causes and effects of climate change and global warming.',
        },
        {
            id: 3,
            title: 'Renewable Energy Sources',
            description: 'Understand the importance of renewable energy and its potential to reduce carbon footprints.',
        },
    ];

    const handleCourseClick = (courseId) => {
        console.log(`Course with id ${courseId} clicked`)
    }

    return (
        <>
            <div className='container bg-green-300 font-display min-h-[70vh] pl-20 pr-12 flex justify-between items-center'>
                <div className='w-1/2'>
                    <h1 className='text-[52px]'>
                        <span ref={el} />
                    </h1>
                </div>

                <div className='w-1/2 flex justify-end'>
                    <img
                        src="/src/assets/pic.png"
                        alt="Ecolearn"
                        style={{ width: "500px" }}
                    />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center font-display'>
                <div className='px-20 py-12 mx-4 text-3xl font-semibold'>Explore Our Courses</div>
                <div className='container px-20 grid grid-cols-3 gap-4'>
                    {courses.map((course) => (
                        <div key={course.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                            <p className="text-lg mb-6">{course.description}</p>
                            <button
                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600" onClick={() => handleCourseClick(course.id)}> View Course 
                            </button>
                        </div>
                    ))}
                </div>
                <Link to='/courses' target='_blank'><button className='bg-green-600 text-white px-4 py-3 my-4 rounded-lg hover:bg-green-700 hover:ring'>View More Courses</button></Link>
            </div>
            <About />
            {/* <Contact /> */}
        </>
    );
}

export default Admin;
