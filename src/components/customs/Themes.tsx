import React from 'react'
import './themes.css';
import Theme1 from '../../assets/theme1.webp';
import Theme2 from '../../assets/theme2.webp';
import Theme3 from '../../assets/theme3.webp';
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
               <div className='theme-image' onClick={()=>{dispatch(selectTheme('1'))}}> <img  src={Theme1} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('2'))}}><img src={Theme2} width='300px'></img></div>
                <div className='theme-image' onClick={()=>{dispatch(selectTheme('3'))}}><img  src={Theme3} width='300px'></img></div>
            </div>
            <div>
                selected theme is {theme.selected}
            </div>

        </div>
        </div>
  )
}
