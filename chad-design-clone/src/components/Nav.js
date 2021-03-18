import React, {Component} from 'react'

export default class Nav extends Component {
    constructor(){
        super()
    }



    render(){
        return(
            <nav>
                <ul>
                    <li>SERVICES</li>
                    <li>PORTFOLIO</li>
                    <li>ABOUT</li>
                    <li>TEAM</li>
                    <li>CONTRACT</li>
                </ul>
            </nav>
        )
    }
}