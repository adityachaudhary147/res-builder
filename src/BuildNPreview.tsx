import React from "react";
import LeftView from "./components/LeftView";
import RightView from "./components/RightView";

export default function BuildNPreview() {
  return (
      
    <div className="main-app">
      <div className="App">
        <LeftView message="hello"></LeftView>
        <RightView />
        
      </div>
    </div>
  );
}
