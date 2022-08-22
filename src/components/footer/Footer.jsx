import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Footer.css'
export default function Footer(props){
    return (
        <div className="Footer">
            <footer>
                <div className="Footer__container">
                    <div className="Footer__col1">
                        <p>© 2022, To Do List</p>
                    </div>
                </div>  
            </footer>
        </div>
    )
    
}