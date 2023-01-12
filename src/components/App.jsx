import { useState } from 'react';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    const key = evt.target.textContent;

    switch (key) {
      case 'Good':
        setGood(prev => prev + 1);
        break;

      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'Bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const totalValue = countTotalFeedback();
    const positivValue = (good * 100) / totalValue;

    return Math.round(positivValue);
  };

  const totalValue = countTotalFeedback();
  const positivValue = countPositiveFeedbackPercentage();

  return (
    <Box px={20}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      {totalValue ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalValue}
            positivePercentage={positivValue}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Box>
  );
}
