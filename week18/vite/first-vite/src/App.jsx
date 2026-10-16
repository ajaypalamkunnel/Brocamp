import { Component } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Counter from "./components/counter";
import Adder from "./components/Adder";
import Froms from "./components/Forms";
import List from "./components/List";
import Heading from "./functionalComponent/Heading";
import Navbar from "./functionalComponent/navbar";
import Card from "./lifeCycleMethods/Cards";
class App extends Component {

  constructor(){
    super()

    this.state={
      myString: 'Hiiiii welcomee',
      name:'AJAY P S',
      show:true
    }

    this.deleteCard = this.deleteCard.bind(this);
  }
  

 

  handleChnage=()=>{
    {/* setState is used to change the state*/}
    this.setState( 
      {
        name:'silpa',
        myString:'Hiiiii welcomee silpa Ajay'
      }
    )
  }

  deleteCard(){
    this.setState({
      show:false
    })
  }

  render() {
    return (
      <div className="App">
 
        <Adder/>

        <h1>welcome To Resort</h1>
        <p>{this.state.myString}</p>
        <p>{this.state.name }</p>
        <button onClick={this.handleChnage}>Change name</button>
        <Todo sampleState={this.state.myString}/>  {/* this is prop =>> it can be access in Todo component */}
        <h2>My Name is : {this.state.name}</h2>

        <h5>----------Counter App------------</h5>
        <Counter/>


          {/* ONCHANGE PRACTICE */}
        


        {/* List */}
        <List/>

        {/* Functional component */}

        <Heading/>

        {/* Functional component arrow function*/}

        <Navbar/>
        

        <Froms/>


      <h4>Cards are  : </h4>

      <div>{this.state.show ? <Card/> : ""}</div>

      <button onClick={this.deleteCard}>Delete Card</button>


      </div>
    );
  }
}

export default App;
