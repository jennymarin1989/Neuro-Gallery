import React from 'react'
import Heading from '../../components/atoms/Heading'
import '../../lib/brainwave'
import '../../lib/brainwave.js';
import './_blinkTester.scss';


const BlinkTest = () => {

  
  return (
    <div className="blink-tester">
      <div id="cursor"></div>
      <Heading heading='Blink Tester' tag='h1' className="heading-instructions"/>
      <svg>
        <path  d="M10,10 L50,100 L90,50"></path>
      </svg>
    </div>
  )
}

export default BlinkTest