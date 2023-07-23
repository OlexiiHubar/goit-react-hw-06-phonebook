import Contacts from './Contacts';
import SearchBox from './SearchBox';
import ContactForm from './ContactForm';

export function App() {
  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <Contacts />
    </div>
  );
}