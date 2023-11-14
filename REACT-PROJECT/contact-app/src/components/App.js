import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  //const [contacts, setContacts] = useState([]); 

  // Initialize the state with data from local storage or an empty array
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const addContactHandler = (contact) => {
    // Update the state and add the new contact
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: uuid(), ...contact },
    ]);
  };

  //const addContactHandler = (contact) => {
    //console.log(contact);
    //setContacts([...contacts, { id: uuid(), ...contact }]);
 // };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    // Retrieve contacts from localStorage when the component mounts
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    // Save contacts to localStorage whenever the 'contacts' state changes
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} /> 
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} /> 
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />
           {/* <Route path="/contact/:id" element={<ContactDetail />} />  */}
        </Routes>
  {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        
      </Router>
    </div>
  );
}
export default App;
