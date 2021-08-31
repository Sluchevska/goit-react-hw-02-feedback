import PropTypes from 'prop-types';
import React from 'react';



export default function FeedbackOptions({ options, handleIncrement }) {
   
    return options.map((option) =>(
                
                <button type="button" key={option} onClick={()=>handleIncrement(option)} > {option} </button>
            ))
         
         
    
}
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    handleIncrement: PropTypes.func
}
