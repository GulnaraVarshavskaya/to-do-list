import React from 'react'
import Pagination from '../pagination/Pagination';

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './MainContent.css'
export default function MainContent(props){
    return (
        <div className="MainContent">
        <header className="MainContent__header">
            <h1>Welcome</h1>
            <div className="MainContent__bar">

                <div className="MainContent__bar-buttons">
                    <button className="MainContent__btn--add">
                        <span>
                            <img className="MainContent__icon" src="./imgs/plus.svg" />
                        </span>
                        Add task
                    </button>
                </div>

                <div className="MainContent__bar-checkbox">
                    <input type="checkbox" className="MainContent__checkbox" id="checkbox" />
                    <label for="checkbox" className="MainContent__checkbox-label">Show completed tasks</label>
                </div>

            </div>
        </header>

        <section className="MainContent__section">
            <div className="MainContent__items">
                <div className="MainContent__item">
                    <div className="MainContent__bar-checkbox">

                        <input type="checkbox" className="MainContent__checkbox" id="checkbox" />
                        <label for="checkbox" className="MainContent__checkbox-label">Create Design</label>

                    </div>
                </div>
                <div className="MainContent__item">
                    <div className="MainContent__bar-checkbox">

                        <input type="checkbox" className="MainContent__checkbox" id="checkbox" />
                        <label for="checkbox" className="MainContent__checkbox-label">Create Design</label>

                    </div>
                </div>
                <div className="MainContent__item">
                    <div className="MainContent__bar-checkbox">

                        <input type="checkbox" className="MainContent__checkbox" id="checkbox" />
                        <label for="checkbox" className="MainContent__checkbox-label">Create Design</label>

                    </div>
                </div>
                <div className="MainContent__item">
                    <div className="MainContent__bar-checkbox">

                        <input type="checkbox" className="MainContent__checkbox" id="checkbox" />
                        <label for="checkbox" className="MainContent__checkbox-label">Create Design</label>

                    </div>
                </div>
                <div className="MainContent__item">
                    <div className="MainContent__bar-checkbox">

                        <input type="checkbox" className="MainContent__checkbox" id="checkbox" />
                        <label for="checkbox" className="MainContent__checkbox-label">Create Design</label>

                    </div>
                </div>
            </div>
        </section>
        
        <div className="MainContent__pagination">
            <Pagination />
        </div>        

    </div>
    )
    
}