import React from 'react'

import './Loading.css'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='loading'>
            <div>
                <div className='spinner'>
                    <Loader type="BallTriangle" color="rgb(30, 144, 255)" height={80} width={80} />
                </div>
            </div>
        </div>
    )
}

export default Loading