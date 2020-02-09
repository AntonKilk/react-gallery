import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// App navigation links
// Show photos by defined subjects: "pink", "cars", "dancing"

let Nav = (props) => (
   <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/search/finland">Finland</NavLink>
            </li>
            <li>
                <NavLink to="/search/cars">Cars</NavLink>
            </li>
            <li>
                <NavLink to="/search/math">Math</NavLink>
            </li>
        </ul>
    </nav>
)

// check propTypes for debugging
Nav.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Nav