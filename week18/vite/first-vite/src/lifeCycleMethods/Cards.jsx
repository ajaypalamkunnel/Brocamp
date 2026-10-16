import React,{Component} from "react";


class Card extends Component{

    constructor(){
        super()

    }

    componentWillUnmount(){
        console.log("component unmounted");
        
    }




    render(){


        return (
          <div>
            <h4>Hi I am the card</h4>
          </div> 
        )
    }

}

export default Card