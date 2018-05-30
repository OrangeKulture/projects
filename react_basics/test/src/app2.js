import React, {Component} from 'react';
import {render} from 'react-dom';

// class HelloUser extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             username: 'Jerry'
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//             username: e.target.value
//         });
//     }

//     render(){
//         return(
//             <div>
//                 Hello {this.state.username} <br/>
//                 Change Name:<br/>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     onChange = {this.handleChange}
//                 />
//             </div>
//         )
//     }
// }

class FriendsContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'Homer',
            friends: [
                'Lenny',
                'Carl',
                'Moe'
            ]
        }
        this.addFriend = this.addFriend.bind(this);
    }

    addFriend(friend){
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }

    render(){
        return(
            <div>
                <h3>Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }

}


class AddFriend extends Component {
    constructor(props){
        super(props)

        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }

    updateNewFriend(e){
        this.setState({
            newFriend: e.target.value
        })
    }

    handleAddNew(){
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend: ''
        })
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.state.newFriend}
                    onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
        )
    }

}


class ShowList extends Component {
    render(){
        return(
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map((friend)=><li>{friend}</li>)}
                </ul>
            </div>
        )
    }
}

render(<FriendsContainer/>, document.getElementById('app'));