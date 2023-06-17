const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul>
      <li>
        <span>Good: {good}</span>
      </li>
      <li>
        <span>Neutral: {neutral}</span>
      </li>
      <li>
        <span>Bad: {bad}</span>
      </li>
      <li>
        <span>Total: {total}</span>
      </li>
      <li>
        <span>Positive feedback:</span>
        <span> {positiveFeedback}%</span>
      </li>
    </ul>
  );
};

export default Statistics;
