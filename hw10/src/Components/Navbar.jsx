import React, { Component } from 'react'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Linkou</a>
                <a href="#container-about"><i className="fa fa-fw fa-user"></i>Habbit:coding</a>
                <a href="#skillheader"><i className="fa fa-fw fa-xing"></i>Birth date:2001/08/16</a>
                <a id="protofolio-link" href="#Portfolio"><i className="fa fa-github-alt"></i>Follers:100</a> 
                <a href="#contactnav"><i className="fa fa-fw fa-envelope"></i>Email:b0829036@cgu.edu.tw</a>
            </nav>
        )
    }
}

export default Navbar
