import { useDispatch, useSelector } from 'react-redux';

import { getFilter, filterContacts } from 'redux/redux/filter/filterSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}