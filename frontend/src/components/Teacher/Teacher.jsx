import './teacher.css'
import { Link } from 'react-router-dom'

const Teacher = () => {
  return (
    <>
      <div className="teacherCotainer">
        <div className="TeacherSidebar">
        <div className="narbarItem teachermainContainer">
                <ul className="navbarList teacherNav">
                    <li className="Link home navbartext"><Link to='/t' className='Links teacherLinks'>Add Note</Link></li>
                    <li className="Link home navbartext"><Link to='/g' className='Links teacherLinks'>Add Lecture</Link></li>
                    <li className="Link home navbartext"><Link to='/b' className='Links teacherLinks'>Assignment</Link></li>
                </ul>

                <div className="addItems">
                    <span className='teacherallitem'>Add Note | Lectures | Assignment</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Teacher
