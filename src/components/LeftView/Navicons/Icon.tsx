import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { showState } from '../../../redux/reducers/customization/showReducer';

import './Icon.css';
interface IconProps{
    title:string,
    url:string, 

}
export default function Icon({title,url}:IconProps) {
  const show:showState=useSelector((val:RootState)=>val.customize.show)
  return (
    <div className='span-content-2'>
        <span className={`span-content ${ show.selected==title.toLowerCase() ?"active-nav":""}`}>
            <span>
                <img src={url} className='img-icon'></img>
            </span>
            <span className='title-icon'>
               {title}
            </span>
        </span>


    </div>
  )
}
