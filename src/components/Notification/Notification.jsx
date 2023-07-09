import PropTypes from 'prop-types';
import { NotificationContainer, NotificationText } from './Notification.styled';

export default function Notification({ message }) {
  return (
    <NotificationContainer>
      <NotificationText>{message}</NotificationText>
    </NotificationContainer>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
