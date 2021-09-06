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
  countPositiveFeedbackPercentage = (total) => {
    const{good}=this.state
      return Math.round((good * 100) / total);
  };
  render() {
    const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback()

    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
               total={total}
              positivePercentage={this.countPositiveFeedbackPercentage(total)}
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
