import React from "react";
import {Link} from "react-router-dom";
import './navbarstyle.css';
export default function Navbar(){
    return(
        <div className="container01">
            <div className="logo01">
                <h1>My Task</h1>
            </div>
            <div className="menu">
                <nav>
                    <ul>
                    <li className="item"><Link to="/" className="link">Home</Link></li>
                    <li className="item"><Link to="/bulb" className="link">Bulb</Link></li>
                    <li className="item"><Link to="/about" className="link">About</Link></li>
                    <li className="item"><Link to="/counter" className="link">Counter</Link></li>
                    <li className="item"><Link to="/card" className="link">Card</Link></li>
                    <li className="item"><Link to="/form" className="link">Form</Link></li>
                    <li className="item"><Link to="/multicard" className="link">Multicards</Link></li>
                    </ul>
                </nav>
            
            </div>
            
        </div>
    );
}