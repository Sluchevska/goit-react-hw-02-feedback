import PropTypes from 'prop-types';
import React from 'react';
export default class Feedback extends React.Component{
    handleIncrement=()=>{
     console.log(this)
    }
    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button type="button" onClick={this.handleIncrement}>Good</button>
                <button type="button" onClick={this.handleIncrement}>Neutral</button>
                <button type="button" onClick={this.handleIncrement}>Bad</button>
            </div>
        )
    }
}
