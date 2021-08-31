import React from 'react';
import Feedback from './components/Feedback/FeedbackOptions'

import Statistics from './components/Statistics/Statistics';
import SectionTitle from './components/Feedback/SectionTitle/SectionTitle';
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
  countTotalFeedback = () => {
     const { good, neutral, bad } = this.state
   
    return    good+neutral+bad
  }
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state
  
return Math.round(good*100/(good+neutral+bad))
  }
  render() {
    const { good, neutral, bad } = this.state
      
        return (
          <div>
            <SectionTitle title='Please leave feedback'>
            <Feedback options={Object.keys(this.state)} handleIncrement={this.handleIncrement}/>
            </SectionTitle>
            <SectionTitle title='Statistics'>
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          </SectionTitle>
          </div>
    
           
        )
    }
}



export default App;
