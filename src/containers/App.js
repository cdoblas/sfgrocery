import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { setSearchField,requestRobots} from '../actions.js';

const mapStateToProps = state => {
    return{
        robots: state.requestRobots.robots,
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}




class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots();
    }

    
    
    render()
    {
        const {searchField, onSearchChange, robots,isPending} = this.props;
        const filteredProducts = robots.filter(product =>{
            return product.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        });


        return isPending ?
            <h1>Loading</h1> :
            <div className = 'tc'>
                <h1 className = 'f1'>Safe Grocery</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <CardList products = {filteredProducts} />
                </Scroll>
            </div>
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
