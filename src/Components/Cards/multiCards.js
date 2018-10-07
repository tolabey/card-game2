import React from "react";
import {connect} from "react-redux";
import {utils} from "../../Utils/utils";
import Card from "./Card.js"
import {action} from '../../reduxStore/action.js';
import I from "immutable"

class MultiCards extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let cardsIndexes = [];
    let cards = [];
    for(let i=0; i < 5; i++) {
      cardsIndexes[i] = utils.getRandomInt(52);
    }
    this.props.setMultiCards("ADD_GROUP", {groupName:this.props.groupName, value: {cardsIndexes}});

  }

  renderCardGroups() {
    return this.props.cardSet.get(`${this.props.groupName}`, I.Map()).get("cardsIndexes", I.List()).map(each => {
      return <Card key={each} cardIndex={each}></Card>
    })
}


  render(){
    return(
      <div className="multi-cards">
          <div className="total-score">{utils.getAllRanks(this.props.cardPaths, this.props.cardSet.get(`${this.props.groupName}`, I.Map()).get("cardsIndexes", I.List()), this.props.rules)}</div>
        <div className="multi-cards-list">
          {this.renderCardGroups()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    cardPaths: store.get("cardPathList", []),
    cardSet: store.get("groups", I.Map()),
    rules: store.get("rules", {})
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMultiCards: (type, payload) => {dispatch(action(type, payload))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MultiCards);
