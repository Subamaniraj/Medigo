import React from "react";
import image from './doc.png';
import './App.css'
import Myimage from './slogan.png'
import MyLogo from './logo.jpg'
import background from './hello.jpg'
import icon from './doc 3.png'




class Set extends React.Component
{
    render()
    {
        const myStyle={
            backgroundImage: 
            `url('${background}')`,
            height:'100%',
            fontSize:'20px',
            backgroundSize:'100%',
            backgroundRepeat: 'no-repeat',
        };   
        
    return(
   <div style={myStyle}>
       <img src={MyLogo} alt="Logo" className="omg"/>
       <h1 style={{color:"darkolivegreen",marginLeft:"5%"}}>MediGo</h1>
       <input type="text" id="para" placeholder="Enter the name of doctor" style={{textAlign:"center",marginLeft:'500px',height:'30px'}} ></input>
       <br></br>
       <div>
        <img src={icon} alt="Doc" className="kee"/>
        </div>
       <br></br>
       <img src={image} alt="pic" />
       <br></br>
       <img src={Myimage}  alt="Slogan" />
       
    </div>
    );
    }
}
export default Set