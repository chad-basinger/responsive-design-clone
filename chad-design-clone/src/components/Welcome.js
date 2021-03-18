import React, {Component} from 'react'

export default class Welcome extends Component {
    constructor(){
        super()
    }



    render(){
        return( 
            <div className="welcome-items">
                <p className="welcome-studio">
                    Welcome To Our Studio!
                </p>
                <p>
                    IT's NICE TO MEET YOU
                </p>
                <button className="more-button">TELL ME MORE</button>
            </div>
            
        )
    }
}