import React, { createContext, useEffect, useState } from 'react'
const AppContext = createContext();

const AppProvider =({children})=>{

    const [student, setStudent] = useState();
    const [teachers, setTeachers] = useState();
    

    useEffect(()=>{
        window.localStorage.setItem("student", JSON.stringify(student))
        window.localStorage.setItem("teacher", JSON.stringify(teachers))
        // getinfo()
      },[student,teachers])

    return <AppContext.Provider value={{
        student, 
        setStudent,
        teachers,
         setTeachers
    
    }}>{children}</AppContext.Provider>


}

export {AppContext, AppProvider}