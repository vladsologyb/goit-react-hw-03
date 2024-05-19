import { useState } from 'react'
import ContactForm from './components/contactForm/ContactForm'
import initalContacs from './contacts.json'
import './App.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('current-contacts')
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return initalContacs
  })

   useEffect(() => {
    localStorage.setItem('current-contact', JSON.stringify(contacts));
   }, [clicks]);
  
   const addContact = (newContact) => {
    setContacts((prevContacts) => {
        newContact.id = nanoid()
        return [...prevContacts, newContact]
      });
   };
  
  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== id)
    })
  };
  
  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  {/* <SearchBox />
  <ContactList /> */}
</div>
    </>
  )
}

export default App
