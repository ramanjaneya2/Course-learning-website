import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Signup from './Signup'
import Contacts from './contacts'
import About from './about'
import Course from './Courses'
import Frontend from './Frontend'
import Backend from './Backend'
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'
import Top from './React'
import Java from './Java'
import Mysql from './Mysql'
import Springboot from './Springboot'




const Path = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Home' element={<Home/>}></Route> 
        <Route path='/Contactus'element={<Contacts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/Courses/frontend' element={<Frontend/>}></Route>
        <Route path='/Courses/frontend/Html' element={<Html/>}></Route>
        <Route path='/Courses/frontend/css' element={<Css/>}></Route>
        <Route path='/Courses/frontend/JavaScript' element={<Javascript/>}></Route>
       <Route path='/Courses/frontend/Reactjs' element={<Top/>}></Route>
       <Route path='/Backend' element={<Backend/>}></Route>
       <Route path='/Backend/java' element={<Java/>}></Route>
       <Route path='/Backend/mysql' element={<Mysql/>}></Route>
       <Route path='/Backend/springboot' element={<Springboot/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path
