import { useState } from 'react';
import { useEffect } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const FeedbackCount = feed => () => {
    switch (feed) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositivePercentage(
      good + neutral + bad && Math.round((good / (good + neutral + bad)) * 100)
    );
  }, [good, neutral, bad]);

  /*   const countTotalFeedback = () => {
    return good + neutral + bad;
  }; */

  /*   const countPositiveFeedbackPercentage = () => {
    return (
      good + neutral + bad && Math.round((good / (good + neutral + bad)) * 100)
    );
  }; */

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={FeedbackCount} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Wrapper>
  );
};
