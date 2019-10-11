import React, { Component } from "react";
import Counter from './Components/hook';
import Hoist from './Components/HoistState/HoistState';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Counter></Counter>
              <br />
              <Hoist></Hoist>

          </div>
      );
  }
}
export default App;
