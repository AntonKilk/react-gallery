import React from 'react';
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
        photos = <NotFound />   //Shows "Not Found" if no relevant photos was found
    }
   

    return <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {photos}
        </ul>
    </div>
}

export default PhotoContainer