import React, { Component } from 'react';
import { Box } from './Box';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const key = e.target.textContent;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalValue = this.countTotalFeedback();
    const positivValue = (good * 100) / totalValue;

    return Math.round(positivValue);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalValue = this.countTotalFeedback();
    const positivValue = this.countPositiveFeedbackPercentage();

    return (
      <Box px={20}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
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
}
