import React from "react";
import { NavLink } from "react-router-dom";
// React Component
import { push as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faHome, faFemale } from '@fortawesome/free-solid-svg-icons'

//@fortawesome/free-brands-svg-icons

class HomeComponent extends React.Component {

    isMenuOpen() {
        console.log("heiuhwuihruiw " , this.props)
        this.props.changeState();
    }

    render() {
    return (
        <div id="outer-container">
            <Menu onStateChange={ this.isMenuOpen.bind(this) } width={ '50%' } id="scaleRotate" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
                <li className="li-menu-item"><a className="menu-item" href="/#/about"> About Me </a></li>
                <li className="li-menu-item"><a className="menu-item" href="/#/hireMe"> Hire Me  </a></li>
                <li className="li-menu-item"><a className="menu-item" href="/#/travels"> Travels </a></li>
                <li className="li-menu-item"><a className="menu-item" href="/#/family"> My Family </a></li>
                <div className="nav-down"> 
                    <li className="nav-down-li"><a className="small-icons" href="/#/hireMe"> Contact Me </a></li>
                    <li className="nav-down-li"><a className="small-icons" href="./../../../../arribasplata_ana_resume.pdf" target="_blank"> Resume </a></li>
                    <li className="nav-down-li"><a className="small-icons" href="/"><FontAwesomeIcon icon={faHome} /></a></li>
                    <li className="nav-down-li"><a className="small-icons" href="https://www.linkedin.com/in/anaarribasplata" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li className="nav-down-li"><a className="small-icons" href="https://github.com/arrb" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                </div>
            </Menu>
        </div>
        )
    }
}



export default HomeComponent;