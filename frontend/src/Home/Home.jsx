import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import {Outlet} from 'react-router-dom'
import AllTeacher from '../components/Teacher/AllTeacher'

const Home = () => {
  return (
    <>
      <div className="homePage">
        <Header/>
        <Outlet />
      
        <Footer/>
      </div>
      
    </>
  )
}

export default Home
