import React from 'react'
import PropTypes from 'prop-types'


const Heading = ({heading, tag: Tag, className}) => {
    return <Tag className={className}>{heading}</Tag>
}

Heading.propTypes = {
    heading: PropTypes.string.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
    className: PropTypes.string.isRequired
  }
  
Heading.defaultProps = {
  tag: 'h4'
}


export default Heading