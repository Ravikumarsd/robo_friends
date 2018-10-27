import React from 'react';
import 'tachyons';

const Card = ({id,name,email}) => {
    return(
        <div className="tc pa2 ma2 bg-light-gray dib br4 grow">
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;