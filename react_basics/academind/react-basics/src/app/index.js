import React, {Component} from 'react';
import {render} from 'react-dom';

const root = document.querySelector('#app');

const styles = {
    width: '100%',
    height: 150,
    background: 'slateblue',
    padding: 0,
    margin: 0
}

class App extends Component {

    
    
    render(){
        document.body.style.padding = "0";
        document.body.style.margin = "0";
        return (
            <div style={styles}>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

render(<App/>, root);