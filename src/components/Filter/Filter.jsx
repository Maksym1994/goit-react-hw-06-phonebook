import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/contacts/contacts-selector';
import { changeFilter } from '../redux/contacts/contacts-action';
import s from 'components/Filter/Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <h3 className={s.titleFilter}>Find contacts by name</h3>
      <input className={s.inputFilter} type="text" value={value} onChange={onChange} />
    </>
  );
};

export default Filter;
