import React from 'react'

import { RootState } from '../../redux/reducers/index';

interface subsectionProps{
    rootState:RootState
}
export default function Subsection({rootState}:subsectionProps) {
    // const [filles,setFilled]=useState(true);
    function filled_details(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)
    {

    }
  return (
    <div>
{/* {rootState.education.education.length==0? <div></div>:<div> <div className="content-personal add-small">  <div className="subsection-bar">  <h1>Education  </h1><div className="down-arrow"><button onClick={(e)=>education_filled_details(e)} className="down-arrow-btn"><img src={edu_filled ? Up_Arrow :Down_Arrow}></img></button></div></div> </div>{edu_filled && <div className="content-personal">{rootState.education.education.map(val=>{return <div className="tile-sub-section">{val.course}</div>})} <button onClick={()=>prop.showEducation()}> Add More Education</button> </div>}</div>} */}
</div>
  )
}
