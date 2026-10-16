import React,{Component} from "react";




class Car extends Component{

    constructor(props){
        super()
        this.state ={
            brand : "Volkswagon",
            model:"Polo",
            Color:"Black",
            model:2020
        }
    }

    changeColor = ()=>{
        this.setState({
            Color:"Red"
        })
    }

    render(){
        return(
            <>

                <h3>My {this.state.brand}</h3>
                <p>It is a {this.state.Color} {this.state.model} from {this.state.year}</p>

                <button type="button" onClick={this.changeColor}>change Color</button>


            </>
        )
    }

}

export default Car