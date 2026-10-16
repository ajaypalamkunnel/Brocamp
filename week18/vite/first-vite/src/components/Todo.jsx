import React, { Component } from "react";

class Todo extends Component{
    render(){
        return(
          <div>
            <h2>Todo Component :{this.props.sampleState}</h2>
            <h3>{this.props.sampleState}</h3>
            
          </div>  
        )
    }
}

export default Todo