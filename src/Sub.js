import React, { Component } from "react";
import image from './hello.jpg' ;


class Sub extends Component{

render(){
    const myStyle={
        backgroundImage: 
        `url('${image}')`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'40px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return(
<div style={myStyle} >
    <h1 style={{color:"darkgreen"}}>MediGo</h1>
    <br></br>
    
    
    </div>
    )
}


}
export default Sub;