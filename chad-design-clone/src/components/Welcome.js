import React, {Component} from 'react'

export default class Welcome extends Component {
    constructor(){
        super()
    }



    render(){
        return( 
            <div>
                <p>
                    Welcome To Our Studio!
                </p>
                <p>
                    IT's NICE TO MEET YOU
                </p>
                <button>TELL ME MORE</button>
            </div>
            
        )
    }
}