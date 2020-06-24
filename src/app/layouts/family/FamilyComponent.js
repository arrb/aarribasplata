import React from "react";
import {Image} from "react";

import { Slide } from 'react-slideshow-image';

const slideImages = [
  './../../../../images/slideshow/felixConLentes.jpg',
  './../../../../images/slideshow/felixYRocky.png',
  './../../../../images/slideshow/rockyPelucon.jpg',
  './../../../../images/slideshow/navidad.png'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay  : false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

// filter: grayscale(100%);

class FamilyComponent extends React.Component {
    render(){
        const shuffle = slideImages.sort(() => 0.5 - Math.random());
        console.log("suffle", shuffle )
        return (
            <div>
                <div className="slide-container">
                    <Slide {...properties}>
                        {
                            shuffle.map( (image, index) => (
                                <div className="each-slide" key={index} style={this.props.isOpen ?  {'filter': 'grayscale(100%)'} : null}>
                                    <div style={{'backgroundImage': `url(${shuffle[index]})`}}>
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </Slide>
                    <div id="text-family-center">
                        <p>My family are the most important thing in my life.
                        Rocky, my dog, teaches me to be patient.
                        Felix, my cat, teached me what a real friendship is like. </p><p>
                        My family are the most important thing in my life.
                        Rocky, my dog, teaches me to be patient.
                        Felix, my cat, teached me what a real friendship is like. 
                        My family are the most important thing in my life.
                        Rocky, my dog, teaches me to be patient.
                        Felix, my cat, teached me what a real friendship is like. 
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}


export default FamilyComponent;