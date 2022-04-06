import React from 'react'
import "../nav.css";
import Logo from '../../assets/logo.png';
import Content from '../../assets/content.png';
import Icon from './Navicons/Icon';
import Design from '../../assets/design.png'
import Check from '../../assets/check.png'
import { Link } from 'react-router-dom';
import { showState } from '../../redux/reducers/customization/showReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { actionUpdateshow } from '../../redux/actionCreators';


interface navbarProps{
  showContent:Function;
  showDesign:Function
}
export default function NavBar(props:navbarProps) {
  const show:showState=useSelector((state:RootState)=>state.customize.show);
  const dispatch=useDispatch();
  
  return (
    <div className="nav">
        <div className="nav-buttons">
          <div className="nav-flex">
            <div className="nav-logo">
            <Link to="/"><img className="nav-logo-png" src={Logo}></img></Link>
               
            </div>
            <div className="nav-grid">
              <div className={`nav-content `} onClick={()=>{props.showContent(); dispatch(actionUpdateshow('content'))}}>
                  <Icon title="Content" url={Content}  />
              </div>
              <div className={`nav-design`} onClick={()=>{props.showDesign();dispatch(actionUpdateshow('design'))}}>
                
              <Icon title='Design' url={Design}/>
              </div>
              <div className="nav-check">
                
              <Icon title='check' url={Check} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
