import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { rootCertificates } from 'tls';
import { asyncThinkAction } from '../redux/actions/getResumeaction';
import reducers, { RootState } from '../redux/reducers';
import { resumeState } from '../redux/reducers/resumeReducer';
import { logout } from '../redux/actions/auth';
import { Navigate } from 'react-router';
import './chooseresume.css';
import { getMaxListeners } from 'process';
import { asyncThinkActionPostResume } from '../redux/actions/postResumeName';
import { Link } from 'react-router-dom';
import BuildNPreview from '../BuildNPreview';
import { postDeleteResume } from '../redux/actions/postDeleteResume';

export default function ChooseResume() {

const dispatch=useDispatch();
    // action for getting all the resumes 
    // function getallResume (){ 
    //     asyncThinkAction()(dispatch);
    // }

    const [name,setName]=useState("");
    const resumelist:resumeState=useSelector((state:RootState)=>state.resumelist);
    const auth=useSelector((state:RootState)=>state.auth);
    console.log( auth);
    useEffect(()=>{
        // actionforFetchingResumes();
        asyncThinkAction()(dispatch);
       
    },[]);
    function handleAddResume(e:React.FormEvent<HTMLFormElement>){
      // e.preventDefault();
      console.log(name);
      
      const res=asyncThinkActionPostResume(name)();
      console.log(res);
      setName('');
      
      // action add resname to this specific user with name were

    }
    function updateHello(e:React.ChangeEvent<HTMLInputElement>){
      setName(e.target.value);
    }
    console.log(resumelist);

  return (
    <div>
        <div>
          <div className='choose-head'>
            <div>
          {auth.auth.isLoggedIn && <h1>{`Welcome ${auth.auth.user.Username}`}</h1>}
          { !auth.auth.isLoggedIn && <Navigate to='/'></Navigate>}
          </div>
          <div>
          <button onClick={()=>logout()(dispatch)}> Logout </button>
          </div>
          </div>
          {resumelist.error!=null ? <div> <span>"There is an error Please try Again "</span><button onClick={()=>logout()(dispatch)}> Try Again </button></div>:
         <div>
        <h1> Choose your Resume you previously worked on </h1>
         {resumelist.isloading && "Loading"} 
         { resumelist.data && resumelist.data.length==0 && "You dont have any resume create one and start "} 
         
         {resumelist.data && resumelist.data.map(val=>{ return<h1 className='resumeName' ><Link className='resumeName-link' to='/resume' state={{ from: val.Id }}>{val.Name} </Link><button onClick={()=>postDeleteResume(val.Id)(dispatch)}>Delete</button></h1>;})}


         <h1>Create New Resume</h1> 
         <div>

         <form onSubmit={(e)=>handleAddResume(e)}>
           <div>
           <label> Enter your resume name </label>
           <input name="resumename" type="text" value={name} onChange={(e)=>updateHello(e)} /> 
           </div>
           <button>Create New Resume</button>

           <h1>Copy content from above resume to build another version of the resume </h1>

           
         </form>
         </div>
          </div>}
         </div>





    </div>

    // Get all the Resume of the user 

  )
}
