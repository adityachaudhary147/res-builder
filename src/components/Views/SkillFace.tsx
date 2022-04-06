import React from "react";
import { useDispatch } from "react-redux";

import Down_Arrow from "../../assets/down-arrow.png";
import Up_Arrow from "../../assets/up.png";
import { removeSkill } from "../../redux/actionCreators";
import { RootState } from "../../redux/reducers";
interface Skillfaceprops {
  rootState: RootState;
  skill_filled_details: Function;
  skill_filled: Boolean;
  showSkill: Function;
}
export default function SkillFace({rootState, skill_filled_details,skill_filled,showSkill}:Skillfaceprops) {
    const dispatch=useDispatch();
    function handleRemove(st:string){
        
        dispatch(removeSkill(st));
    }
  return (
    <div>
      {rootState.sections.skill.skills.length == 0 ? (
        <div></div>
      ) : (
        <div>
          {" "}
          <div className="content-personal add-small">
            {" "}
            <div className="subsection-bar">
              {" "}
              <h1>Skills </h1>
              <div className="down-arrow">
                <button
                  onClick={(e) => skill_filled_details(e)}
                  className="down-arrow-btn"
                >
                  <img src={skill_filled ? Up_Arrow : Down_Arrow}></img>
                </button>
              </div>
            </div>{" "}
          </div>
          {skill_filled && (
            <div className="content-personal">
              {rootState.sections.skill.skills.map((val) => {
                return <div className="tile-sub-section"><div> {val}</div> <div> <span  className='red-cross' onClick={()=>handleRemove(val)}> ❌</span></div></div>;
              })}{" "}
              <button className="btn-add-more" onClick={() => showSkill()}>
                {" "}
                Add More Skills
              </button>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
