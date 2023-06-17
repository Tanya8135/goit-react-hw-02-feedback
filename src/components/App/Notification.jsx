import style from './App.module.css';

const Notification = ({ message }) => {
  return <p className={style.message}>{message}</p>;
};

export default Notification;
