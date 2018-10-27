import React from 'react';


const SearchBox = ({searchChange}) =>{
    return(
        <div>
         <input 
               className="pa ba b--green bg-lightest-blue"
               type="search"
               placeholder="robo search" 
               onChange={searchChange} 
        />
        </div>
    );
}

export default SearchBox;