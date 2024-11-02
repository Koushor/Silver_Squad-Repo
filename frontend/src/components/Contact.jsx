import React from 'react'

const Contact = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>
                <span>Eco</span><span className='text-green-500'>learn/&gt;</span>
            </div>
            <div className='flex justify-center items-center'>All Rights Reserved || Copyright {"\u0040"}Silicon Squad</div>
            <div>
                <div>Email: <a href="">siliconsquad24@gmail.com</a></div>
                <div>Discord: <a href=""></a></div>
                <div>Github: <a href=""></a></div>
            </div>
        </div>
    )
}

export default Contact
