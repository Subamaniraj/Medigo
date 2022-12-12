import React, { Component } from "react";
import image from './hello.jpg' ;

class Wel extends Component{

render(){

    return(
<div style={{ backgroundImage: `url('${image}')` }} >
    <h1 style={{color:"green"}}>MediGo</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    </div>
    )
}


}
export default Wel;