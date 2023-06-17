import { Component } from 'react';

import Section from './Section ';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

import style from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    const percent = total > 0 ? Math.round((good / total) * 100) : 0;
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className={style.app}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[good, neutral, bad]}
            onLeavelFeedback={this.handleFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={positiveFeedback}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}

          {/* <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positiveFeedback={positiveFeedback}
          ></Statistics> */}
        </Section>
        {/* <Section>
          <Notification message="There is no feedback"></Notification>
        </Section> */}
      </div>
    );
  }
}

export default App;
