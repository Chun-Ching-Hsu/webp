import React, { Component } from 'react'
import logo from '../Components/public/image/Hsu.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> CGU CSIE </h1>
                    <p id="paragarph1">kevin-Hsu</p>
                    <a href="https://github.com/Chun-Ching-Hsu/webp">GITHUB</a>
                    
            </section>
        )
    }
}

export default Banner


