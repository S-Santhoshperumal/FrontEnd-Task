import React, { Component } from 'react';
import sachin from '../Assests/sachin.jpg';
import Msd from '../Assests/Msd.jpg';
import Virat from '../Assests/Virat.jpg'; 

class MultipleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='200px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: sachin, alt: 'sachin' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show sachin
                </button>
                <button
                    onClick={() => this.toggleImage({ src: Msd, alt: 'Msd' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Msd
                </button>
                <button
                    onClick={() => this.toggleImage({ src: Virat, alt: 'Virat' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Virat
                </button>
            </div>
        );
    }
}

export default MultipleImageComp;