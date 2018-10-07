import React from 'react'
import {connect} from "react-redux";
import "./cards.css"
import {utils} from '../../Utils/utils'

class Card extends React.Component{
  // This componenet takes props as .props.cardIndex
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }


  render(){
    const cardIndex = this.props.cardIndex;
    return(
      <div className="card">
        {<img src={`../svg-cards/${this.props.cardPaths[cardIndex]}`} alt=""/>}
        <div className="card-score">{utils.getRanks(this.props.cardPaths[cardIndex], this.props.rules)}</div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    cardPaths: store.get("cardPathList", []),
    rules: store.get("rules", [])
  };
}



export default connect(mapStateToProps)(Card);
