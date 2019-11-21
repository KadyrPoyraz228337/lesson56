import React, {Component} from 'react';
import "./App.css";

class App extends Component {
    state = {
        items: []
    };

    createRamdomNumber = max => Math.floor(Math.random() * max +1);

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;