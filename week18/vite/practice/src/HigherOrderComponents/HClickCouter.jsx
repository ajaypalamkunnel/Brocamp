import React, { Component } from 'react'

export class HClickCouter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }


    incrementCount = () =>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }



  render() {
    const {count} = this.state
    return(
        <div>
         
        <h1>Higher order component</h1>
        <button onClick={this.incrementCount} >Clicked {count}  times</button>
        
      </div>
    )
    
    
}
}
export default HClickCouter