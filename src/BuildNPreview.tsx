import React, { useEffect } from "react";
import LeftView from "./components/LeftView";
import RightView from "./components/RightView";
import { useLocation } from 'react-router-dom'
import { LoadResumeAction } from "./redux/actions/loadResumeAction";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "os";
import { RootState } from "./redux/reducers";

import { Navigate } from 'react-router';

type LocationState = {
  from: string
}

export default function BuildNPreview() {
 const location=useLocation();
//  const from=location.state;
 const from = (location.state as LocationState)?.from;
 const isLoggedIn=useSelector((val:RootState)=>{
   return val.auth.auth.isLoggedIn;
 })

const dispatch=useDispatch();
 useEffect(()=>{

  // loadResume Action here 
  // LoadResumeAction()();
  
  LoadResumeAction(from)(dispatch);

  // action to load resume 

 },[])
// console.log(from.from);
  return (
    <div className="main-app">

      {/* {isLoggedIn?"hh":"yy"} */}
      { !isLoggedIn ? <Navigate to='/'></Navigate>:<span></span>}
      {/* {!isLoggedIn?"false":"truw"} */}
      
      <div className="App">
        
        <LeftView message="hello" resid={from}></LeftView>
        <RightView />
        
      </div>
    </div>
  );
}
