import React from 'react'
import './index.css'

const Container = props => {
    return (
        <div className='container' id='container-display'>
            <div className='container-name'>
                {props.name}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container