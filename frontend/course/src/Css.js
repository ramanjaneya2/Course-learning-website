import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
const Css = () => {
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
      <div className='gan'>
        <p style={{paddingLeft:'10px'}}>CSS Tutorial:-</p>
        <ul>
        <li>What is CSS</li>
        <li>CSS Syntax</li>
        <li>CSS Selector</li>
        <li>Inline CSS</li>
        <li>nternal CSS</li>
        <li>External CSS</li>
        <li>External CSS</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>CSS Properties:-</p>
        <ul>
        <li>CSS Background</li>
        <li>CSS Border</li>
        <li>CSS border-radius</li>
        <li>CSS Display</li>
        <li>CSS Buttons</li>
        <li>CSS Float</li>
        <li>CSS Font</li>
        <li>CSS Font-size</li>
        <li>CSS font-family</li>
        <li>CSS font-weight</li>
        <li>CSS Colors</li>
        <li>CSS Important</li>
        <li>CSS Background-color</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>CSS Design:-</p>
        <ul>
        <li>CSS Grid</li>
        <li>CSS Layout</li>
        <li>CSS Table</li>
        <li>CSS Box Model</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>Miscellaneous:-</p>
        <ul>
        <li>Margin vs Padding</li>
        <li>Class vs Id</li>
        <li>CSS Scrollbar</li>
        <li>Types of CSS</li>
        <li>CSS vs CSS3</li>
        <li>CSS vs SCSS</li>
        </ul>
      </div>
    </div>
  )
}

export default Css
