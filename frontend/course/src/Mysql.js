import React from 'react'
import { useNavigate } from 'react-router-dom'
const Mysql = () => {
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
      <div className='ganu'>
        <p style={{paddingLeft:'10px'}}>SQL Intro:-</p>
        <ul>
        <li>SQL Syntax</li>
        <li>SQL And, Or, Not</li>
        <li> SQL Update</li>
        <li>SQL Delete</li>
        <li> SQL Min and </li>
        <li>SQL Count, Avg, Sum</li>
        <li>SQL Like</li>
        <li>SQL </li>
        <li>SQL Left Join</li>
        <li> SQL Right Join</li>
        <li>SQL Full Join</li>
        <li>SQL Self Join</li>
        <li>SQL Union</li>
        <li>SQL Exists</li>
        <li>SQL Select Into</li>
        <li>SQL Stored Procedures</li>
        <li> SQL Operators</li>
        </ul>
        <p style={{paddingLeft:'10px'}}>SQL Database:-</p>
        <ul>
        <li> SQL Create DB</li>
        <li>SQL Create Table</li>
        <li>SQL Drop Table</li>
        <li>SQL Unique</li>
        <li>SQL Primary Key</li>
        <li> SQL Foreign Key</li>
        <li>SQL Index</li>
        <li>SQL Dates</li>
        <li>SQL Data Types</li>
        </ul>
          <p style={{paddingLeft:'10px'}}>SQL References:-</p>
          <ul>
          <li>SQL Keywords</li>
          <li>MySQL Functions</li>
          <li>SQL Server Functions</li>
          <li> SQL Quick Ref</li>
          </ul>
      </div>
    </div>
  )
}

export default Mysql
