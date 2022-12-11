import { Box } from './Box';
import { Feedback } from './Feedback';
import React, { Component } from 'react';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = (positive, total) =>
    Math.round((positive / total) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    const options = Object.keys(this.state);

    return (
      <Box
        display="grid"
        alignItems="center"
        justifyContent="center"
        bg="primary"
        p={5}
      >
        <Feedback
          title="Please Leave feedback"
          options={options}
          onClick={this.handleClick}
        />
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Box>
    );
  }
}
