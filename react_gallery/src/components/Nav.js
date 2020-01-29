import React from 'react';
import {
    BrowserRouter,
    NavLink
  } from 'react-router-dom'

// App navigation links
// Show photos by defined subjects: "pink", "cars", "dancing"

let Nav = (props) => (
    <BrowserRouter>
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to='/search/pink' onClick={ () => props.onSearch("pink") } >Pink</NavLink>
                </li>
                <li>
                    <NavLink to='/search/cars' onClick={ () => props.onSearch("cars") } >Cars</NavLink>
                </li>
                <li>
                    <NavLink to='/search/dancing' onClick={ () => props.onSearch("dancing") } >Dancing</NavLink>
                </li>
            </ul>
        </nav>
    </BrowserRouter>
)
    

export default Nav