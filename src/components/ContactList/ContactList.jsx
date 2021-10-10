import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from 'components/redux/contacts/contacts-action';
import s from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactItem} key={id}>
          <p className={s.itemName}>Name: {name}</p>
          <p className={s.itemName}>Number: {number}</p>
          <button className={s.deleteBtn} type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
