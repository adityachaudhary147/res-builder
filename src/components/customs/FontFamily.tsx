import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateLocaleAndSetLanguage } from "typescript";
import { actionUpdatefont } from "../../redux/actionCreators";
import { RootState } from "../../redux/reducers";
import { fonts } from "../../redux/reducers/customization/fontReducer";
import './fontfamily.css';
export default function FontFamily() {
  const font: fonts = useSelector((val: RootState) => val.customize.fontFamily);
  const [state,setState]=useState({selectedT:font.fontFamily,selectedF:font.selected});
  const dispatch=useDispatch();
  const serifArray = [
    "Amiri",
    "Vollkorn",
    "Lora",
    "PT Serif",
    "Alegreya",
    "Aleo",
    "Crimson Pro",
    "EB Garamond",
    "Zilla Slab",
  ];
  const sansArray = [
    "Source Sans Pro",
    "Karla",
    "Muli",
    "Lato",
    "Titillium Web",
    "Work Sans",
    "Barlow",
    "Jost",
    "Fira Sans",
  ];
  const monoArray=["Inconsolata",
    "Source Code Pro",
    "IBM Plex Mono",
    "Overpass Mono",
    "Space Mono",
    "Courier Prime"];
    function setSelectedT(value:string){
        if(value!=state.selectedT)
        {
            if(value=="Mono")
            setSelectedF(monoArray[0]);
            else if(value=="Sans")
            setSelectedF(sansArray[0]);
            else
            setSelectedF(serifArray[0]);
        }
        setState((val)=>{return{...val,selectedT:value}});
        dispatch(actionUpdatefont(value,state.selectedT));
    }
    function setSelectedF(value:string){
        setState((val)=>{return{...val,selectedF:value}});
        dispatch(actionUpdatefont(state.selectedT,value));
        console.log(state.selectedF);
    }
    useEffect(()=>{

    },[])
    
  return (
    <div className="content-personal">
        <div className="fonts">
      <div className="heading-font"> Font </div>

      <button font-family='serif' onClick={()=>setSelectedT('Serif')} className={`font-type-btn ${state.selectedT=="Serif"?'active':''}`}>Serif</button>
      <button font-family='sans-serif' onClick={()=>setSelectedT('Sans')} className={`font-type-btn ${state.selectedT=="Sans"?'active':''}`}> Sans</button>
      <button  font-family='monospace' onClick={()=>setSelectedT('Mono')} className={`font-type-btn ${state.selectedT=="Mono"?'active':''}`}>Mono</button>
      <div className="grid-font-values">
      {state.selectedT=="Serif"? serifArray.map((val)=>{
          return (<div  ><div style={{fontFamily:val}} onClick={()=>setSelectedF(val)} className={`font-value-btn ${state.selectedF==val?'active-font-value':''}`}>{val}</div></div>)
      }):""}
      {state.selectedT=="Sans"? sansArray.map((val)=>{
          return (<div  ><div style={{fontFamily:val}} onClick={()=>setSelectedF(val)} className={`font-value-btn ${state.selectedF==val?'active-font-value':''}`} >{val}</div></div>)
      }):""}
      {state.selectedT=="Mono"? monoArray.map((val)=>{
          return (<div ><div style={{fontFamily:val}} onClick={()=>setSelectedF(val)} className={`font-value-btn ${state.selectedF==val?'active-font-value':''}`} >{val}</div></div>)
      }):""}
      </div>
      </div>


    </div>
  );
}
