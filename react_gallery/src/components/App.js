import React from 'react';
import Nav from './Nav'
import Search from './Search'
import PhotoContainer from './PhotoContainer'
import axios from 'axios'
import apiKey from '../config'

console.log(apiKey)

function App() {
  return <div>
    <Search />
    <Nav />
    <PhotoContainer />
  </div>
}

export default App;
