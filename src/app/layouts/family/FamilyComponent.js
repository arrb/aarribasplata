import React from "react";
import {Image} from "react";
import { Slide } from 'react-slideshow-image';

var felixSolo      = require('./../../../../images/felixSolo.png');
var felixYRocky    = require('./../../../../images/felixYRocky.png');
var navidad        = require('./../../../../images/navidad.png');
var felixRockyBr   = require('./../../../../images/R&FBruins.jpg');

const slideImages = [
  felixSolo,
  felixYRocky,
  navidad,
  felixRockyBr
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  autoplay  : false,
  pauseOnHover: true,
  scale: 1,
  prevArrow: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class FamilyComponent extends React.Component {
    render(){
      const shuffle = slideImages.sort(() => 0.5 - Math.random());
      return (
        <div style={this.props.isOpen ?  {'filter': 'grayscale(100%)'} : null}>
          <div className="slide-container">
            <div className="slide-div">
              <Slide {...properties}>
                {
                  shuffle.map( (image, index) => (
                    <div className="each-slide" key={index} >
                      <div style={{'backgroundImage': `url(${shuffle[index]})`}}>
                      </div>
                    </div>
                  ))
                }
              </Slide>
            </div>
            <div id="text-family-center">
                <h1>Familia</h1>
                <p>
                  My family is the most important thing in my life. I got Felix, my cat, five years ago. He was with me when I moved to my first apartment 
                  and we have been inseparable ever since.
                  Two years later, Rocky, my dog, came to my life. He has taught me how to be patient but firm when teaching him basic commands.
                </p>
            </div>
          </div>
        </div>
      )
    }
}

export default FamilyComponent;