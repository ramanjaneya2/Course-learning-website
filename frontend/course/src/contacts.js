import {React,useState} from 'react'

import './App.css'

const Contacts = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[number,setNumber]=useState("")
    const[text,setText]=useState("")
    const Nb=()=>{
        if(name===""){
            alert("enter your name")
        }
        else if(email===""){
            alert("enter your email")
        }
        else if(number===""){
            alert("enter your number")
        }
        else if(text===""){
            alert("enter your message")
        }
        else{
            alert("Success!")
        }
    }
   
  return (
    <div className='a'>
    <div className='b'>
    <center>
    <form>
      <div><h1>Contact us </h1></div><br/>
        <input value={name} onChange={e=>setName(e.target.value)} type='name' placeholder='enter your name'/><br/><br/>
        <input value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='enter your email'/><br/><br/>
        <input value={number} onChange={e=>setNumber(e.target.value)} type='number' placeholder='enter your number'/><br/><br/>
        <input value={text} onChange={e=>setText(e.target.value)} type='text' placeholder='Your message'/><br/><br/>
        <button onClick={Nb}style={{color:"blue"}}>Submit</button>
      </form>
      </center>
      </div>
    </div>
  )
}

export default Contacts
