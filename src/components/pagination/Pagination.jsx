import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Pagination.css'
export default function Pagination(props){
    return (
        <div class="Pagination">
        <ul class="Pagination__ul">
            <li class="Pagination__li Pagination__li--first">
                <a href="#">
                    <img src="../imgs/chevron-left.svg" alt="" />
                </a>
            </li>
            <li class="Pagination__li Pagination__li--active"><a href="#">1</a></li>
            <li class="Pagination__li"><a href="#">2</a></li>
            <li class="Pagination__li"><a href="#">3</a></li>
            <li class="Pagination__li"><a href="#">4</a></li>
            <li class="Pagination__li"><a href="#">5</a></li>
            <li class="Pagination__li Pagination__li--dots"><a href="#">...</a></li>
            <li class="Pagination__li"><a href="#">7</a></li>               
            <li class="Pagination__li Pagination__li--last">
                <a href="#">
                    <img src="../imgs/chevron-right.svg" alt="" /> 
                </a>
            </li>
        </ul>
    </div>
    )
    
}