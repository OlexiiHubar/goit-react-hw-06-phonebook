import css from './ValidateWarning.module.css';
import PropTypes from 'prop-types';

export default function ValidateWarning({ text }) {
  return <div className={css.warning}>{text}</div>;
}

ValidateWarning.propTypes = {
  text: PropTypes.string,
};