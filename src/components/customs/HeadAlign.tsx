import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateHeadAlign } from '../../redux/actionCreators'
import { RootState } from '../../redux/reducers'
import { HeadAlign as HAlign }  from '../../redux/reducers/customization/HeadAlignReducer';
import './customs.css';
export default function HeadAlign() {
const headalign22:HAlign=useSelector((val:RootState)=>val.customize.headAlign);
    const dispatch=useDispatch();
  return (
    <div className='content-personal'> 
        <h1>Personal Detials Alignment</h1>


        <button className={`head-align-btn`} onClick={()=>dispatch(updateHeadAlign('left',headalign22.contentalign))}> Left  </button>

        <button   className='head-align-btn' onClick={()=>dispatch(updateHeadAlign('center',headalign22.contentalign))} > Center</button>
        <button  className='head-align-btn' onClick={()=>dispatch(updateHeadAlign('right',headalign22.contentalign))}> Right</button>

        {/* <h3> Content View</h3>
        <button className='head-align-btn' onClick={()=>dispatch(updateHeadAlign(headalign22.headalign,'horizontal'))}>Horizontal Alignment </button>
        <button className='head-align-btn' onClick={()=>dispatch(updateHeadAlign(headalign22.headalign,'vertical'))}> Vertical Alignment </button> */}
        </div>
  )
}
