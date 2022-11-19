import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statictics/Statistics';
import {useState} from 'react';

import{Container} from './App.styled'


 export const App = ()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const handelClick = event => {
      //  switch ({good, neutral, bad}) {
      //     case 'good':
      //        setGood(good + 1);
      //        break;
      //     case 'neutral':
      //        setNeutral(neutral + 1);
      //        break;
      //     case 'bad':
      //        setBad(bad + 1);
      //        break;
      //     default:
      //        return;
      //  }
    if (event === 'Good') {
      setGood(good + 1);
    } else if (event === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (event === 'Bad') {
      setBad(bad + 1);
    }
    };
    
     const countTotalFeedback = () => {
      const total = good + neutral + bad
      return total;
   };
    
  const  countPositiveFeedbackPercentage = () => {
     if (countTotalFeedback === 0) {
        return 0;
     }
     else
     return Math.round((good / countTotalFeedback()) * 100);
   };
   
   

  
   
   
   return (
      <Container>
            <Section title="Please leave feedback">
               <FeedbackOptions
                  options={['Good', 'Neutral', 'Bad']}
                  onLeaveFeedback={handelClick}
               />
            </Section>
            <Section title="Statistics">
               {!countTotalFeedback() ? (
                  <Notification message="There is no feedback" />
               ) : (
                  <Statistics
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={countTotalFeedback()}
                     percentage={countPositiveFeedbackPercentage()}
                  />
               )}
            </Section>
         </Container>
   )
};

   
 