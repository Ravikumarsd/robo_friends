import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            searchfield:'',
            robots: []
        }
    }
    //Mounting method built in methods
componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots:users})});
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    
render(){  
    const {searchfield,robots} = this.state;
     const filteredRobots = robots.filter((robots)=>{
         return robots.name.toLowerCase().includes(searchfield.toLowerCase());
     })
     return !robots.length ?
    <h1>Loading</h1> :
    (
        <div className='tc'>
            <h1 id="title">Robo friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <CardList robots={ filteredRobots } />
            </Scroll>
        </div>
    );
  }
}
