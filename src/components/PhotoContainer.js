import React from 'react';
import PropTypes from 'prop-types'
import Photo from './Photo'
import NotFound from './NotFound'

// PhotoContainer component inherits props from App.
// Used to generate series of images on the webpage

let PhotoContainer = (props) => {

    let generatePhoto = (farmId, serverId, id, secret) => {
        let url = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`
        return url
    }

    let results = props.data
    let photos
    if (results.length > 0){
        photos = results.map( photo => <Photo 
            url={generatePhoto(photo.farm, photo.server, photo.id, photo.secret)}
            key={photo.id}
            title={photo.title} />)
    }   else {
        photos = <NotFound />   //Shows "Not Results" if no relevant photos has been found
    }
   

    return <div className="photo-container">
        <h2>Results for "{props.query}"</h2>
        <ul>
            {photos}
        </ul>
    </div>
}

// check propTypes for debugging
PhotoContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    query:PropTypes.string.isRequired
}

export default PhotoContainer