import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className='bg-green-900 px-10 py-4 flex justify-between items-center'>
            <div className='flex justify-center items-center gap-6'><img src="/src/assets/logo.jpg" alt="" style={{height: "40px"}}/>
            <Link className='text-white font-semibold text-3xl font-display' to="/">{props.title}</Link>
            </div>
            <div className='text-white font-medium font-display flex gap-3 justify-center items-center'>
                <Link className='hover:underline hover:font-semibold' to="/">Home</Link>
                <Link className='hover:underline hover:font-semibold' to="/about">About</Link>
                <Link className='hover:underline hover:font-semibold p-2 bg-black' to="/user">Log In</Link>
                <Link className='hover:underline hover:font-semibold' to="/contact">Contact Us</Link>
                <div className="btn-group">
                    <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Imp Links
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" target='_blank' to="/user">User</Link></li>
                        <li><Link className="dropdown-item" target='_blank' to="/">Courses</Link></li>
                        <li><Link className="dropdown-item" target='_blank' to="/">Quiz</Link></li>
                        <li><Link className="dropdown-item" target='_blank' to="/discussion">Discussion Forum</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" target='_blank' to="/analytics">View Analytics</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

Navbar.propTypes = {
    title: PropTypes.string
}
