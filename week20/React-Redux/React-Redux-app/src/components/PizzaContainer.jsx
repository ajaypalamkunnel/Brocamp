import React from 'react'
import { connect } from 'react-redux'
import { buyPizza } from '../redux';

const PizzaContainer = (props) => {
    console.log(props);
    
  return (
    <div>
        <h1>Number of Pizza : {props.numberOfPizza}</h1>
        <button onClick={props.buyPizza}>Buy Pizza</button>
    </div>
  )
}



const mapStateToProps = (state) =>{
    return{
        numberOfPizza:state.pizza.numberOfPizza
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyPizza:()=>dispatch(buyPizza())
    }
}




export default connect(mapStateToProps,mapDispatchToProps) (PizzaContainer)