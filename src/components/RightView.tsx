import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import { fonts } from '../redux/reducers/customization/fontReducer';
import Theme1View from './ThemeView/Theme1View';
import Theme2View from './ThemeView/Theme2View';
import Theme3View from './ThemeView/Theme3View';
import Theme4View from './ThemeView/Theme4View';


import Theme5View from './ThemeView/Theme5View';

import Theme6View from './ThemeView/Theme6View';

import Theme7View from './ThemeView/Theme7View';

import Theme8View from './ThemeView/Theme8View';

import Theme9View from './ThemeView/Theme9View';


export default function RightView() {
    const theme:string=useSelector((root:RootState)=>root.customize.theme.selected);
    const font:fonts=useSelector((root:RootState)=>root.customize.fontFamily);
  return (
      
    <div style={{fontFamily:font.selected}}>
        {theme=='3' ?
        
        <Theme3View  message="Hello"></Theme3View>
        :""}
        {theme=='2' ?
        
        <Theme2View message="Hello"></Theme2View>
        :""}
        {theme=='1' ?
        <Theme1View message="Hello"></Theme1View>
        :""}
        
        {theme=='4' ?
        <Theme4View message="Hello"></Theme4View>
        :""}
        {theme=='5' ?
        <Theme5View message="Hello"></Theme5View>
        :""} 
        {theme=='6' ?
        <Theme6View message="Hello"></Theme6View>
        :""} 
        {theme=='7' ?
        <Theme7View message="Hello"></Theme7View>
        :""} 
        {theme=='8' ?
        <Theme8View message="Hello"></Theme8View>
        :""} 
        {theme=='9' ?
        <Theme9View message="Hello"></Theme9View>
        :""}

        


    </div>
  )
}
