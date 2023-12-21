
import './App.css';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Body from './components/body/Body';
import Teacher from './components/Teacher/Teacher';
import Leatures from './components/Lecture/Lectures';
import Assignment from './components/Assignment/Assignment';
import TeacherAuth from './Authentication/TeacherAuth';
import LoginTeacher from './Authentication/LoginTeacher';
import { useContext } from 'react';
import { AppContext } from './context/AppContect';
function App() {
  const {student} = useContext(AppContext)
  return (
    <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<Home/>}>
          <Route path='/' element={ <Body/> }/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Leatures/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/Teacher' element={<Teacher/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tlogin' element={<LoginTeacher/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/teacherauth' element={<TeacherAuth/>}/>
          
        </Routes>
    </BrowserRouter>
 

   
    
  );
}

export default App;
