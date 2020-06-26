import React from "react";
import {Image} from "react";

class HomeComponent extends React.Component {
  render() {
    var imgMyimageexample = this.props.isOpen ? require('./../../../../images/anaInBali.jpg') : require('./../../../../images/anaInBali-B&W.jpg');
    var divStyle = {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${imgMyimageexample})`,
      backgroundSize: 'cover'
    };

    return (
      <div className="cComponent" style={divStyle} >
        { !this.props.isOpen ? (
          <div>
            <div className="thought">
            "All your dreams come true if you have the courage to pursue them" - Walt Disney
            </div>
            <p id="myName">Ana Arribasplata</p> 
          </div>
          ) : null 
        }
      </div>
    )
  }
}

export default HomeComponent;