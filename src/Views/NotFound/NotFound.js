import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = (props) => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>{ props.texts.title }</h2>
                <p>{ props.page + props.texts.paragraph} <Link to="/">{ props.texts.link }</Link></p>
            </div>
        </div>
    )
}

export default NotFound