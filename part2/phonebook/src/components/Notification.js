import styles from './Notification.module.css';

const Notification = ({ message }) =>
  message ? <div className={styles.notification}>{message}</div> : null;

export default Notification;
