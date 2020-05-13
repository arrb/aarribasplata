import React from "react";


class AboutComponent extends React.Component {

    render() {
        var imgMyimageexample = require('./../../../../images/aboutMe.jpg');
        var divStyle = {
          width: '50%',
          height: '100vh',
          backgroundImage: `url(${imgMyimageexample})`,
          backgroundSize: 'cover'
        };
        return (
            <div className="content">
              <div style={divStyle}></div>
              <div className="content-right">
                <div className="description-tag">
                    <h1 className="title-tag">Hola!</h1>
                    <p>Each night, when I was young, I would follow my father into the escritorio and sit next to 
                    him as he coded. Queen played in the background, and I watched him and whatever was happening on 
                    the seemingly massive screen atop his desk. He worried I would be bored. So, he wrote a memory game 
                    for me to play. Suddenly, this time spent with my father became even more special and precious, and 
                        numbers and letters on the screen seemed to come alive. The simple game of memory my father 
                    built showed me just how dynamic code could be. This is when I became interested in coding.</p>
                </div>
              </div>
            </div>

        )
    }
}



export default AboutComponent;