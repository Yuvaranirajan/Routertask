import React from "react";
import './cardstyle.css';
import { FaFacebookF,FaTwitter ,FaInstagram,FaLinkedin,FaWhatsapp} from "react-icons/fa";
export default class Card extends React.Component{
    render(){
        return(
            <div className="container5">
                <div className="card5">
                     <img src="http://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" width={250} height={250}/>
                     <h1>Profile</h1>
                     <h2>Frontend Developer-Fresher</h2>
                     <p><FaFacebookF className="icon5"/><FaTwitter className="icon5"/><FaInstagram className="icon5"/><FaLinkedin className="icon5"/><FaWhatsapp className="icon5"/></p>

                </div>
            </div>
        );
    }
}