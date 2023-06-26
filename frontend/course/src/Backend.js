import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import pos from './images/bac.jpg'
const Backend = () => {
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
      <h1 className='h'>Backend</h1>
      <div className='o'>
        <div className='p'>
      <ul>
        <li className='y' onClick={ion}><button style={{cursor: 'pointer'}}>Java</button></li>
        <li className='y' onClick={lion}><button style={{cursor: 'pointer'}}>MySql</button></li>
        <li className='y' onClick={king}><button style={{cursor: 'pointer'}}>Spring boot</button></li>
      </ul>
      </div>
      </div>
      <div>
        <center><h1 style={{backgroundColor:'purple',color:'whitesmoke',width:'400px',borderRadius:'30px'}}>introduction to Backend</h1></center>
        <p style={{paddingLeft:'100px',paddingRight:'100px'}}>Backend development refers to the creation and management of the server-side components of a software application or website. It focuses on the functionality, logic, and data processing that occurs behind the scenes, enabling the application to function properly and interact with the front-end or user interface.<br/><br/>In simpler terms, the backend is responsible for handling data storage, retrieval, and manipulation, as well as performing complex calculations, processing user inputs, and communicating with other systems or services. It plays a crucial role in ensuring that the application runs smoothly, securely, and efficiently.
        <br/><br/>Here are some key concepts and components commonly associated with backend development:</p>
        <img style={{paddingLeft:'200px',paddingRight:'200px',height:'500px', width:'800px',borderRadius:'900px'}} src={pos} alt='road map to backend'/>
      <ol style={{paddingLeft:'100px',paddingRight:'100px'}}>
        <li>Server: The server is a computer or a system that hosts the application and responds to client requests. It can be a physical server or a cloud-based service.</li>
        <li>Programming Languages: Backend development can be implemented using various programming languages, such as Python, Java, PHP, Ruby, or Node.js. These languages provide the tools and frameworks necessary to build server-side applications.</li>
        <li>Databases: Backend systems often rely on databases to store and manage large amounts of structured data. Popular databases include MySQL, PostgreSQL, MongoDB, or Redis. Developers interact with databases using query languages like SQL (Structured Query Language)</li>
        <li>APIs (Application Programming Interfaces): APIs enable communication and data exchange between different software systems. Backend developers design and implement APIs to expose specific functionalities of their applications, allowing other developers or services to interact with their application programmatically.</li>
        <li>Web Servers: Web servers handle incoming requests from clients (e.g., web browsers) and send back the appropriate responses. They ensure that the application's resources (HTML files, images, stylesheets) are delivered to the client.</li>
        <li>Security: Backend developers play a crucial role in ensuring the security of an application. They implement authentication and authorization mechanisms, protect against common vulnerabilities (e.g., cross-site scripting, SQL injection), and handle data encryption.</li>
        <li> Performance Optimization: Backend developers optimize application performance by fine-tuning database queries, caching data, and improving algorithms. They aim to minimize response times, reduce server load, and enhance scalability.</li>
        <li> Testing and Debugging: Backend developers write tests to verify the correctness and reliability of their code. They also troubleshoot and debug issues that arise during development or in production environments.</li>
      </ol>
      

      </div>
    </div>
  )
}

export default Backend
