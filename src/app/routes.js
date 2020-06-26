import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

  ender(){
    console.log("routesTEST: " , this.state.isOpen)
    return(
      <Router>
        <Switch>
          <div>
            <Links changeState={this.changeState.bind(this)}/>
             <Route exact path="/"   render={(props) => <HomeComponent isOpen={this.state.isOpen} /> } />
             <Route path="/about" component={AboutComponent} />
             <Route path="/travels" component={TravelsComponent} /> 
             <Route path="/family" render={(props) => <FamilyComponent isOpen={this.state.isOpen} /> }  /> 
             <Route path="/hireMe" render={(props) => <HireMe isOpen={this.state.isOpen} /> }  /> 
            <Route component={() => (<div>404 Not found 1</div>)} />
            </div>
          </Switch>
        </Router>
      )
   }

  // render(){
  //   console.log("routes: " , this.state.isOpen)
  //   return(
  //     <Router>
  //       <div>
  //         <Links changeState={this.changeState.bind(this)}/>
  //         <Route exact path="/"   render={(props) => <HomeComponent isOpen={this.state.isOpen} /> } />
  //         <Route path="/about" component={AboutComponent} />
  //         <Route path="/travels" component={TravelsComponent} /> 
  //         <Route path="/family" render={(props) => <FamilyComponent isOpen={this.state.isOpen} /> }  /> 
  //         <Route path="/hireMe" render={(props) => <HireMe isOpen={this.state.isOpen} /> }  /> 
  //         </div>
  //       </Router>
  //     )
  //  }

}


export default RouterComponent;
