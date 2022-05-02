import React from 'react'
import {
    Link
  } from "react-router-dom";
import {ReactComponent as Rocket2} from '../assets/rocket.svg';
import Rocket from '../assets/rocket.svg';
  import './LandingPage.css';
import RocketIcon from '../assets/Rocket';
import Login from './auth/LoginView';
import Register from './auth/RegisterView';
import RegisterView from './auth/RegisterView';
import LoginView from './auth/LoginView';
export default function LandingPage() {
  const check:boolean=true;
  return (
    <>

    <div>

        <div className='nav-landing-outer'>
            <div className='landing-nav'>
                <div className='logo-title'>
                    <div>Create<b>CV</b></div>
                </div>
                <div >
                    <button className='login-btn'>  <Link className='login-link' to="/login">Login</Link></button>
                </div>
            </div>
            <div className='banner'>
            <div><div className='tagline'>Let's boost your career</div><div className='supportline'>
                Showcase your skills and talents. Make a great first impression. </div>
            </div>
            <div  className='rocket-svg'>
            <RocketIcon></RocketIcon>
            </div>
            </div>

            <div className='banner'>
             <h1>Resumes </h1>  
             <div>
               <Link className="resume-link" to="/resume">
               <h1> For First Free Resume Click here </h1></Link>
               
              
               
             </div>
             



            </div>
            <div className='login-register'>
               <div>
               <RegisterView />
               </div>
               <div>
              <LoginView/>
              </div>
             

       
        </div> 
        </div>
        </div>
        
    </>
  )
}
