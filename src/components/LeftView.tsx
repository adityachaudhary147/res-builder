import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import EducationView from "./LeftView/EducationView";
import ExperienceView from "./LeftView/ExperienceView";
import HeaderView from "./LeftView/HeaderView";
import SkillsView from "./LeftView/SkillsView";
import './left.css'
import NavBar from "./LeftView/NavBar";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import DesignIndex from "./customs/designIndex";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { showState } from "../redux/reducers/customization/showReducer";
import { actionUpdateshow } from "../redux/actionCreators";
interface LeftViewProps {
  message: string,
  resid:string,
}
// loaddata structure

export default function LeftView({ message ,resid}: LeftViewProps) {
  const [state, setState] = useState([true, false, false, false]);
  const [state2, setState2] = useState([true, false]);
  const [visContent,setVisContent]=useState(false);
  const resName:string=useSelector((state:RootState)=>state.resName.name);
  const show:showState=useSelector((state:RootState)=>state.customize.show);
  const [display,setDisplay]=useState(show.selected);
  const dispatch=useDispatch();
  function showDesign(){
    setDisplay("design"); 
    dispatch(actionUpdateshow('design'));
   }
    function showContent(){
      setDisplay('content');
      dispatch(actionUpdateshow('content'));
    }
  function toggleADDContent(){
setVisContent(val=>!val);
// setState([false,false,false,false]);
  }
  function showHeader(){
    setState((value) => [true, false, false, false]);
  }
  function showEducation(){
    setState((value) => [false, !value[1], false, false]);
  }
  function showExp(){
    setState((value) => [false, false, !value[2], false]);
  }
  function showSkill(){
    setState((value) => [false, false, false,!value[3]]);
  }

  function printit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)
  { e.preventDefault();
    const v:HTMLElement=document.getElementById('preview')!;
    // Default export is a4 paper, portrait, using millimeters for units
    // const doc = new jsPDF();
    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");
    console.log(v,typeof(v));
    html2canvas(v).then((canvas)=>{
    const imgData=canvas.toDataURL('image/png');
    const pdf=new jsPDF('p','mm','a4');
    var width=pdf.internal.pageSize.getWidth();
    var height=pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData,'JPEG',0,0,width,height);
    pdf.save('sampleresume.pdf');
    }).catch((err:Error)=>console.log(err));
  
  }
  return (
    <>
      <NavBar showContent={showContent} showDesign={showDesign} />
      <div className="left">

        <div className="head-left"> 
        <div className="resume-title" ><span>{resName}</span> <span><img  className="edit-res-icon" src={Edit}></img></span></div>
        <div  ><button className="download-btn" onClick={printit}>Download</button></div>
        </div>
        {display=='content' &&
        <div> 
        <div>
        <div  >
            <div >{state[0] && <HeaderView  resid={resid} toggleContent={toggleADDContent} showEducation={showEducation} showExp={showExp} showSkill={showSkill} showHeader={showHeader}></HeaderView>}</div>
            <div>{state[1] && <EducationView resid={resid} showHeader={showHeader}></EducationView>}</div>
            <div>{state[2] && <ExperienceView  resid={resid} showHeader={showHeader}></ExperienceView>}</div>
            <div>{state[3] && <SkillsView showHeader={showHeader}></SkillsView>}</div>
          </div>
        </div> 
        {/* Add Content Option  */}
            {visContent && 
            <div className="content-options">
              <button
                className={`btn-left-section ${state[1] ? "pressed " : "unpresses"
                  }`}
                onClick={() =>
                  setState((value) => [false, !value[1], false, false])
                }
              >
                {state[1] ? "Hide" : "ADD"} Education
              </button>
              <button
                className={`btn-left-section ${state[2] ? "pressed " : "unpresses"
                  }`}
                onClick={() =>
                  setState((value) => [false, false, !value[2], false])
                }
              >
                {state[2] ? "Hide" : "ADD"} Experince
              </button>
              <button
                className={`btn-left-section ${state[3] ? "pressed " : "unpresses"
                  }`}
                onClick={() =>
                  setState((value) => [false, false, false, !value[3]])
                }
              >
                {state[3] ? "Hide" : "ADD"} Skills
              </button>
            </div> }
            
            </div>}

            {display=='design' && <DesignIndex ></DesignIndex>}
            </div>
    </>
  );
}
