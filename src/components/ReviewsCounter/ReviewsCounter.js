// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ReviewsCounter.module.css';

export default class ReviewsCounter extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // static propTypes = {
  //   items: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     type: PropTypes.string.isRequired,
  //     amount: PropTypes.string.isRequired,
  //     currency: PropTypes.string.isRequired,
  //   }),
  // };

  state = {
    // good: 0, neutral: 0, bad: 0,
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

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className="ReviewsCounter">
        <h2 className="feedbackHeader">Please leave feedback</h2>
        <div className={s.CounterControls}>
          <button type="button" onClick={this.addFeedback}>
            Good
          </button>
          <button type="button" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.addFeedback}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good : {this.state.good}</p>
          </li>
          <li>
            <p>Neutral : {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad : {this.state.bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}
