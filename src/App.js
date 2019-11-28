import React, {Component, Fragment} from 'react';
import "./App.css";
import Tile from "./Components/Tile";
import Button from "./Components/button";
import Counter from "./Components/counter";
import Warning from "./Components/warning";

class App extends Component {
    state = {
        items: []
    };

    createRandomNumber = max => Math.floor(Math.random() * max +1);

    createStateElements = () => {
      const elements = [];
      let count = 0;
      for(let i = 0; i < 36; i++) {
          elements.push({hasItem: false, isClick: false, id: ++count});
      }
      elements[this.createRandomNumber(36)-1].hasItem = true;
        this.setState({items : elements})
    };

    removeItem = id => {
        const items = [...this.state.items];
        const index = items.findIndex(item => item.id === id);
        if(items.findIndex(item => item.hasItem && item.isClick === true)!==-1) {
            return;
        } else {
            items[index].isClick = true;
            this.setState({items: items});
        }
    };

    render() {
        return (
            <Fragment>
                {this.state.items.findIndex(item => item.hasItem && item.isClick === true)!==-1 && <Warning/>}
                <div className="container">
                    {this.state.items.map(item => <Tile key={item.id} state={item.hasItem} isClick={item.isClick} onClick={() => this.removeItem(item.id)}/>)}
                </div>
                <Counter items={this.state.items}/>
                <Button onClick={this.createStateElements}/>
            </Fragment>
    );
    }
}

export default App;