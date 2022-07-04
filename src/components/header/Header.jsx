import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Header.css'
export default function Header(props){
    return (
        <div className="Header">
        <header>
            <div className="Header__container">
                <div className="Header__col1">
                    <a href="#" className="Header__logo">
                        <img src="./imgs/logo.svg" alt="logo" />              
                    </a>
                </div>
                <div className="Header__col2">
                    <ul>
                        <li>
                            <a href="#" className="Header__logout">
                                <img className="Header__logout-icon" src="./imgs/user.svg" />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>    
                </div>
            </div>  
        </header>
    </div>
    )
    
}