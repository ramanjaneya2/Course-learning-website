import React from 'react'
import { useNavigate } from 'react-router-dom'
const Springboot = () => {
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
      <div className='gang'>
      <p style={{paddingLeft:'15px'}}>Spring Boot Tutorial:-</p>
      <ul>
     <li>Spring Boot Tutorial</li>
     <li>Spring Boot Version</li>
     <li>Spring vs Spring Boot vs Spring MVC</li>
      </ul>
      <p style={{paddingLeft:'15px'}}>Creating Project:-</p>
      <ul>
      <li>Download & Install STS IDE</li>
      <li>Spring Boot Example</li>
      <li>Spring Boot CLI</li>
      <li>SB Example-STS</li>
      </ul>
      <p style={{paddingLeft:'15px'}}>Project Components:-</p>
      <ul>
      <li>SB Annotations</li>
      <li>SB Dependency Management</li>
      <li>SB Application Properties</li>
      <li>SB Starters</li>
      <li>SB Starter Parent</li>
      </ul>
      <p style={{paddingLeft:'15px'}}>Tool Suite:-</p>
      <ul>
      <li>Hello World Example</li>
      <li>Project Deployment Using Tomcat</li>
      </ul>
      <p style={{paddingLeft:'15px'}}>Spring Boot AOP:-</p>
      <ul>
      <li>Spring Boot AOP</li>
      <li>AOP Before Advice</li>
      <li>AOP After Advice</li>
      <li>AOP Around Advice</li>
      </ul>
      </div>
    </div>
  )
}

export default Springboot
