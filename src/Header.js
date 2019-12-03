import React from 'react'
import logo from './logo.svg';
import './Header.css';

const Header = ({alive})=>{
    const notAlive = 'http://www.leparisien.fr/resizer/PSACEmL9EqLuoW2PBMP2LnCZ8PM=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/27P43NDY7WPAMD34TE7YRYTDVU.jpg'

    return(
        <header className="Header-header">
            <img src={alive? logo  : notAlive} className="Header-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
    )
}

export default Header