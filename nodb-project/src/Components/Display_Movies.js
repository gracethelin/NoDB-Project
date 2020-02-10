import React, {Component} from 'react'

import Movies from './Movies'

import Search from './Search'


function Display_Movies (props){
        
    return (
        <div className="display" >
            
              {props.title}  

         <input type="range" onChange={(e) =>props.rateMovies(props.id, e.target.value)} min="1" max="10"/>

         <button className="deleteButton" onClick={() => {
             props.deleteMovies(props.id)

         }}>Delete Movie</button> 

      
      
         
    </div>
    
    )
}


export default Display_Movies
