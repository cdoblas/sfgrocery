import React from 'react';

const Card = ({name, id}) => {
    return (
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow'>
            <img  alt= 'product' src = {`https://robohash.org/${name}?20x20`} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;