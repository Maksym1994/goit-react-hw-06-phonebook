import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../redux/contacts/contacts-action';
import s from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h3 className={s.titleFilter}>Find contacts by name</h3>
      <input className={s.inputFilter} type="text" value={value} onChange={onChange} />
    </>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
