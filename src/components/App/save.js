import { Component } from 'react';

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
    const totalFeedback = this.countTotalFeedback();

    const percent =
      totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <b>Please leavel feedback</b>

        <div>
          <button onClick={() => this.handleFeedback('good')}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
        </div>

        {/* <div>
          {options.map(option => (
            <button key={option} onClick={() => this.handleFeedback('good')}>
              {option}
            </button>
          ))}
        </div> */} {/* замена коду вышу с button */}

        <div>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
        </div>

        <span>Всего {positiveFeedback}%</span>
      </div>
    );
  }
}

export default App;
