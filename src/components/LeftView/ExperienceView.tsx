import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  removeExp, updateEdu, updateExp, updateHeader } from '../../redux/actionCreators';
import { postExpAction } from '../../redux/actions/postExpAction';
import { RootState } from '../../redux/reducers'
import { degree } from '../../redux/reducers/educationReducer';
import { exp, expState } from '../../redux/reducers/expReducer';
import { HeadState } from '../../redux/reducers/headReducer'
import FooterView from './FooterView';
interface props{
  showHeader:Function,
  resid:string
}
export default function ExperienceView(props:props) {
  const experience:expState=useSelector((state:RootState)=>state.sections.exp);
  const dispatch=useDispatch();
  const empty:exp={ id:0,
    job_title:'',
    duration:'',
    description:'',
    description2:'',
    company:'',};
  const [state,setState]=useState<exp>(empty);
  
  function handleonchange(e:React.ChangeEvent<HTMLInputElement>)
  {
    const name=e.target.name;
    console.log(name);
    var value:string|number=e.target.value;
    setState(val=>{
      return {
        ...val,
        [name]:value,
      }
    })
  }
  function handleSubmit(){
    // dispatch(updateExp(state));
    postExpAction(state,props.resid)(dispatch);
    setState(empty);
    props.showHeader();
  }

//   export interface degree{
//     id?:number,
//     schoolname:string ,
//     location:string,
//     course:string,
//     start_year:string,
//     end_year:string,
// }
  return (
    <div>
      <div className='headerform'>
      <div className='content-personal'>
      <div className="inside-content-personal">
        <h1> Exp  Section</h1>

        
      <form className='form' >

      <div>
          <label>Company Name</label>
          <input name="company"  value={state.company} onChange={(e)=>handleonchange(e)}></input> 
            
          </div>

        <div >
          <label>Job Title</label>
          <input  name="job_title" value={state.job_title} onChange={(e)=>handleonchange(e)}></input>
          </div>
          <div>
          <label>Duration </label>
          <input name="duration" value={String(state.duration)} onChange={(e)=>handleonchange(e)}></input> 
          </div>
          <div>
          <label>Description</label>
          <input name="description" type='textarea' value={state.description} onChange={(e)=>handleonchange(e)}></input> 
          <input name="description2" type='textarea' value={state.description2} onChange={(e)=>handleonchange(e)}></input> 
            
          </div>
      
      </form>
    </div>
    </div>
    </div>
    
    <FooterView save={()=>{handleSubmit()}} cancel={()=>props.showHeader()} />
    </div>
  )
}
