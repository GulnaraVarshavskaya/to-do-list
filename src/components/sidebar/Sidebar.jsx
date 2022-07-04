import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Sidebar.css'
export default function Sidebar(props) {
    return (
        <nav className="Sidebar">
            <div className="Sidebar__menu-bar">
                <div className="Sidebar__menu">
                    <ul className="Sidebar__ul">
                        <li className="Sidebar__li">
                            <a href="#">
                                <img className="Sidebar__li-icon" src="../imgs/inbox.svg" alt="" />
                                    <span className="Sidebar__li-text">All tasks</span>
                            </a>
                        </li>
                        <li className="Sidebar__li">
                            <a href="#">
                                <img className="Sidebar__li-icon" src="../imgs/today.svg" alt="" />
                                    <span className="Sidebar__li-text">Today</span>
                            </a>
                        </li>
                        <li className="Sidebar__li">
                            <a href="#">
                                <img className="Sidebar__li-icon" src="../imgs/scheduled.svg" alt="" />
                                    <span className="Sidebar__li-text">Scheduled</span>
                            </a>
                        </li>
                        <li className="Sidebar__li">
                            <a href="#">
                                <img className="Sidebar__li-icon" src="../imgs/flag.svg" alt="" />
                                    <span className="Sidebar__li-text">Flagged</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Sidebar__extension">
                    <ul className="Sidebar__extension-header">
                        <li className="Sidebar__extension-li">
                            <div className="Sidebar__extension-li-header">
                                <a href="#" className="Sidebar__extension-li-toggle">
                                    <img className="Sidebar__extension-li-toggle-icon" src="../imgs/chevron-down.svg" alt="" />
                                        <span className="Sidebar__extension-li-toggle-text">Projects</span>
                                </a>
                                <button className="Sidebar__extension-li-add">
                                    <img src="../imgs/addplus.svg" alt="" />
                                </button>
                            </div>
                            <ul className="Sidebar__extension-li-entered">
                                <li className="Sidebar__extension-li-entered-item">
                                    <a href="#" className="Sidebar__extension-li-entered-item-a">
                                        <span>Welcome</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}