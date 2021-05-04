import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {products} from './products';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state  = {
            products: [],
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render()
    {
        const filteredProducts = this.state.products.filter(products =>{
            return products.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        });
        
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>Safe Grocery</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList products = {filteredProducts} />
            </div>
            
        );
    }
    
}

export default App;
