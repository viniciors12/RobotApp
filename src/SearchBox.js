import React from 'react';

const searchBox = ({searchField, searchChange}) =>{
    return(
        <div className='pa2'>
        <input className='pa2 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='Search Robot'
        onChange={searchChange}/>
        </div>
    )
}

export default searchBox;