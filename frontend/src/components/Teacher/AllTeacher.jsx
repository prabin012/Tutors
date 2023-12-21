import React from 'react'
import { Teachers } from '../../dummy'

const AllTeacher = () => {
  return (
    <>
        <div className="ourTeachers">
        <span className="ourteacherhead">Our Faculties</span>
        <div className="ourFaculties">
        {Teachers.map((m)=>(
        <>
        <div className="facultiesitem">
        <img src={m.images} alt="" />
        <h3>{m.name}</h3>
        </div>
       

        </>
      ))}
        </div>
        </div>
       
     
    </>
  )
}

export default AllTeacher
