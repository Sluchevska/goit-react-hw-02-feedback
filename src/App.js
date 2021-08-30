import React from 'react';
import Feedback from './components/Feedback/Feedback'

import Statistics from './components/Statistics/Statistics';
import './App.css';

class App extends React.Component{
    
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
       handleIncrement = (e) => {
       
         this.setState((prevState => ({
                
            [e]: prevState[e] + 1
          
               
             
            
        })))
    }
  render() {
    const { good, neutral, bad } = this.state
    const options = Object.keys(this.state)
       
        return (
          <div>
             <h1>Please leave feedback</h1>
            <Feedback options={options} handleIncrement={ this.handleIncrement}/>
               <h2>Statistics</h2>  
            <Statistics good={this.state.good} neutral={neutral} bad={ bad}/>
            </div>
           
        )
    }
}



export default App;
