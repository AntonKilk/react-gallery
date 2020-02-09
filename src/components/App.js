import React, { Component } from 'react';
import Nav from './Nav'
import Search from './Search'
import PhotoContainer from './PhotoContainer'
import Page404 from './Page404'
import axios from 'axios'
import apiKey from '../config'
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom'

export default class App extends Component {
  state = {
    photos: [],
    loading: true,
    query: "",
    finland:[],
    cars: [],
    math: []
  }

  componentDidMount(){
    this.performSearch()
    // Render photos of "Finland"
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=finland&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        finland: response.data.photos.photo
      })
    })
    // Render photos of "Cars"
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cars&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        cars: response.data.photos.photo
      })
    })
    // Render photos of "math"
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=math&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        math: response.data.photos.photo
      })
    })
  }

  // Render data of search results, default is "Finland"
  performSearch = (query = 'finland') => {
    this.setState({
      loading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response =>{
      this.setState({
        photos:response.data.photos.photo,
        loading: false,
        query
      })
    })
    // Catch Error if problem with fetching or parsing
    .catch(error => {
      console.log('Error parsing and fetching data', error)
    })
  }

  render(){
    return <BrowserRouter>
      {/* Render the page: Searchbar and Navigation pane */}
      <Search onSearch={this.performSearch} />
      <Nav onSearch={this.performSearch} />

      <Switch>
        <Route exact path="/"  render={ history =>
          <PhotoContainer
            {...history} 
            data={this.state.photos}
            query = {this.state.query}
            loading = {this.state.loading} />
        } />

        {/* Separate route for Navigation pane: "finland", "cars and ""math"  */}
        {/* Why browser "back" and "forward" buttons are not working? */}
        <Route  path="/search/finland" render={ history =>
           <PhotoContainer
              {...history} 
              data={this.state.finland}
              query = {"finland"}
              loading = {this.state.loading} />
        } />

        <Route  path="/search/cars" render={ history =>
          <PhotoContainer
            {...history} 
            data={this.state.cars}
            query = {"cars"}
            loading = {this.state.loading} />
        } />

        <Route  path="/search/math" render={ history =>
         <PhotoContainer
            {...history} 
            data={this.state.math}
            query = {"math"}
            loading = {this.state.loading} />
        } />

        <Route exact path="/search/:query"  render={ history =>
          <PhotoContainer
            {...history} 
            data={this.state.photos}
            query = {this.state.query}
            loading = {this.state.loading} />
        } />

        {/* If no paths match any other routes, RENDER the PAGE NOT FOUND component */}         
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  }
}

