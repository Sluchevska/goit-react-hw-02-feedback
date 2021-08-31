import React from 'react';
import Feedback from './components/Feedback/FeedbackOptions'

import Statistics from './components/Statistics/Statistics';

import SectionTitle from './components/SectionTitle/SectionTitle';
import Notification from './components/Notification/Notification';
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
    const totalFeedback = good+neutral+bad
      
        return (
          <div>
            <SectionTitle title='Please leave feedback'>
            <Feedback options={Object.keys(this.state)} handleIncrement={this.handleIncrement}/>
            </SectionTitle>
            <SectionTitle title='Statistics'>
              {totalFeedback > 0 ?
                <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="No feedback given" />}
            
          </SectionTitle>
          </div>
    
           
        )
    }
}



export default App;
