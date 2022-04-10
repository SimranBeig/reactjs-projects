import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Daily</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                            </ul>
                            {/* <span className="navbar-text">
                                Navbar text with an inline element
                            </span> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
