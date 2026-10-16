import React,{Component} from "react";


class FormUncontrolled extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"",
            age:""
        }

        this.inputOne = React.createRef();
        this.inputTwo = React.createRef()
    }

    onSubmit=()=>{
        console.log(this.inputOne.value);
        console.log(this.inputTwo.value);
        
        
    }




    render(){
        return(
            <div>
                <form action="">
                    <input type="text" name="firstName" ref={input => this.inputOne = input} />
                    <input type="text" name="age" ref={input => this.inputTwo = input} />

                    <button onClick={this.onSubmit}>Submit</button>


                </form>

            </div>
        )
    }
}