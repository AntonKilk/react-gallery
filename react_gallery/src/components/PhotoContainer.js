import React from 'react';
import Photo from './Photo'
import NotFound from './NotFound'



class PhotoContainer extends React.Component {
    state = {
        photo: ""
    }

    render() {
        return <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <NotFound />
            </ul>
        </div>
    }
}

export default PhotoContainer