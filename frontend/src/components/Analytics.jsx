import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = () => {
    const userGrowthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'New User',
                data: [30, 45, 60, 80, 90, 120],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: '#4bc0c0'
            }
        ]
    }

    const courseCompletionData = {
        labels: ['Course a', 'Course b', 'Course c', 'Course d'],
        datasets: [
            {
                label: 'Completion Rate',
                data: [75, 55, 60, 90],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }
        ]
    }

    const quizPerformanceData = {
        labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'],
        datasets: [
            {
                label: 'Average Score (%)',
                data: [80, 85, 78, 90],
                backgroundColor: 'rgba(255,99,132,0.6)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }
        ]
    }

    return (
        <div className='container mx-auto px-64 py-12 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold font-display my-2'>User Analytics</h1>
            <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold">Total Users</h2>
                    <p className="text-2xl font-bold">--</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold">Active Users</h2>
                    <p className="text-2xl font-bold">--</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold">Avg. Progress (%)</h2>
                    <p className="text-2xl font-bold">--</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-lg font-semibold">Course Completions</h2>
                    <p className="text-2xl font-bold">--</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div className='bg-white font-display p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-semibold'>User Growth over Time</h2>
                    <Line data={userGrowthData}/>
                </div>
                <div className='bg-white font-display p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-semibold'>Course Completion Rate</h2>
                    <Bar data={courseCompletionData}/>
                </div>
                <div className='bg-white font-display p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-semibold'>User Engagement with Courses</h2>
                    <Bar data={courseCompletionData}/>
                </div>
                <div className='bg-white font-display p-6 rounded shadow-md'>
                    <h2 className='text-2xl font-semibold'>Quiz Performance</h2>
                    <Bar data={quizPerformanceData}/>
                </div>
            </div>
        </div>
    )
}

export default Analytics
