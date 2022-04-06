import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addSkill, removeSkill, updateEdu, updateHeader } from '../../redux/actionCreators';
import { RootState } from '../../redux/reducers'
import { degree } from '../../redux/reducers/educationReducer';
import { skillsState } from '../../redux/reducers/skillsReducer';
import FooterView from './FooterView';
interface props{
  showHeader:Function
}
export default function SkillsView(props:props) {
  const st:skillsState=useSelector((state:RootState)=>state.sections.skill);
  const dispatch=useDispatch();
  const [state,setState]=useState("");
  function handleRemove(st:string){
      dispatch(removeSkill(st));
  }
  function handleonchange(e:React.ChangeEvent<HTMLInputElement>)
  {
    setState(e.target.value);
  }
  function handleSubmit()
  {
    
      dispatch(addSkill(state));
      setState('');
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
        <h1> Add Skills Section</h1>
      <form className='form' >

        <div >
          <input name='skill' value={state} onChange={handleonchange} />

         
          </div>
      
      </form>
    </div>
    </div>
    </div>
      
    <FooterView save={()=>{handleSubmit()}} cancel={()=>props.showHeader()} />
    </div>
  )
}
