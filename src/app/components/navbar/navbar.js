import React from "react";
import { NavLink } from "react-router-dom";
import { push as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faHome, faFemale,faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'


class HomeComponent extends React.Component {
    constructor (props) {
    super(props)
        this.state = {
            menuOpen: false
        }
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    isMenuOpen(state) {
        this.props.changeState();
        this.setState({menuOpen: state.isOpen})  
    }

    render() {
        return (
            <div id="outer-container">
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.isMenuOpen(state)}  width={ '50%' } id="scaleRotate" outerContainerId={'outer-container'} crossButtonClassName={ "cross-close" } customCrossIcon={ <FontAwesomeIcon icon={faTimes} /> } >
                    <li className="li-menu-item"><a className="menu-item" onClick={() => this.closeMenu()} href="/#/about"> About Me </a></li>
                    <li className="li-menu-item"><a className="menu-item" onClick={() => this.closeMenu()} href="/#/hireMe"> Hire Me  </a></li>
                    <li className="li-menu-item"><a className="menu-item" onClick={() => this.closeMenu()} href="/#/travels"> Travels </a></li>
                    <li className="li-menu-item"><a className="menu-item" onClick={() => this.closeMenu()} href="/#/family"> My Family </a></li>
                    <div className="nav-down"> 
                        <li className="nav-down-li"><a className="small-icons" onClick={() => this.closeMenu()} style={{color: '#00c4cc'}} href="./../../../../arribasplata_ana_resume.pdf" target="_blank"> Resume </a></li>
                        <li className="nav-down-li"><a className="small-icons" onClick={() => this.closeMenu()} href="/"><FontAwesomeIcon icon={faHome} /></a></li>
                        <li className="nav-down-li"><a className="small-icons" onClick={() => this.closeMenu()} href="/#/hireMe"><FontAwesomeIcon icon={faPaperPlane} /></a></li>
                        <li className="nav-down-li"><a className="small-icons" onClick={() => this.closeMenu()} href="https://www.linkedin.com/in/anaarribasplata" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li className="nav-down-li"><a className="small-icons" onClick={() => this.closeMenu()} href="https://github.com/arrb" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    </div>
                </Menu>
            </div>
        )
    }
}


export default HomeComponent;