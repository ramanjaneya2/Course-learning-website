import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
const Html = () => {
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
        <li className='w' onClick={ga}><button style={{cursor: 'pointer'}} >HTMl</button></li>
        <li className='w' onClick={agy}><button style={{cursor: 'pointer'}} >CSS</button></li>
        <li className='w' onClick={javs}><button style={{cursor: 'pointer'}} >JAVASCRIPT</button></li>
        <li className='w' onClick={react} style={{paddingLeft:'55px'}}><button style={{cursor: 'pointer'}} >REACTJS</button></li>
      </ul>
      </div>
      </div>
      <div className='ga'>
        <p style={{paddingLeft:'10px'}}>HTML Tutorial:-</p>
        <ul>
        <li>What is HTML</li>
        <li>HTML Text Editors</li>
        <li>HTML Building Blocks</li>
        <li>HTML Heading</li>
        <li>HTML Phrase Tags</li>
        <li>HTML Image</li>
        <li>HTML Table</li>
        <li>HTML Ordered List</li>
        <li>HTML Ordered List</li>
        </ul>
        <p style={{paddingLeft:'10px'}} >HTML Attributes:-</p>
        <ul>
        <li>HTML Global Attributes</li>
        <li>HTML Event Attributes</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>HTML Tags List:-</p>
       <ul>
       <li>HTML 5 Tags</li>
        <li>HTML (!DOCTYPE) Tag</li>
        <li>HTML (abbr) Tag</li>
        <li>HTML (addres/) Tag</li>
    </ul>
    <p style={{paddingLeft:'10px'}}>HTML Misc:-</p>
    <ul>
    <li>HTML Button onClick</li>
    <li>HTML Checkbox Tag</li>
    <li>HTML code Tag</li>
    <li>HTML favicon</li>
    <li>HTML Login Form</li>
    <li>HTML Radio Tag</li>
    <li>HTML Registration Form</li>
    <li>HTML Required Attribute</li>
    <li>HTML Space Code</li>
    </ul>
    </div>
    </div>
  )
}

export default Html
