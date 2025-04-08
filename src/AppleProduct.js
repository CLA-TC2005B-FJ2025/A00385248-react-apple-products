import React from 'react'
import { useState } from 'react'

import iphone from './svg/iphone.svg'
import ipad from './svg/ipad.svg'
import watch from './svg/watch.svg'
import imac from './svg/imac.svg'
import macbook from './svg/macbook.svg'
import airpods from './svg/airpods.svg'
import heart from './svg/heart.svg'

const mapaSVG = {iphone, ipad, watch, imac, macbook, airpods};

export function AppleProduct( props ) {

  const [clicks, setClicks] = useState(0);
  const manejarclick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div onClick={manejarclick}>
      Producto {props.type} lleva {clicks} clicks
      <img alt="producto" src={mapaSVG[props.type]} width={100}/>
      <img alt="heart" src={heart} style={{ width:10+10*clicks+ 'px'}} />
    </div>
  )
}