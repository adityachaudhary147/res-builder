import React from "react";
import { RootState } from "../../redux/reducers";

import Down_Arrow from "../../assets/down-arrow.png";
import Up_Arrow from "../../assets/up.png";
import { removeExp } from "../../redux/actionCreators";
import { useDispatch } from "react-redux";
import { RemoveExp } from "../../redux/actions/RemoveExp";
interface Expfaceprops {
  rootState: RootState;
  exp_filled_details: Function;
  exp_filled: Boolean;
  showExp: Function;
  resid:string;
}
export default function ExpFace({
  rootState,
  exp_filled_details,
  exp_filled,
  showExp,
  resid,
}: Expfaceprops) {
    const dispatch=useDispatch();
    function removeExp(id:number){
      RemoveExp(String(id),resid)(dispatch);
    }
  return (
    <div>
      {rootState.sections.exp.exp.length == 0 ? (
        <div></div>
      ) : (
        <div>
          {" "}
          <div className="content-personal add-small">
            {" "}
            <div className="subsection-bar">
              {" "}
              <h1>Experience </h1>
              <div className="down-arrow">
                <button
                  onClick={(e) => exp_filled_details(e)}
                  className="down-arrow-btn"
                >
                  <img src={exp_filled ? Up_Arrow : Down_Arrow}></img>
                </button>
              </div>
            </div>{" "}
          </div>
          {exp_filled && (
            <div className="content-personal">
              {rootState.sections.exp.exp.map((val) => {
                return (
                  <div className="tile-sub-section">
                    <div> <div>{val.company}, { val.job_title }, {val.duration}</div>
                    <div>{val.description},</div><div>{val.description2}</div> </div>{" "}
                    <div>
                      {" "}
                      <span
                        className="red-cross"
                        onClick={() => removeExp(Number(val.id)) }
                      >
                        {" "}
                        ❌
                      </span>
                    </div>
                  </div>
                );
              })}{" "}
              <button className="btn-add-more" onClick={() => showExp()}>
                {" "}
                Add More Exp
              </button>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
