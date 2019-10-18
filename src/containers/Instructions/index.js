import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../../components/atoms/Heading'
import TextArea from '../../components/atoms/TextArea'
import './_instructions.scss';


const Instructions = () => {

  return (
    <div className="instructions">
      <div id="cursor"> </div>
      <Heading heading='Instructions' tag='h1' className="heading-instructions" />
      <TextArea className="text-area" />
      <Link
        className="blink-strength-link"
        to="/blink"
      >
        Next
      </Link>
    </div>
  )

}

export default Instructions