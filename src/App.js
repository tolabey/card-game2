import React, { Component} from "react";
import {Provider} from "react-redux";
import Test from "./Components/testComponent.js";
import {utils} from "../src/Utils/utils.js";
import {createStore} from "redux";
import {reducer} from "../src/reduxStore/reducer.js";
import "./App.css";
import MultiCards from "./Components/Cards/MultiCards.js";

class App extends Component{
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
  }

  render(){
    const a = utils.getRandomInt(52);
    return(
      <Provider store={this.store}>
        <div className="main">
          <MultiCards groupName="group1"/>
          <MultiCards groupName="group2"/>
          <MultiCards groupName="group3"/>
        </div>
      </Provider>
    );
  }
}

export default App;
