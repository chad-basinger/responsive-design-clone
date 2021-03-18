import React, {Component} from 'react'
import Nav from './Nav'

export default class Header extends Component {
    constructor(){
        super()
    }



    render(){
        return(
            <div className='navbar'>
                <div className='container'>
                    <a className='title'>Start Bootstrap</a>
                    <button className='navbar-toggler' type='button'>
                        MENU 
                        {/* <img src={`https://cdn1.iconfinder.com/data/icons/thin-ui-1/100/Noun_Project_100Icon_1px_grid_thin_ic_menu-512.png`}/> */}
                        <svg viewBox="0 0 100 80" width="40" height="20">
                            <rect width="70" height="20"></rect>
                            <rect y="30" width="70" height="20"></rect>
                            <rect y="60" width="70" height="20"></rect>
                        </svg>
                    </button>
                    <div className='navbar-collapse'>
                        <ul>
                            <li className='nav-item'>
                                <a className='nav-link'>SERVICES</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>PORTFOLIO</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>ABOUT</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>TEAM</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>CONTRACT</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }
}


{/* <nav>
                <ul>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTRACT</li>
                </ul>
            </nav> */}