import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import s from 'App.module.css';

function App() {
  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2 className={s.title}>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default App;
