import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';


// class Input extends Component {
//     state = {value: ''};

//     handleChange = (e) => {
//         this.setState({value: e.target.value})
//     }

//     render(){
//         const {value} = this.state;
//         return(
//             <div>
//                 <label htmlFor={'id'}>Text converter</label>
//                 <input id={'id'} type={'text'} value={value} placeholder={'Enter your message'} onChange={this.handleChange} />
//                 <br/>
//                 <br/>
//                 <br/>
//                 You have entered: {value}
//             </div>
//         );
//     }
// }




// class Counter extends Component {
//     state = {count: 0};

//     handleClick = () => {
//         const {count} = this.state;
//         this.setState({count: count + 1});
//     }

//     render(){

//         const{count} = this.state

//         return(
//             <div>
//                 <button type='button' onClick={this.handleClick}>Count : {count}</button>
//                 <Input />
//             </div>
//         )
//     }
// }

const styles = {
    card: {
        padding: 25,
        width: 250,
        margin: '20px auto',
        background: '#c1c1c1',
        textAlign: 'center',
        borderRadius: '5px'
    },
    title: {
        color: '#fff',
        fontSize: 18,
        lineHeight: '18px'
    },
    subtitle: {
        color: '#fff',
        fontSize: 12,
        lineHeight: '12px'
    }


}


class Card extends Component {

    render(){
        const {title, subtitle} = this.props;

        return(
            <div style={styles.card}>
                <h1 style={styles.title}>{title}</h1>
                {subtitle && (
                    <h2 style={styles.subtitle}>{subtitle}</h2>
                )}
            </div>

        )
    }
}

class App extends Component {

    render(){
        return(
            <div>
                <Card title={'You have Won!'} subtitle={'1 free drink'} />
                <Card title={'You Lost'} />
            </div>
        )
    }

}




const root = document.querySelector('#app');
render(<App/>, root);