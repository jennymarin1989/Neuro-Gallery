import React from 'react'
import Heading from '../../components/atoms/Heading'
import TextArea from '../../components/atoms/TextArea'
import './_instructions.scss';


const Instructions = () => {

    return (
        <div className="instructions">
					<div id="cursor"> </div>
          <Heading heading='Instructions' tag='h1' className="heading-instructions"/>
          <TextArea className="text-area"/>
        </div>
    )

}

export default Instructions