import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Signup = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmpassword,setConfirmPassword]=useState("")
    let navi=useNavigate()
    const Rt=()=>{
      if(name===""){
        alert("enter your name")
      }else if(email===""){
        alert("enter your email")
      }else if(password===""){
        alert("enter your password")
      }else if(confirmpassword!==password){
        alert("please macth your password")
      }else{
        alert("success!")
      }
          navi('/Signup')
    }
    const Tr=()=>{
        navi('/')
    }
  return (
    <div className='e'>
      <div className='f'>
      <center>
        <form>
          <div>
            
            <h1>Signup</h1></div><br/>
            <input value={name} onChange={e=>setName(e.target.value)} type='text' placeholder='enter your name'/><br/><br/>
            <input value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='enter your email'/><br/><br/>
            <input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='enter your password' requiredautofocus/><br/><br/>
            <input value={confirmpassword} onChange={e=>setConfirmPassword(e.target.value)} type=' Confirmpassword' placeholder='Confirm  your Password'/><br/><br/>
            <button onClick={Rt} style={{cursor: 'pointer'}}>Signup</button><button onClick={Tr} style={{cursor: 'pointer'}}>Login</button>
            <h6>already do have an account click here to login</h6>
        </form>
      </center>
      </div>
    </div>
  )
}

export default Signup
