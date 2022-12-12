
import React from "react"
class ClassComp1 extends React.Component{
    render()
    {
    return(
        <>
          <h1>LOGIN FORM</h1> 
           <ClassComp />
        </>
    );
    }
}
class ClassComp extends React.Component{
    render()
    {
        const Hlo=()=>{
            let x='Verified successfully'
            alert(x)
        }
    return(
        <div>
          <h2>USERNAME</h2> 
          <input type="text" placeholder="Enter your name"></input>
          <h2>PASSWORD</h2>
          <input type="password" placeholder="Enter your password"></input><br></br>
          <br></br>
          <button onClick={Hlo}>SUBMIT</button>
        </div>












    );
    }
}

export default ClassComp1
