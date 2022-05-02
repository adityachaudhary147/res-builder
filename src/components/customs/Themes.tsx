import React from 'react'
import './themes.css';
import Theme1 from '../../assets/theme1.webp';
import Theme2 from '../../assets/theme2.webp';
import Theme3 from '../../assets/theme3.webp';

import Theme4 from '../../assets/theme4.webp';
import Theme5 from '../../assets/theme5.webp';
import Theme6 from '../../assets/theme6.webp';

import Theme7 from '../../assets/theme7.webp';
import Theme8 from '../../assets/theme8.webp';
import Theme9 from '../../assets/theme9.webp';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, updateHeadAlign } from '../../redux/actionCreators';
import { ThemeState } from '../../redux/reducers/customization/ThemeReducer';
import { RootState } from '../../redux/reducers';

export default function Themes() {
    const dispatch=useDispatch();
    const theme:ThemeState=useSelector((val:RootState)=>val.customize.theme);

  return (
    <div className='content-personal '>
        <div className='inside-content-personal'>
            <div className='themes'> 
                <h2>Choose a Template ⚡️</h2>
                <p>Get started with a template and then customize it easily 🐣</p>
            </div>

            <div className='theme-images'>
                <div>
               <div className='theme-image' onClick={()=>{dispatch(selectTheme('1'))}}> <img  src={Theme1} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('2'))}}><img src={Theme2} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('3'))}}><img  src={Theme3} width='300px'></img></div>

               <div className='theme-image' onClick={()=>{dispatch(selectTheme('4'))}}> <img  src={Theme4} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('5'))}}><img src={Theme5} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('6'))}}><img  src={Theme6} width='300px'></img></div>
                
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('7'))}}> <img  src={Theme7} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('8'))}}><img src={Theme8} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('9'))}}><img  src={Theme9} width='300px'></img></div>
                
                
                </div>
                <div className='left-right-btn'> buttonss</div>
            </div>
            <div>
                selected theme is {theme.selected}
            </div>

        </div>
        </div>
  )
}
