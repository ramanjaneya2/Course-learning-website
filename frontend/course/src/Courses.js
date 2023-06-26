import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Course = () => {
  let navi=useNavigate("")
  const l=()=>{
    navi('/Courses/frontend')
  }
  const p=()=>{
    navi('/Backend')
  }
  return (
    <div>
      <div className='g'>
      <div className='x'>
      <ul>
        <li className='m'><button style={{cursor: 'pointer'}}>Full Stack</button></li>
        <li onClick={l} className='m'><button style={{cursor: 'pointer'}}>Front-end</button></li>
        <li onClick={p} className='m'><button style={{cursor: 'pointer'}}>Back-end</button></li>
        </ul>
        </div>
      </div>
      <div>
     <center><h1  style={{backgroundColor:'pink', width:'400px',borderRadius:'30px'}}> Roadmap to Full Stack</h1></center>
       <p style={{paddingLeft:'100px',paddingRight:'100px'}}>What Is A Full Stack Java Developer ?<br/>
<ul>
<li>A full stack Java developer is one who have a complete idea towards the development of the application where all the layers such as</li>
<li>Data source layer, Application layer and Presentation layer are going to be get designed.</li>
<li>It is the end-to-end product development strategy.</li>
<li>As the Java has its own unique capabilities so Full stack developer in Java has a great future in IT industry now a day.</li>
<li>Hence the java full stack developers are having a great demand now a day and most of the companies are looking for such developer.</li>
</ul>
<p>Here before we are going to discuss the various opportunities in Full stack Java development, let us first understand the concept of Full stack Java development process and have a glimpse of its various aspects.<br/>
In the Full stack Java development, the front-end developer and back-end developer are essential factor. Now a day it is being considered as a demandable role and for a good reason we could not be able to get the internet black holes without the help of them.</p>
</p>
<p style={{paddingLeft:'100px',paddingRight:'100px'}}>The front-end Java developer is used to play a vital role because most of the web application will be get selected based on their looking aspect.</p>
<h4 style={{paddingLeft:'100px',paddingRight:'100px'}}>The Front End</h4>
<p></p>
<p style={{paddingLeft:'100px',paddingRight:'100px'}}>As we know that, the front-end Java developer is used to play a vital role because most of the web application will be get selected based on their looking aspect.<br/> The <i> front-end developer</i> is one who is comfortable with the Front-end technology, Framework and API’s</p>
<h4 style={{paddingLeft:'100px',paddingRight:'100px'}}>Front-end Technology :</h4>
<ul style={{paddingLeft:'100px',paddingRight:'100px'}}> 
<li>To design the front end application, we are mostly using the HTML, CSS and Java script technology.</li>
<li>The latest version of HTML is HTML 5 and CSS has CSS3 which comes with lot of functionality and beautiful templates which add a helping hand for the developer to work with.</li>
<li>We can use the JavaScript to make the page more dynamic by adding the event based responsive pages</li>
<li>The more common examples of scripts which are mostly used by the front-end developers are Angular.js, React JS, Node JS, Database & Cache, etc.</li>
</ul>
<div>
  
 <div style={{paddingLeft:'150px',borderRadius:'20px'}}> <div className='hi'></div></div>
</div>
<h5 style={{paddingLeft:'100px',paddingRight:'100px'}}>What is Back-end Development?</h5>
<p style={{paddingLeft:'100px',paddingRight:'100px'}}>Backend web development involves building all the aspects of a website that are not visible to the users but are essential for the proper working and functioning of the website. It is the behind-the-scenes function of different web applications and involves creating and maintaining the code that runs a website smoothly.</p>
<p style={{paddingLeft:'100px',paddingRight:'100px'}}>The backend comprises three main parts —</p>
<ul style={{paddingLeft:'100px',paddingRight:'100px'}}>
<li>A Database - A database helps us store a large amount of information in an efficient and structured way compared to storing that information in a text file.</li>
<li>Server - A server is a computer that receives user requests through the front-end interface (also known as the client) and responds with a result computed by the application</li>
<li>Application - An application is a computer program that listens for requests on the server, retrieves information from the database, and sends a response through the server.</li>
</ul>
<p style={{paddingLeft:'100px',paddingRight:'100px'}}>Rather than front-end development that concentrates on the development of the user interface, backend development handles server-side web application functionality and integration as well as tasks such as designing APIs, generating libraries, and dealing with multiple components of the system. Backend programmers create the code that enables database and application communication.</p>


      </div>
    </div>
    
  )
}

export default Course
