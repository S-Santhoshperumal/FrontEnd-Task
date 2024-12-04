import React, { Component } from "react";

class MyCountryComp extends Component {

    constructor(){
        super();
        this.state={
             count:0
        }
    }

    changeIncreaseData =() =>{
       
        
        this.setState((prevState) => ({count:prevState.count+1}));
    }

    changeDecreaseData =() =>{
        
        this.setState((prevState) => ({count:prevState.count-1}));
    }


    Reset =() =>{
       
        
        this.setState((prevState) => ({count:prevState.count=0}));
    }


    render() {
        return (
            <div>
                <h2>This is MyCountryComp Component</h2>

                <p>count:<strong>{this.state.count}</strong></p>
                

                <button type="button" className="btn btn-primary" onClick={()=>this. changeIncreaseData()}>Count +</button>

                <button type="button" className="btn btn-primary" onClick={()=>this. changeDecreaseData()}>Count -</button>

                <button type="button" className="btn btn-primary" onClick={()=>this. Reset()}>Reset</button>
            </div>
            
        )

        
    }
}

export default MyCountryComp;