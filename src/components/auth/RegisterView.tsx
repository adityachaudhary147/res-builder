import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { RootState } from '../../redux/reducers';
import './registerview.css';
interface userprop{
  Username:string,
  Email:string,
  Password:string
}
export default function RegisterView() {
  const [user,setUser]=useState<userprop>({Username:'',Email:'',Password:''});
  const dispatch=useDispatch();
  function onchange(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e);
    const name=e.target.name;
    const value=e.target.value;
    setUser((val)=>{return {...val,[name]:value}});
    console.log(user);
  }
  const stateAA=useSelector((state:RootState)=>{return state.auth})
  function registration()
  {
    // dispatch(registeruseraction(user));
    // e.preventDefault();
    register(user.Username,user.Email,user.Password)(dispatch);
    console.log("user Regestration proceeded");
    console.log(stateAA);
  }
  
  // console.log(stateAA);
  const message33:String=stateAA.Message.message;
  return (
    <div>Register  {message33}
      <form >
       <div className='register-form'>
        <label>Username</label>
        <input type='text' name='Username' value={user.Username} onChange={(e)=>{return onchange(e)}}/>

        <label>Email</label>
        <input type='email' name='Email' value={user.Email} onChange={(e)=>{return onchange(e)}}/> 

        <label>Password</label>
        <input type="password" name='Password' value={user.Password} onChange={(e)=>{return onchange(e)}}/> 
        </div>
        </form>
        <button name='btn-non' className='submit-btn-register' onClick={registration}> Submit</button>




      </div>

  )
}
