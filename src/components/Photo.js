import React from 'react';

// This component inherits props from PhotoContainer and displays images.
// Used in PhotoContainer component

let Photo = (props) => {
  
    return  <li>
        <img src={props.url} alt="" title={props.title} ></img>
    </li>
}

export default Photo