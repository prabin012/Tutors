import { useContext } from 'react'
import AllTeacher from '../Teacher/AllTeacher'
import  './header.css'
import { Link } from 'react-router-dom'
import {AppContext} from '../../context/AppContect.js'

const Header = () => {
  const {student,teachers} = useContext(AppContext);

  // if(!student) return null;
  return (
    <>
      <div className="navbarContaner">
        <div className="navbarElement">
            <div className="navbarLogo">
                <span className="logotext">Tutors..</span>
            </div>
            <div className="narbarItem">
                <ul className="navbarList">
                    <li className="Link home navbartext"><Link to='/' className='Links'>Home</Link></li>
                    <li className="Link home navbartext"><Link to='/about' className='Links'>Notes</Link></li>
                    <li className="Link home navbartext"><Link to='/contact' className='Links'>Lectures</Link></li>
                    <li className="Link home navbartext"><Link to='/assignment' className='Links'>Assignment</Link></li>
                   {teachers? <li className="Link home navbartext"><Link to='/Teacher' className='Links'>Teacher</Link></li>:""} 
                   {student || teachers? null:<li className="regis home navbartext"><Link to='/login' className='Links'>Login</Link></li>} 
                   {student || teachers? null:<li className="regis home navbartext"><Link to='/register' className='Links'>Register</Link></li>} 
                </ul>
            </div>

            <div className="portoalUsername">
               {student? <span className="userPortail">{student.name}</span>:""} 
               {teachers? <span className="userPortail">{teachers.name}</span>:""} 
            </div>
        </div>
       
      </div>
     
    </>
  )
}

export default Header
