import React from "react";
import './aboutstyle.css';
export default function About(){
    return(
        <div className="container2">
            <div className="image2">
                <img src="https://images.pexels.com/photos/10094553/pexels-photo-10094553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <div className="content2">
                <h1 className="heading2">About Us</h1>
                <h2 className="heading2">Developer<span className="head2"> & Designer</span></h2>
                <p className="aboutcontent2">I am a front-end web developer. I can provide clean code and pixel design.
                   I also make the website more & more interactive with web animations.
                  I can  provide clean code and pixel design.I also make the website 
                  more & more  interactive with web animations. A responsive design makes
                  your websites accessible to all users,regardless of their device.
                </p> 
                 <button>let's talk</button>
            </div>  
        </div>
    );
}