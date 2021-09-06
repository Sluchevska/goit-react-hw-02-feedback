import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import Notification from '../Notification/Notification';
import { Container } from './App.styled';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e]: prevState[e] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
      return Math.round((this.good * 100) / this.countTotalFeedback());
  };
  render() {
    const { good, neutral, bad } = this.state;
  

    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
               total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
      </Container>
    );
  }
}

export default App;
