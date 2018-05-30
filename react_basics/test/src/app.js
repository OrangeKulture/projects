import React, {Component} from 'react';
import {render} from 'react-dom';


class App extends Component {
    constructor(){
        super();
        this.state = {
            counter: 10
        }
        this.updateCounter = this.updateCounter.bind(this);
    };

    updateCounter(e){
        console.log('something');
    }

    render(){
        return(
            <div>
                <Counter currentCount={this.state.counter}/>
                <Buttons toClick={this.updateCounter}/>
            </div>
        )
    }
}

class Counter extends Component{
    render(){
        return(
            <h4>The current count is: {this.props.currentCount}</h4>
        )
    }
}

class Buttons extends Component {

    clickBTN = () => {
        
    }

    render(){
        return(
            <div>
                <button onClick = {this.toClick}>+</button>
                <button id="minus" onClick = {this.updateCounter}>-</button>
            </div>
        )
    }
}

export default App;