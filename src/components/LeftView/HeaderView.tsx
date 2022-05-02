import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHeader } from "../../redux/actionCreators";
import { RootState } from "../../redux/reducers";
import { HeadState } from "../../redux/reducers/headReducer";
import FooterView from "./FooterView";
import Down_Arrow from "../../assets/down-arrow.png"
import Up_Arrow from "../../assets/up.png"
import Subsection from "../Misc/Subsection";
import EduFace from "../Views/EduFace";
import { preProcessFile } from "typescript";
import { prependListener } from "process";
import ExpFace from "../Views/ExpFace";
import SkillFace from "../Views/SkillFace";
import { postPersonalDetails } from "../../redux/actions/postPersonalDetails";
interface props{
  resid:string
  toggleContent:Function
  showEducation:Function
  showExp:Function
  showSkill:Function
  showHeader:Function
}
export default function HeaderView(prop:props) {
  const st: HeadState = useSelector((state: RootState) => state.personal);
  const [st2,setSt2] = useState(st);
  const rootState:RootState=useSelector((state:RootState)=>state);
  const dispatch = useDispatch();
  const initState={save:true,edit:false};
  const [state,setState]=useState(initState);
  const [edu_filled,setEdu_filled]=useState(false);
  const [exp_filled,setExp_filled]=useState(false);
  const [skill_filled,setSkill_filled]=useState(false);
  function exp_filled_details(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
    setExp_filled(val=>!val);
    
    }  
    function skill_filled_details(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
      setSkill_filled(val=>!val);
     
      }  
function education_filled_details(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
setEdu_filled(val=>!val);

}
  function handleonchange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    console.log(name);
    var value: string | number = e.target.value;
    if (name == "mobile") value = Number(value);
    setSt2((val)=>{
      return {...val,[name]:value}
    })
  }
  function saveit(){
    console.log(st2);
    dispatch(updateHeader(st2));
    postPersonalDetails(st2,prop.resid)();
    setState({edit:false,save:true});

  }
  function editit(){
    setSt2(st);
    setState({save:false,edit:true});
  }
 
  return (
    <>
      <div className="content-personal">
        <div className="inside-content-personal">
        { state.save && <div> 

          <div className="withoutform" onClick={editit}>
          <h2>{st.name}</h2>
          <div>Email: {st.email}</div>
          <div> Mobile No: {st.mobile} </div>
          <div> Socials {st.statement} </div> 
          </div>

          
          </div>
          }
          {state.edit &&
          <div className="headerform">
            <div>
              <h3> Edit Personal Details</h3>
            </div>
            <form className="form">
              <div>
                <div className="label"><label> Full Name</label> </div>
                
                <input 
                  name="name"
                  value={st2.name}
                  onChange={(e) => handleonchange(e)}
                ></input>
              </div>
              <div>
              <div className="label"><label>Phone Number</label> </div>
                <input
                  name="mobile"
                  value={String(st2.mobile)}
                  onChange={(e) => handleonchange(e)}
                ></input>
              </div>
              <div>
              <div className="label"><label> Email </label> </div>
                
                <input
                  name="email"
                  type="email"
                  value={st2.email}
                  onChange={(e) => handleonchange(e)}
                ></input>
              </div>
              <div>
              <div className="label"><label> Statements </label> </div>
                
                <input
                  name="statement"
                  value={st2.statement}
                  onChange={(e) => handleonchange(e)}
                ></input>
              </div>
              
            </form>
          </div>
          }

          </div>
        </div>

        { state.save &&  
        <div>
{/* <subsection componetn for each to be built ></subsection> */}
{/* <Subsection rootState={rootState}></Subsection> */}

<EduFace  resid={prop.resid} rootState={rootState} education_filled_details={education_filled_details} edu_filled={edu_filled } showEducation={prop.showEducation} />
<ExpFace resid={prop.resid} exp_filled={exp_filled} rootState={rootState} exp_filled_details={exp_filled_details} showExp={prop.showExp}  />
<SkillFace rootState={rootState} skill_filled_details={skill_filled_details} skill_filled={skill_filled} showSkill={prop.showSkill} />
          </div>
}
        {state.edit &&
      <FooterView delete={false}  save={saveit} />}
      <div className="add-content">
      {state.save && <div onClick={()=>prop.toggleContent()} className=" btn-add-more">Add Content</div>}
      </div>
    </>
  );
}
