import React from "react";
import image from './hello.jpg';
import logo from './logo.jpg'
import './Project.css';
import myimage from './doc.png';
import Myimage from './slogan.png'
import icon from './doc 3.png'
import icon1 from './doc 2.png';
import {Link} from "react-router-dom";


class Demo extends React.Component{
    render()
    {
    const myStyle={
        backgroundImage: 
        `url('${image}')`,
        height:'110vh',
        marginTop:'-70px',
        fontSize:'40px',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
    };
    return(
          <div style={myStyle}>
            <img src={logo} alt="Logo"className="logo"/>
           <h2 style={{color:"darkolivegreen",marginRight:'30%'}}id="header">MediGo</h2>
         <Link to="SetGame" style={{textDecoration:'none',top:'190px'}}>Click Here</Link>
           <input type="text" id="para" placeholder="FIND DOCTORS,HOSPITALS,DISPENSARY NEAR YOU......... " style={{textAlign:"center",marginLeft:'500px',height:'50px'}} ></input>
           <br></br>
           <form className="border"/>
           <img src={icon} alt="Icon" className="Icon"/>
           <p id="para2"> DR.MANOHARAN BDS..;   Oral Medicine & Radiology Abishek Hospital TVS Nagar,Cbe-25 Open-Closes 11:00PM</p>
           <form className="border1"/>
           <img src={icon1} alt="Icon1" className="Icon1"/>
           <p id="para3">DR.DIVYA BHARATHI MBBS,MS..; Cardiologist,Chief Surgeon REX HospitalNSR Road,Saibaba Colony,Cbe-13 Open-Closes 10:00PM</p>
           <form className="border2"/>
           <img src={icon} alt="Icon" className="Icon3"/>
           <p id="para4">DR. PRABAKARAN K MBBS,MD...; General practitioner Paripoorna Estates,Cbe-36 Closed ⋅ Opens 6:30PM</p>
           <form className="border3"/>
           <img src={icon1} alt="Icon1" className="Icon4"/>
           <p id="para5">DR.GEETHA KRISHNAN P MBBS,MD,DNB...; Neurologist Krishna bakery, T-139, Kovaipudur Open ⋅ Closes 3:30PM ⋅ Reopens 7:30PM </p>
          <img src={myimage} alt="doctors" className="Doc"/>
         <img src={Myimage} alt="Slogan" className="slogan"/>
          </div>
    );
    }
}
export default Demo