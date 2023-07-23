import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/redux/contacts/contactsSlice';
import css from './DeleteButton.module.css';

export default function DeleteButton({ id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <button className={css.delButton} type="button" id={id} onClick={onDelete}>
      Delete
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};