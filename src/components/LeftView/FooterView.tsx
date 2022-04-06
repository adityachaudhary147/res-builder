import React from 'react'
import './FooterView.css';
import Delete from "../../assets/delete.png";

interface footerprops{
    delete?:boolean,
    save:Function
    cancel?:Function
}
export default function FooterView(props:footerprops) {
  return (
    <div className='footerview'>
        <div className="foot"> 
       <div className="delete" > {props.delete && <span><img  className="delete-content-icon" src={Delete}></img></span>   } {props.delete && <span>Delete</span>}</div> 
        <div className="cancel-btn" onClick={()=>props.cancel?props.cancel():0}>Cancel</div>
        <div className="save-btn" onClick={()=>props.save()}>Save </div>
        </div>
    </div>
  )
}
