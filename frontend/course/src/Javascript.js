import React from 'react'
import { useNavigate } from 'react-router-dom'
const Javascript = () => {
    let navi=useNavigate("")
    const ga=()=>{
      navi('/Courses/frontend/Html')
    }
    const agy=()=>{
        navi('/Courses/frontend/css')
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
        <li className='w'><button style={{cursor: 'pointer'}}>JAVASCRIPT</button></li>
        <li className='w' onClick={react} style={{paddingLeft:'55px'}}><button style={{cursor: 'pointer'}}>REACTJS</button></li>
      </ul>
      </div>
      </div>
      <div className='gani'>
    <p style={{paddingLeft:'10px'}}>JavaScript Tutorial:-</p>
    <ul>
        <li>JavaScript Introduction</li>
        <li>JavaScript Example</li>
        <li>JavaScript Example</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>JavaScript Basics:-</p>
        <ul>
        <li>JavaScript Basics</li>
        <li>JS Variable</li>
        <li>JS Data Types</li>
        <li>JS Operators</li>
        <li>JS If Statement</li>
        <li>JS Switch</li>
        <li>JS Loop</li>
        <li>JS Function</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>JavaScript Objects:-</p>

          <ul>
            <li>JS Array</li>
            <li>S String</li>
            <li>JS Date</li>
            <li>JS Math</li>
            <li>JS Number</li>
            <li>JS Boolean</li>
          </ul>
          <p style={{paddingLeft:'10px'}}>JavaScript BOM:-</p>
        <ul>
        <li>Browser Objects</li>
            <li>Window Object</li>
            <li>History Object</li>
            <li>Navigator Object</li>
            <li>Screen Object</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>Exception Handling:-</p>
        <ul>
            <li>JS Exception Handling</li>
            <li>JavaScript try-catch</li>
        </ul>
      </div>
    </div>
  )
}

export default Javascript
