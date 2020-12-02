import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import s from './App.module.css';

export default class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  addFeedback = ({ target }) => {
    const updatingField = target.textContent.toLowerCase();
    this.setState(prevState => ({
      [updatingField]: prevState[updatingField] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el);

  countPositiveFeedbackPercentage = () =>
    Math.round(
      this.countTotalFeedback() &&
        this.state.good * (100 / this.countTotalFeedback()),
    );

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
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
        </Section>
      </div>
    );
  }
}
