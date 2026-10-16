import React,{Component}from "react";


class ComDidMount extends Component{
    constructor(){
        super();

        this.state={
            num:0

        }
        console.log('constructor');
        
    }


    //this will works after rendering
    //and also it woks only one
    componentDidMount(){
        console.log("I am componentDidMount====>Mounting");
        
    }

    counting = ()=>{
        this.setState({
            num:1
        })
    }


    render(){
        return(
            <div>

                <h2>Component did mount demonstrartion</h2>
                {console.log('Rendering')}

                <h1>{this.state.num}</h1>

                <button onClick={this.counting}>count</button>
            </div>
        )
    }
}

export default ComDidMount