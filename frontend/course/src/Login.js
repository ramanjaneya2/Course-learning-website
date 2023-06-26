import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import img from './images/login.jpg'



const Login = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    let navi=useNavigate()
    const Ra=(e)=>{
        e.preventDefault()
        if(name===""){
            alert("enter your name")
        }else if(email===""){
            alert("enter your email")
        }else if(password===""){
            alert("enter your password")
        }else{
            alert("success!")
        }
        navi('/Home')
    }
    const Ru=()=>{
        navi('/Signup')
    }
return (
    <div className='main'>
    <div className='sub-main'>
        <center>
        <form>
            <div>
                <img className='log' src={img} alt=''/>
            <h1>Login</h1></div>
            <input value={name} onChange={e=>setName(e.target.value)} type='text' placeholder='enter your name'/><br/><br/>
            <input value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='enter your email'/><br/><br/>
            <input  value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='enter your password' requiredautofocus/><br/><br/>
            <button onClick={Ra} style={{cursor: 'pointer'}}>Login</button><button onClick={Ru} style={{cursor: 'pointer'}}>Signup</button>
            <h5>New user ? click here</h5>
        </form>
    </center>
    </div>
    </div>

  )
}

export default Login;
