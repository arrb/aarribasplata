import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeComponent from "./layouts/home/HomeComponent";
import AboutComponent from "./layouts/about/AboutComponent";
import TravelsComponent from "./layouts/travel/TravelsComponent";
import FamilyComponent from "./layouts/family/FamilyComponent";
import HireMe from "./layouts/hireMe/HireMe";


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
    console.log("routest: " , this.state.isOpen)
    return(
      <Switch>
          <Links changeState={this.changeState.bind(this)}/>
          <Route exact path="/index" exact  render={(props) => <HomeComponent isOpen={this.state.isOpen} /> } />
          <Route path="/about" exact component={AboutComponent} />
          <Route path="/travels" exact component={TravelsComponent} /> 
          <Route path="/family" exact render={(props) => <FamilyComponent isOpen={this.state.isOpen} /> }  /> 
          <Route path="/hireMe" exact render={(props) => <HireMe isOpen={this.state.isOpen} /> }  /> 
          <Route render={(props) => <HomeComponent isOpen={this.state.isOpen} /> }/>
        </Switch>
      )
   }

}


export default RouterComponent;
