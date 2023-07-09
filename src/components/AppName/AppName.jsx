import PropTypes from 'prop-types';
import { AppTitle } from './AppName.styled';

export default function AppName({ title }) {
  return <>{title && <AppTitle>{title}</AppTitle>}</>;
}

AppName.propTypes = {
  title: PropTypes.string,
};
