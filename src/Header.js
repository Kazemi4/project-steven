import React from 'react'
import './Header.css'
import logo from './logo.svg';

const Header =({alive})=>{
    const notAlive = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBqRMNc3k2NdDWVXxZkzSz5kqDpofAZUF-7NP7epUP6MSPF3W&s'
    return(
        <header className="Header-header">
            <img src={alive? logo : notAlive} className="Header-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
    )
}  

export default Header