import PropTypes from 'prop-types';
import React from 'react';
import Statistics from '../Statistics/Statistics';
export default class Feedback extends React.Component{
    
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
   
    

    handleIncrement = () => {
    
        this.setState(prevState => {
                return {
                good: prevState.good + 1,
             
            }
        })
    }
    render() {
       
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button type="button" onClick={this.handleIncrement}>Good </button>
                <button type="button" onClick={this.handleIncrement}>Neutral</button>
                <button type="button" onClick={this.handleIncrement}>Bad</button>
                
            <Statistics good={this.state.good}/>
            </div>
           
        )
    }
}
