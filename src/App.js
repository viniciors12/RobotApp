//para no poner react.component
import React, {Component} from 'react';
import CardList from '../Components/CardList';

import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
        robots: [],
        searchField:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response=> response.json()).
        then(users => {this.setState({robots:users})});
    }

    //Siempre que se haga una función que no sea parte de react, usar esta syntaxis
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        console.log(event.target.value);
    }

    render(){
        const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.robots.length==0){
           return <h1>Loading</h1>
        }
        else{
        return(
            <div className="tc">
            <h1 className='f2'> RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll>
            </div>
        );
    }
    }
}

export default App;