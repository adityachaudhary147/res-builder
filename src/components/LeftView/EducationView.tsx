import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isReturnStatement } from 'typescript';
import {  removeDegree, updateEdu, updateExp, updateHeader } from '../../redux/actionCreators';
import { RootState } from '../../redux/reducers'
import { degree, eduState } from '../../redux/reducers/educationReducer';
import { HeadState } from '../../redux/reducers/headReducer'
import FooterView from './FooterView';
interface props{
  showHeader:Function
}
// form only 
export default function EducationView(prop:props) {
  const st:eduState=useSelector((state:RootState)=>state.sections.education);
  const empty:degree={start_year:'',course:'',end_year:'',schoolname:'',location:'',id:0};
  const [state,setState]=useState<degree>(empty);
  const dispatch=useDispatch();
  function handleonchange(e:React.ChangeEvent<HTMLInputElement>)
  {
    const name=e.target.name;
    console.log(name);
    var value:string|number=e.target.value;
    setState((val)=>({...val,[name]:value}));
    console.log(state);
    return;
    // dispatch(updateEdu({[name]:value}));
  }
  function handleSubmit()
  {
    dispatch(updateEdu(state));
    console.log(state);
    setState(empty);
    prop.showHeader();



  }
  function handleRemove(id:number){
    dispatch(removeDegree(id));
  }

  return (
    <>
    
      <div className='headerform'>
      <div className='content-personal'>
      <div className='inside-content-personal'>
        <h1> Education Section</h1>
      <form className='form' >
        <div >
          <label>Univ Name</label>
          <input  name="schoolname"  value={state.schoolname} onChange={(e)=>handleonchange(e)}></input>
          </div>
          <div>
          <label>Course</label>
          <input name="course" value={state.course}  onChange={(e)=>handleonchange(e)}></input> 
          </div>
          <div>
          <label>start year</label>
          <input name="start_year"  value={state.start_year}  onChange={(e)=>handleonchange(e)}></input> 
            
          </div>
          <div>
          <label>end year</label>
          <input name="end_year"  value={state.end_year}  onChange={(e)=>handleonchange(e)}></input> 
             
          </div>
          <div>
          <label>Location</label>
          <input name="location" value={state.location}   onChange={(e)=>handleonchange(e)}></input> 
          </div>
         
      
      </form>
    </div>
    </div>
    
    </div>
    <FooterView save={()=>{handleSubmit()}} cancel={()=>prop.showHeader()} />
    </>
    
    

  )
}
