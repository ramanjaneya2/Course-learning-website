import React from 'react'
import { useNavigate } from 'react-router-dom'
const Java = () => {
    let navi=useNavigate("")
  const ion =()=>{
    navi('/Backend/java')
  }
  const lion=()=>{
    navi('/Backend/mysql')
  }
  const king=()=>{
    navi('/Backend/springboot')
  }
  return (
    <div>
      <i><h1 className='h'>Backend</h1></i>
      <div className='o'>
        <div className='p'>
      <ul>
        <li className='y' onClick={ion}><button style={{cursor: 'pointer'}}>Java</button></li>
        <li className='y' onClick={lion}><button style={{cursor: 'pointer'}}>MySql</button></li>
        <li className='y' onClick={king}><button style={{cursor: 'pointer'}}>Spring boot</button></li>
      </ul>
      </div>
      </div>
      <div className='ganger'>
       <p style={{paddingLeft:'10px'}}>Java Tutorials:-</p>
       <ul>
      <li>Java Intro</li>
      <li>Java Syntax</li>
      <li>Java Variables</li>
      <li>Java Data Types</li>
      <li>Java Operators</li>
      <li>Java Strings</li>
      <li>Java If...Else</li>
      <li>Java While Loop</li>
      <li>Java For Loop</li>
      <li>Java Break/Continue</li>
      <li>Java Arrays</li>
    </ul>
    <p style={{paddingLeft:'10px'}}>Java Methods:-</p>
    <ul>
    <li>Java Methods</li>
    <li>Java Scope</li>
    <li>Java Recursion</li>
  </ul>
  <p style={{paddingLeft:'10px'}}>Java Classes:-</p>
  <ul>
  <li>Java OOP</li>
  <li>Java Class Methods</li>
  <li>Java Constructors</li>
  <li>Java Modifiers</li>
  <li>Java Inner Classes</li>
  <li>Java Abstraction</li>
  <li>Java Interface</li>
  <li>Java User Input</li>
  <li>Java Date</li>
  <li>Java ArrayList</li>
  <li>Java LinkedList</li>
  <li>Java Iterator</li>
  <li>Java Thread</li>
</ul>
<p style={{paddingLeft:'10px'}}>Java File Handling:-</p>
   <ul>
   <li>Java Files</li>
   <li>Java Create/Write Files</li>
   <li>Java Read Files</li>
   <li> Delete Files</li>
</ul>
      </div>
    </div>
  )
}

export default Java
