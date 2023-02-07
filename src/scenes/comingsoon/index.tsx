import React from 'react'
import { Link } from 'react-router-dom'

import "_styles/comingsoon.scss"
import logo from '_images/logo-white.png'
import {ReactComponent as Headphone} from '_images/headphone.svg';
import SocialLinks from '@/componenets/atoms/sociallnk';

export default function ComingSoon(){

    return (
        <div className='container'>
            
            <div className='header'>
                <img className='logo-image' src={logo} />
            </div>

            <div className = 'body'>
                <h1>COMING SOON!</h1>
                <h2>Online counselling at your convenience</h2>
                <div className='email-subscribe'>
                    <input type='text' placeholder='Enter Email Address'/>
                    <button><span>Subscribe</span></button>
                </div>
            </div>

            <div className = 'footer'>
                <SocialLinks/>
                <div className = 'copyright'>
                    <p>© 2023 LSSYA™ - The pioneer online psychotherapy platform in Ethiopia</p>
                </div>
                <div className = 'telegram-wrapper'>
                    <a className='btn-telegram' href='https://t.me/LSSYAOfficial/1795'>
                        <Headphone fill='white'/>
                    </a>
                </div>
            </div>
        </div>
    )
}