import React from "react";
import { NavLink } from "react-router-dom";
// React Component
import { push as Menu } from 'react-burger-menu'


class HomeComponent extends React.Component {

    isMenuOpen() {
        console.log("heiuhwuihruiw " , this.props)
        this.props.changeState();
    }

    render() {
        return (
        <div id="outer-container">
            <Menu onStateChange={ this.isMenuOpen.bind(this) } width={ '50%' } id="scaleRotate" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
                <li><a className="menu-item" href="/about"> About Me </a></li>
                <li><a className="menu-item"> Hire Me  </a></li>
                <li><a className="menu-item"> My Dreams </a></li>
                <div> 
                    <a className="smallIcons"> Resume </a>
                    <a className="smallIcons"> Contact Me </a>
                    <a className="smallIcons" href="https://www.linkedin.com/in/anaarribasplata" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a className="smallIcons" href="https://plus.google.com/+AnaCarolinaArribasplataGarcia" target="_blank"><i className="fa fa-google"></i></a>
                    <a className="smallIcons" href="https://github.com/arrb" target="_blank"><i className="fa fa-github"></i></a>
                </div>
            </Menu>
        </div>
        )
    }
}



export default HomeComponent;