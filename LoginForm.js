import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function LoginForm() {
    const navigate = useNavigate()
    const [uname,setUname] = useState('')
    const [pwd,setPwd] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        if(uname === 'abc' && pwd === '123'){
           setIsLoggedIn(true)
        }else{
            alert('incorrect details')
        }
        isLoggedIn ? navigate('/QuestionPage') : alert('incorrect details')
    }
  return (
    <>
    <h1>Login Form</h1>
    <div>
        <form action="/login" method="post">
            UserName: <input type='text'  value={uname} onChange={e=>setUname(e.target.value)}/>
            <br/>
            Password:<input  type="text" value={pwd} onChange={e=>setPwd(e.target.value)}/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </ form>
    </div>
    </>
  )
}

export default LoginForm