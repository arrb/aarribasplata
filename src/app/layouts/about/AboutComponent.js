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
                    <h1 className="title-tag-about">Hola!</h1>
                    <p className="breathing-paragraph">One of my earliest memories is me watching at my dad code. It looked like magic, but he always made 
                    it fun for me. This is when I became interested in coding. This ended when I was nine, when my parents 
                    had to move to United States. My Papi was thousands 
                    of miles away. I wanted to feel close to him, so I began to code.</p>
                    <br></br>
                    <p className="breathing-paragraph">My parents wishes and motivations have helped me overcome every obstacle I have encountered. For example, 
                    working on a male dominated field, learning a new language, and moving to a new country. As my career development started, 
                    I noticed most people around me were male. Although I  had no reason 
                    to be scared because I was surrounded by people who, just like  my family, wanted me to succeed.
                    I wanted other women to never doubt their skills and to not feel like they don't belong. It became important that other women 
                    felt  the same kind of security and confidence that I now did as a software developer, I wanted all female developers to 
                    show up for their first day at work and not be scared — and to never be the “only girl.”</p>
                    <br></br>
                    <p className="breathing-paragraph">Over time, it became about something other than me.  I realized my confidence came from the strength that 
                    kept me going when I struggled with my English, and through all the times I was told to just quit. I was strong 
                    because my father encouraged me as a young girl. So I decided to become a mentor with Girls Who Code. When we support 
                    young women and show them there is no limit to what they can do, we can actually create meaningful change in the classroom, 
                    the workplace, and the <a href="/travels"> world.</a></p>
                </div>
              </div>
            </div>

        )
    }
}



export default AboutComponent;