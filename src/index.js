import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Ram from './Ram';


/*import SetGame from './Component/FunctComp';
export default function RouterApp(){
    return(
        <Router>
                <Routes>
                    <Route path="/" element={<Demo/>}></Route>

                    <Route path="Home" element={<SetGame/>}></Route>
                    
                    
                </Routes>
        </Router>
    )
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ram/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
