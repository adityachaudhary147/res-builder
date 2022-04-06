import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import { fonts } from '../redux/reducers/customization/fontReducer';
import Theme1View from './ThemeView/Theme1View';
import Theme2View from './ThemeView/Theme2View';
import Theme3View from './ThemeView/Theme3View';



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
        


    </div>
  )
}
