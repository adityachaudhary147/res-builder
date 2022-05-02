import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import './loginview.css';
import {Navigate} from 'react-router'; 
interface loginDprops{
  Email:string,
  Password:string
}
export default function LoginView() {
  const [loginD,setLoginD]=useState<loginDprops>({Email:'',Password:''});
  const state23=useSelector((state:RootState)=>state.auth);
  const dispatch=useDispatch();

  
  function onchaneloginD(e: React.ChangeEvent<HTMLInputElement>){
    setLoginD((val)=>{return {...val,[e.target.name]:e.target.value}});
  }
  function submitLogin(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)
  {
    e.preventDefault();
    login(loginD.Email,loginD.Password)(dispatch);
    console.log(state23);

    
    

  }
  console.log(state23);
  return ( 
    <div>Login {state23.Message.message} {state23.auth.isLoggedIn && <Navigate to='/choose'></Navigate> }
      <form>
      <div className='login-form'>
      
        <label >Email</label>
        <input value={loginD.Email} name='Email' type='email' onChange={(e)=>onchaneloginD(e)} />
        <label> Password </label>
        <input value={loginD.Password} name='Password' type='password'  onChange={(e)=>onchaneloginD(e)} />
        <button onClick={(e)=>submitLogin(e)}> submit login</button>
        </div> </form>
      
    </div>
  )
}
