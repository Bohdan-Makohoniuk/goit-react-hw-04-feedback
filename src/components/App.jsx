import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statictics/Statistics';
import React, { Component } from 'react';

import{Container} from './App.styled'

class App extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
   };

   countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      if (!good) {
         return 0;
      }
      const total = good + neutral + bad;
      const feedback = (good * 100) / total;
      return Math.round(feedback);
   };
   handelClick = name => {
      this.setState(prevState => ({ [name]: prevState[name] + 1 }));
   };
   countTotalFeedback = () => {
      const { good, bad, neutral } = this.state;
      return good + neutral + bad;
   };
   render() {
      const { good, neutral, bad } = this.state;
      return (
         <Container>
            <Section title="Please leave feedback">
               <FeedbackOptions
                  options={Object.keys(this.state)}
                  onLeaveFeedback={this.handelClick}
               />
            </Section>
            <Section title="Statistics">
               {!this.countTotalFeedback() ? (
                  <Notification message="There is no feedback" />
               ) : (
                  <Statistics
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={this.countTotalFeedback()}
                     percentage={this.countPositiveFeedbackPercentage()}
                  />
               )}
            </Section>
         </Container>
      );
   }
}

export default App;