import React from "react";
import {MdOutlineEmail} from "react-icons/md";
import {RiLockPasswordLine, RiGithubFill} from "react-icons/ri";
import {FcGoogle} from "react-icons/fc";
import './formstyle.css';
export default class Form extends React.Component{
    render(){
        <script src="https://kit.fontawesome.com/d6f6d4254b.js" crossorigin="anonymous"></script>

        return(
            <div className="container6">
                <div className="logo6">
                    <img src="https://img.freepik.com/premium-vector/creativity-help-see-business-opportunity-vision-discover-new-solution-idea-curiosity-searching-success-concept-businessman-open-lightbulb-idea-using-binoculars-see-business-vision_212586-1356.jpg?size=626&ext=jpg&ga=GA1.2.724536227.1677913811&semt=sph"></img>
                </div>
                <div className="element6">
                    <h1>Explore</h1>
                    <p>Lorem ipsum dolor sit amet consectectur<br></br> adipiscing wlit.Dolors,officia?</p><br></br>
                    <form>
                        <div className="email">
                        <input type="email" placeholder="Email"/><MdOutlineEmail className="icon"/>
                        </div>
                        <div className="password">
                        <input type="password" placeholder="password"/><RiLockPasswordLine className="icon1"/>
                        </div>
                        <button style={{backgroundColor:"skyblue"}}>Login</button>
                        <button>Sign in with Google <FcGoogle className="icon2"/></button>
                        <button>Sign in with Github <RiGithubFill className="icon3"/></button>
                        <p>don't have an account yet? <span style={{color:'blue'}}>Sign Up</span></p>
                    </form>
                </div>
            </div>

        )
    }

}