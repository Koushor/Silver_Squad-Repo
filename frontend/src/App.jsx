import { useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import User from './components/User';
import About from './components/About';
import Contact from './components/Contact';
import DiscussionForum from './components/DiscussionForum';
import Analytics from './components/Analytics';
import Courses from './components/Courses';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="Ecolearn" />
        <Routes>
          <Route path='/' element={<Admin />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/discussion' element={<DiscussionForum />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
        <div className='flex flex-col justify-center items-center'>
          <Link to='/discussion' target='_blank'><button className='px-6 py-3 my-2 bg-green-600 text-white font-display hover:ring ring-green rounded'>Move to Discussion Forum</button></Link>
        </div>
        <Contact />
      </BrowserRouter>
    </>
  )
}

export default App
