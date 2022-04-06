import React from "react";
import { RootState } from "../../redux/reducers";
import { eduState } from "../../redux/reducers/educationReducer";

import Down_Arrow from "../../assets/down-arrow.png"
import Up_Arrow from "../../assets/up.png"
import { useDispatch } from "react-redux";
import { removeDegree } from "../../redux/actionCreators";
interface Edufaceprops{
    rootState:RootState
    education_filled_details:Function 
    edu_filled:Boolean
    showEducation:Function
}
export default function EduFace({rootState,education_filled_details,edu_filled,showEducation}:Edufaceprops) {
    const dispatch=useDispatch();
    function handleRemove(id:number){
        dispatch(removeDegree(id));
      }
    return (
    <div>
      {rootState.sections.education.education.length == 0 ? (
        <div></div>
      ) : (
        <div>
          {" "}
          <div className="content-personal add-small">
            {" "}
            <div className="subsection-bar">
              {" "}
              <h1>Education </h1>
              <div className="down-arrow">
                <button
                  onClick={(e) => education_filled_details(e)}
                  className="down-arrow-btn"
                >
                  <img src={edu_filled ? Up_Arrow : Down_Arrow}></img>
                </button>
              </div>
            </div>{" "}
          </div>
          {edu_filled && (
            <div className="content-personal">
              {rootState.sections.education.education.map((val) => {
                return <div className="tile-sub-section"><div> <div>{val.schoolname},{val.schoolname},{val.location}</div><div> {val.start_year}-{val.end_year}</div><div>{val.course}</div></div>
                <div> <span  className='red-cross' onClick={()=>handleRemove(val.id as number)}> ❌</span></div> </div>;
              })}{" "}
              <button
                className="btn-add-more"
                onClick={() =>showEducation()}
              >
                {" "}
                + Education
              </button>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
