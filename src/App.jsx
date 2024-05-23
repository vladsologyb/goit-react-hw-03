import { useState, useEffect } from 'react'
import ContactForm from './components/contactForm/ContactForm'
import SearchBox from './components/searchBox/SearchBox'
import ContactsList from './components/contactList/ContactList'
import initalContacts from './contacts.json'
import './App.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    const newContact = window.localStorage.getItem("newContact");
    console.log(newContact)
   if (newContact !== null) {
    const parsedContacts = JSON.parse(newContact);
    if (Array.isArray(parsedContacts)) {
        return parsedContacts;
    } else {
        
        return [];
    }
}
    return initalContacts;
})
 const [filter, setFilter] = useState('')

 
  const AddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact])
    
  }

  const DeleteContact = (Id) => {
    setContacts((prevContacts)=>{
    return prevContacts.filter((contact)=>contact.id !==Id)
  })
  }
   useEffect(() => {
    window.localStorage.setItem("newContact", JSON.stringify(contacts));

   }, [contacts]);
  
  const filteredContacts = contacts.filter((contact)=>contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContact}></ContactForm>
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactsList contacts={filteredContacts} onDelete={DeleteContact}></ContactsList>
    </>
  )
}

export default App
