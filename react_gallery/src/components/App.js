import React, { Component } from 'react';
import Nav from './Nav'
import Search from './Search'
import PhotoContainer from './PhotoContainer'
import axios from 'axios'
import apiKey from '../config'

console.log(apiKey)

export default class App extends Component {
  state = {
    images: []
  }

  componentDidMount(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`)
      .then(response =>{
        this.setState({
          images:response.data
        })
      })
  }

  render(){
    console.log( this.state.images )
    return <div>
    <Search />
    <Nav />
    <PhotoContainer />
  </div>
  }
}

