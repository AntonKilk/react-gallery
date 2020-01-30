import React from 'react'
import PropTypes from 'prop-types'


// This component inherits props from PhotoContainer and displays images.
// Used in PhotoContainer component

let Photo = (props) => {
  
    return  <li>
        <img src={props.url} alt="" title={props.title} ></img>
    </li>
}

// check propTypes for debugging
Photo.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Photo