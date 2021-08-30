import PropTypes from 'prop-types';
import React from 'react';



export default function Feedback({ options, handleIncrement }) {
   
    return options.map((option) =>(
                
                <button type="button" key={option} onClick={()=>handleIncrement(option)} > {option} </button>
            ))
         
         
    
}
