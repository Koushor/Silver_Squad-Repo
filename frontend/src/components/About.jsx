import React from 'react'

const About = () => {
    return (
        <div>
            <div className='container font-display flex justify-center items-center gap-36 bg-green-300 px-56 py-12'>
                <div><img src="/src/assets/pic2.jpeg" alt="..." /></div>
                <section>
                    <div className='text-3xl font-semibold'>Why Ecolearn ? </div>
                    <ul className='my-2'>
                        <li className='list-disc'>Interactive Learning Modules in Free of Cost</li>
                        <li className='list-disc'>Personalized Learning Paths</li>
                        <li className='list-disc'>Real-Time Analytics</li>
                        <li className='list-disc'>Cloud-Based Accessibility</li>
                        <li className='list-disc'>Sustainability-Focused Education</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default About
