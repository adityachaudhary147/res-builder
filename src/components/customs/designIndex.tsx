import React from 'react'
import FontFamily from './FontFamily'
import HeadAlign from './HeadAlign'
import HeadBackGColor from './HeadBackGColor'
import HeadingDesign from './HeadingDesign'
import MissingSomething from './MissingSomething'
import Themes from './Themes'

export default function DesignIndex() {
  return (
    <div>
      <Themes />
      <HeadAlign />
    <FontFamily />
    <HeadingDesign />
    <HeadBackGColor />
    <MissingSomething />
    </div>
  )
}
