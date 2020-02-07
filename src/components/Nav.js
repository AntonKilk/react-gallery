import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// App navigation links
// Show photos by defined subjects: "pink", "cars", "dancing"

let Nav = (props) => (
   <nav className="main-nav">
        <ul>
            <li>
                <NavLink to="/search/finland" onClick={ () => props.onSearch("cars") } >Finland</NavLink>
            </li>
            <li>
                <NavLink to="/search/cars" onClick={ () => props.onSearch("cars") } >Cars</NavLink>
            </li>
            <li>
                <NavLink to="/search/dancing" onClick={ () => props.onSearch("dancing") } >Dancing</NavLink>
            </li>
        </ul>
    </nav>
)

// check propTypes for debugging
Nav.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Nav