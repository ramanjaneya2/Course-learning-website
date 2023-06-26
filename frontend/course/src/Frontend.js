import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

const Frontend = () =>{
  let navi=useNavigate("")
  const ga=()=>{
    navi('/Courses/frontend/Html')
  }
 
  const react =()=>{
    navi('/Courses/frontend/Reactjs')
  }
  const javs=()=>{
    navi('/Courses/frontend/JavaScript')
  }
  const age=()=>{
    navi('/Courses/frontend/css')
  }
  return (
    <div>
      <h1 className='s'>Front-end</h1>
      <div className='q'>
      <div className='r'>
      <ul>
        <li className='w' onClick={ga}><button style={{cursor: 'pointer'}} >HTMl</button></li>
        <li className='w' onClick={age}><button style={{cursor: 'pointer'}}>CSS</button></li>
        <li className='w' onClick={javs}><button style={{cursor: 'pointer'}}>JAVASCRIPT</button></li>
        <li className='w' onClick={react} style={{paddingLeft:'55px'}}><button style={{width:'900px',cursor:'pointer'}}>ReactJs</button></li>
      </ul>
      </div>
      </div>
      <div><center><h1 style={{backgroundColor:'black', width:'400px',borderRadius:'30px', color:'white'}}>introduction to Frontend</h1></center>
      <p style={{paddingLeft:'80px',paddingRight:'100px'}}>Front-end development refers to the process of creating the user interface and user experience of a software application or website. It involves utilizing various technologies, languages, and frameworks to build the visual and interactive elements that users see and interact with directly.
</p><p style={{paddingLeft:'80px',paddingRight:'100px'}}>The front-end is responsible for the look, feel, and functionality of a website or application, ensuring that it is visually appealing, easy to navigate, and responsive across different devices. Front-end developers work closely with UX/UI designers to transform design concepts into actual code and implement the desired user experience.
</p><p style={{paddingLeft:'80px',paddingRight:'100px'}}>The key technologies used in front-end development include:
</p><ol style={{paddingLeft:'100px',paddingRight:'100px'}}>
      <li>
HTML (Hypertext Markup Language): HTML is the foundational language for creating the structure and content of web pages. It defines the elements and layout of a webpage, such as headings, paragraphs, images, and links.</li>
      <li> CSS (Cascading Style Sheets): CSS is used to describe the presentation and styling of HTML elements. It controls the visual appearance, including layout, colors, fonts, and other design aspects. CSS allows developers to customize the look and feel of a website or application.
</li>
      <li>JavaScript: JavaScript is a powerful programming language that adds interactivity and dynamic behavior to web pages. It enables features like form validation, interactive elements, animations, and data manipulation. JavaScript is essential for creating interactive and engaging user experiences.
</li>
      <li>Front-end Frameworks and Libraries: Front-end frameworks like React, Angular, and Vue.js, and libraries like jQuery, provide pre-built components, tools, and abstractions to streamline front-end development. These frameworks and libraries simplify complex tasks and enhance productivity.
</li>
</ol>
<p style={{paddingLeft:'100px',paddingRight:'100px'}}>
<p className='front'></p>
Front-end development involves tasks such as:
<br/>- Translating design concepts into HTML, CSS, and JavaScript code.
<br/>- Creating responsive layouts that adapt to different screen sizes and devices.
<br/>- Optimizing performance by minimizing file sizes and reducing load times.
<br/>- Implementing user interactions, animations, and other dynamic elements.
<br/>- Ensuring cross-browser compatibility and adherence to web standards.
<br/>- Collaborating with back-end developers to integrate front-end code with server-side functionalities.
<br/><br/>In summary, front-end development focuses on building the user interface and user experience of a website or application. It involves using HTML, CSS, JavaScript, and related technologies to create visually appealing, interactive, and responsive user interfaces that provide an optimal user experience.</p>

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </div>
    </div>
  )
}

export default Frontend
