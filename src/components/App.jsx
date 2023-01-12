import { useState } from 'react';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

const feedbackList = [
  { id: 'good', title: 'Good' },
  { id: 'neutral', title: 'Neutral' },
  { id: 'bad', title: 'Bad' },
];

export function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = evt => {
    const { name } = evt.target;
    setFeedbacks(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedbacks).reduce((acc, el) => acc + el, 0);
    return values;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalValue = countTotalFeedback();
    const positivValue = (feedbacks.good * 100) / totalValue;

    return Math.round(positivValue);
  };

  const totalValue = countTotalFeedback();
  const positivValue = countPositiveFeedbackPercentage();

  return (
    <Box px={20}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbackList} onLeaveFeedback={handleClick} />
      </Section>

      {totalValue ? (
        <Section title="Statistics">
          <Statistics
            options={feedbackList}
            feedbacks={feedbacks}
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
