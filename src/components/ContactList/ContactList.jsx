import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../redux/contacts/contacts-selector';
import { deleteContact } from 'components/redux/contacts/contacts-action';
import s from 'components/ContactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactItem} key={id}>
          <p className={s.itemName}>Name: {name}</p>
          <p className={s.itemName}>Number: {number}</p>
          <button className={s.deleteBtn} type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
