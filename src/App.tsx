import React from 'react';
import './App.css';
import LeftView from './components/LeftView';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ExperienceView from './components/LeftView/ExperienceView';

import LandingPage from './components/LandingPage';
import BuildNPreview from './BuildNPreview';
function App() {
  return (
    <>
    <Router>
      <div>
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>

          <Route  path="/" element={<LandingPage />}>
          
          </Route>
          <Route path="/resume" element={<BuildNPreview />}>
            
          </Route>
          <Route path="/signin" element={<LandingPage />}>
           
          </Route>
        </Routes>
      </div>
    </Router>
   
    </>
  );
}

export default App;
