import React from 'react'
import Nav from './Nav'

export default class Header extends React.Component {
    constructor(){
        super()

        this.state = {
            menuOpen: "closed"
        }

        this.menu = this.menu.bind(this)
    }

    menu = () => {
        if(this.state.menuOpen === 'closed'){
            this.setState({menuOpen: 'pickle'})
        }else{
            this.setState({menuOpen: 'closed'})
        }
    }


    render(){
        return(
                <nav>
                    <button className='menu-button' onClick={this.menu}>
                        MENU 
                        {/* <img src={`https://cdn1.iconfinder.com/data/icons/thin-ui-1/100/Noun_Project_100Icon_1px_grid_thin_ic_menu-512.png`} onClick={this.menu}/> */}
                        <svg viewBox="0 0 100 80" width="40" height="10">
                            <rect width="70" height="20"></rect>
                            <rect y="30" width="70" height="20"></rect>
                            <rect y="60" width="70" height="20"></rect>
                        </svg>
                    </button>
                    
                        <ul className={this.state.menuOpen === 'closed' ? "closed" : ''}>
                            <li className='nav-item'>
                                <a>SERVICES</a>
                            </li>
                            <li className='nav-item'>
                                <a>PORTFOLIO</a>
                            </li>
                            <li className='nav-item'>
                                <a>ABOUT</a>
                            </li>
                            <li className='nav-item'>
                                <a>TEAM</a>
                            </li>
                            <li className='nav-item'>
                                <a>CONTRACT</a>
                            </li>
                            
                        </ul>
                </nav>
            
        )
    }
}
