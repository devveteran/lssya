import React from 'react'
import { Link } from 'react-router-dom'

import "_styles/comingsoon.scss"
import logo from '_images/logo-white.png'
import headphone from '_images/headphone.png'

export default function ComingSoon(){

    return (
        <div className='container'>
            
            <div className='header'>
                <img className='logo-image' src={logo} />
            </div>

            <div className = 'body'>
                <h1>COMING SOON!</h1>
                <h2>Online counselling at your convenience</h2>
            </div>

            <div className = 'footer'>
                <div className = 'copyright'>
                    <p>© 2023 LSSYA™ - The pioneer online psychotherapy platform in Ethiopia</p>
                </div>
                <div className = 'telegram-wrapper'>
                    <a href='https://t.me/LSSYAOfficial/1795'>
                        <img src={headphone} />
                    </a>
                </div>
            </div>
        </div>
    )
}