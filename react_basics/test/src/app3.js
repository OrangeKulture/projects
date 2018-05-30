import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            parentText1: 'Im text1 from parent',
            parentText2: 'Im text2 from parent'
        }
    }

    render(){
        return(
            <div>
                <Child1 fromParent={this.state.parentText1}/>
                <Child2 fromParent={this.state.parentText2}/>
            </div>
        )
    }

}

class Child1 extends Component {
    render(){
        return(
            <div>
                <h1>What we get from the parent is: {this.props.fromParent}</h1>
            </div>
        )
    }
}

class Child2 extends Component {
    render(){
        return(
            <div>
                <h1>What we get from the parent is: {this.props.fromParent}</h1>
            </div>
        )
    }
}

export default App;