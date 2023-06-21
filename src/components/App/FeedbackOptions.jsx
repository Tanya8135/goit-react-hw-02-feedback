import PropTypes from 'prop-types';

import style from './App.module.css';

const FeedbackOptions = ({ onLeavelFeedback }) => {
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

FeedbackOptions.propTypes = {
  onLeavelFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
