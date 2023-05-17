import React from 'react';
import './addstyle.css';
export default class Add extends React.Component{
      
    constructor(){
        super();
       this.state={count:0};
       this.Add=this.Add.bind(this);
       this.Sub=this.Sub.bind(this);
       console.log("this is constructor");
    }
    componentDidMount(){
        setTimeout(alert("Welcome to our Counter"),1000);
        console.log("this is componentdidmount");
        //  alert("Welcome to our Counter")
    }
    componentDidUpdate(){
        console.log("counter is updated");
    }
    Add(){
        if(this.state.count<10){
           this.setState({count:this.state.count+1});

        }
        else{
            alert("your are reaching the count 10");
        }
    }
    Sub(){
        if(this.state.count>0)
        {
            this.setState({count:this.state.count-1});
        }
    }
    render(){
        console.log("this is render");
        return(
            <>
            
            <div className="container3">
                <div className='row3'>
            <p>{this.state.count}</p>
            <div className='container31'>
            <button className="btn1" onClick={this.Add}>Add</button>
            <button className="btn2" onClick={this.Sub}>Sub</button>
            </div>
            </div>
            </div>
            </>
            
        );
    }
    componentWillUnmount(){
        console.log("willunmount");
    }
}
