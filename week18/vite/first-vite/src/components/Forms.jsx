import React,{Component} from "react";



class Froms extends Component{

    state={
        firstName:"",
        secondName:""

    }

    //this is a example of control components
    onHandleChange=event=>{
       // console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        }) 
    }

    onSubmit=()=>{
        console.log(this.state);
        
    }

    render(){
        return(
            <form action="">
                <input name="firstName" value={this.state.firstName}  type="text" onChange={this.onHandleChange} />
                <br />
                <input name="secondName" value={this.state.secondName} type="text" onChange={this.onHandleChange} />
                <br />

                <button type="button" onClick={this.onSubmit}>submit</button>
            </form>
        )
    }
}

export default Froms