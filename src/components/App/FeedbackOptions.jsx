import style from './App.module.css';

const FeedbackOptions = ({ options, onLeavelFeedback }) => {
  return (
    <div>
      <button className={style.btn} onClick={() => onLeavelFeedback('good')}>
        Good
      </button>
      <button className={style.btn} onClick={() => onLeavelFeedback('neutral')}>
        Neutral
      </button>
      <button className={style.btn} onClick={() => onLeavelFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
