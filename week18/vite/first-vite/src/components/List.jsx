import React,{Component} from "react";

export class List extends Component{
    state={
        data:[
            {
                id:1,
                name:'John',
                age:45
            },
            {
                id:2,
                name:'Rahul',
                age:4
            }
        ]
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.data.map((value,index)=>(
                        //this key is used for uniquely identify eacn listing because of the virtual DOM
                         <li key={index}>{value.id}===={value.name}===={value.age}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List