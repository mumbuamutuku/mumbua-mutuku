import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState([]); 
  return (
    <><Header />
    <AddContact />
   <ContactList contacts={contacts}/> 
   </>
  );
}
export default App;
