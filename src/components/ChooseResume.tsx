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
import DelteIcon from '../assets/delete.png';
import { createNewFromCurrent } from '../redux/actions/UseCurrentResumeToCreateNew';

export default function ChooseResume() {

  const dispatch = useDispatch();
  // action for getting all the resumes 
  // function getallResume (){ 
  //     asyncThinkAction()(dispatch);
  // }

  const [name, setName] = useState("");

  const [copyState,setCopyState]=useState({name:'',resid:''});
  const resumelist: resumeState = useSelector((state: RootState) => state.resumelist);
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);
  useEffect(() => {
    // actionforFetchingResumes();
    asyncThinkAction()(dispatch);

  }, []);
  function handleAddResume(e: React.FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    console.log(name);

    const res = asyncThinkActionPostResume(name)();
    console.log(res);
    setName('');

    // action add resname to this specific user with name were


  }
  function createnewcopiedresume(e: React.FormEvent<HTMLFormElement>){
    // e.preventDefault();
    console.log(copyState);
    const res=createNewFromCurrent(copyState)(dispatch);

    setCopyState({name:'',resid:''});
    return;
    
  }
  function updateHello(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  console.log(resumelist);

  return (
    <div>
      <div>
        <div className='choose-head'>
          <div>
            {auth.auth.isLoggedIn && <h1>{`Welcome ${auth.auth.user.Username}`},</h1>}
            {!auth.auth.isLoggedIn && <Navigate to='/'></Navigate>}
          </div>
          <div>
            <button  className='logout-btn' onClick={() => logout()(dispatch)}> Logout </button>
          </div>
        </div>
        {resumelist.error != null ? <div> <span>"There is an error Please try Again "</span><button onClick={() => logout()(dispatch)}> Try Again </button></div> :
          <div>
            <h1 className='choose-resume-title'> Choose your Resume ⚡️</h1>
            <h4 className='choose-resume-title'> Your  resume – 100% free, forever, all features, unlimited downloads, yes really.</h4>
            {resumelist.isloading && "Loading"}
            {resumelist.data && resumelist.data.length == 0 && "You dont have any resume create one and start "}

            {resumelist.data && resumelist.data.map(val => { return <div className='resumeName' ><div><Link className='resumeName-link' to='/resume' state={{ from: val.Id }}>{val.Name} </Link></div><div><img className='delte-btn-choose-resume' onClick={()=> postDeleteResume(val.Id)(dispatch)} src={DelteIcon}></img></div></div>; })}

            <div className='createNew-options'>

            <h1>Create New Resume</h1>
            <div>

              <form onSubmit={(e) => handleAddResume(e)}>
                <div>
                  <label> Enter your resume name </label>
                  <input name="resumename" type="text" value={name} onChange={(e) => updateHello(e)} />
                </div>
                <button>Create New Resume</button>

              

              </form>

              <form onSubmit={createnewcopiedresume}>

             
              <h1>Copy content from 1 resume to build another version of the resume </h1>

              <div>

                <label> Enter the Name of the Resume </label>

              <input name='resname' type='text' value={copyState.name} onChange={(e)=>{ setCopyState((val)=>{return {...val,name:e.target.value}})}} />
              </div>
              <div>

              <label>Select a Resume whose copy you want</label>
              <select name="resumess"  value={copyState.resid} id="selectResume" onChange={(e)=>{ setCopyState((val)=>{return {...val,resid:e.target.value}})}}>
                <option value="select" >Select</option>
              {resumelist.data && resumelist.data.map(val => { return <option value={val.Id} >{val.Name} {val.Id}</option> })}
              </select>
              </div>
              
              <div>
              <button >Create a Copy  </button>

              </div>

             

              </form>
            </div>
            </div>
          </div>}
      </div>





    </div>

    // Get all the Resume of the user 

  )
}
