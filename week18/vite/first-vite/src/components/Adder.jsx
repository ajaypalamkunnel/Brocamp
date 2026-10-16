import React,{Component} from "react";



class Adder extends Component{

    state={
        count:0
    }

    onIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    onDecrement=()=>{
        this.setState({
            count:this.state.count - 1
        })
    }


    render(){
        return(
            <div>
                <h4>Adder Component</h4>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}


export default Adder
