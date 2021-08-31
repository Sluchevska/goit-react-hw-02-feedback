import PropTypes from 'prop-types';
import React from 'react';
import {Buttons} from './FeedbackOptions.styled'



export default function FeedbackOptions({ options, handleIncrement }) {
   
    return options.map((option) =>(
                
                <Buttons type="button" key={option} onClick={()=>handleIncrement(option)} > {option} </Buttons>
            ))
         
         
    
}
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    handleIncrement: PropTypes.func
}
