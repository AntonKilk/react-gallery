import React, { Component } from 'react';
import Nav from './Nav'
import Search from './Search'
import PhotoContainer from './PhotoContainer'
import Page404 from './Page404'
import axios from 'axios'
import apiKey from '../config'
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

export default class App extends Component {
  state = {
    photos: [],
    loading: true
  }

  componentDidMount(){
    this.performSearch()
  }
  // Render data of 24 photos from 'flickr.com'
  performSearch = (query = 'pink') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        photos:response.data.photos.photo,
        loading: false
      })
    })
    // Catch Error if problem with fetching or parsing
    .catch(error => {
      console.log('Error parsing and fetching data', error)
    })
  }

  render(){    
    return <HashRouter>
      <Switch>
        <Route exact path="/"> {/* Redirect to /search */}
          <Redirect to="/search" />
        </Route>

        {/* Render the page: Search, Nav and PhotoContainer */}
        <Route  path="/search" render={ history =>
          <React.Fragment>
            <Search {...history} onSearch={this.performSearch} />
            <Nav {...history} onSearch={this.performSearch} /> 

            {/* Show "Loading..." while rendering photos */}            
            {
              (this.state.loading)
              ? <p>Loading...</p>
              : <PhotoContainer data={this.state.photos} />
            }
          </React.Fragment> 
        } />

        {/* If no paths match any other routes, RENDER the PAGE NOT FOUND component */}         
        <Route component={Page404} />
      </Switch>
    </HashRouter>
  }
}

