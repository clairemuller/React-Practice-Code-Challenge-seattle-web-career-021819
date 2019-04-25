import React, {Component} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      purchasedSushi: [],
      balance: 100
    }
    this.getData()
  }

  getData() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({sushis: data})
    })
    .then(console.log)
  }

  sliceSushi() {
    return this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4);
  }


  render() {
    debugger
    let fourSushis = this.sliceSushi();
    return (
      <div className = "app" >
        <SushiContainer sushi={'hey'} />
        <Table / >
      </div>
    );
  }
}

export default App;
