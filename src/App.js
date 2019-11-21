import React, {Component} from 'react';
import "./App.css";

class App extends Component {
    state = {
        items: []
    };

    createRamdomNumber = max => Math.floor(Math.random() * max +1);

    createStateElements = () => {
      const elements = [];
      for(let i = 0; i < 36; i++) {
          elements.push({hasItem: false});
      }
      elements[this.createRamdomNumber(36)].hasItem = true;
      this.setState({items : elements})
        console.log(this.state.items);
    };

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default App;