import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeComponent from "./layouts/home/home";
import AboutComponent from "./layouts/about/about";
import Links from "../app/components/navbar/navbar";


class RouterComponent extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  changeState(){
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    console.log("routes: " , this.state.isOpen)
    return(
      <Router>
        <div>
          <Links changeState={this.changeState.bind(this)}/>
          <Route exact path="/"   render={(props) => <HomeComponent isOpen={this.state.isOpen} /> } />
          <Route path="/about" component={AboutComponent} />

          </div>
        </Router>
      )
   }

}


export default RouterComponent;
