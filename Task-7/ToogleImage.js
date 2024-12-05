import React, { Component } from 'react';
import Virat from '../Assests/Virat.jpg';
import yuva from '../Assests/yuva.jpg';

class ToogleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkCar: true 
        };
    }

   
    toggleImage = () => {
        this.setState((prevState) => ({
            checkCar: !prevState.checkCar 
        }));
    };

    render() {
        const { checkCar } = this.state; 

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkCar ? Virat : yuva} alt={checkCar ? 'Virat' : 'yuva'} height='200px' width='200px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Image
                </button>
            </div>
        );
    }
}

export default ToogleImage;