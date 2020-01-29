import React, { Component } from 'react';
import Nav from './Nav'
import Search from './Search'
import PhotoContainer from './PhotoContainer'
import Page404 from './404'
import axios from 'axios'
import apiKey from '../config'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

export default class App extends Component {
  state = {
    photos: [],
    loading: true
  }

  componentDidMount(){
    this.performSearch()
  }
  // renders data of 24 photos from 'flickr.com'
  performSearch = (query = 'pink') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        photos:response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error parsing and fetching data', error)
    })
  }

  render(){
    return <BrowserRouter>
      <div> 
        <Route render={ history =>
          <React.Fragment>
            <Search {...history} onSearch={this.performSearch} />
            <Nav {...history} onSearch={this.performSearch} />
          </React.Fragment> 
           } />     
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <PhotoContainer data={this.state.photos} />
        }       
      </div>
      <Switch>
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  }
}

