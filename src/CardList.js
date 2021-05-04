import React from 'react';
import Card from './Card';

const CardList = ({products}) =>{
    return(
        <div>  
            {
                products.map((product,i) =>{
                    return( 
                        <Card 
                            key={i} 
                            id = {products[i].id} 
                            name = {products[i].name}
                        /> 
                    );
                })
            }         
      </div>  
    );
}

export default CardList;