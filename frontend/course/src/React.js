import React from 'react'
import { useNavigate } from 'react-router-dom'
const Top = () => {
    let navi=useNavigate("")
    const ga=()=>{
      navi('/Courses/frontend/Html')
    }
    const agy=()=>{
        navi('/Courses/frontend/css')
      }
      const javs=()=>{
        navi('/Courses/frontend/JavaScript')
      }
      const react =()=>{
        navi('/Courses/frontend/Reactjs')
      }

  return (
    <div>
       <h1 className='s'>Front-end</h1>
      <div className='q'>
      <div className='r'>
      <ul>
        <li className='w' onClick={ga}><button style={{cursor: 'pointer'}}>HTMl</button></li>
        <li className='w' onClick={agy}><button style={{cursor: 'pointer'}}>CSS</button></li>
        <li className='w' onClick={javs}><button style={{cursor: 'pointer'}}>JAVASCRIPT</button></li>
        <li className='w' onClick={react} style={{paddingLeft:'55px'}}><button style={{cursor: 'pointer'}}>REACTJS</button></li>
      </ul>
      </div>
      </div>
      <div className='ganr'>
      <p style={{paddingLeft:'15px'}}>React Tutorial:-</p>
      <ul>
      <li>React Intro</li>
      <li>React Render HTML</li>
      <li>React Class</li>
      <li>React Props</li>
      <li>React Events</li>
      <li>React Conditionals</li>
      <li>React Lists</li>
      <li>React Forms</li>
      <li>React Router</li>
      <li>React Memo</li>
      <li>React CSS Styling</li>
      </ul>
    <p style={{paddingLeft:'15px'}}>React Hooks:-</p>
    <ul>
    <li>What is a Hook?</li>
    <li>UseState</li>
    <li>UseEffect</li>
    <li>UseContext</li>
    <li>UseReducer</li>
    <li>UseCallback</li>
    <li>UseMemo</li>
    </ul>
    <p style={{paddingLeft:'15px'}}>React Exercises:-</p>
    <ul>
    <li>React Compiler</li>
    <li>React Exercises</li>
    <li>React Bootcamp</li>
    <li>React Certificate</li>
    </ul>
</div>
    </div>
  )
}

export default Top
