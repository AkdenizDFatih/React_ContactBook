import { useState } from 'react'

import './styles.css'
import Contact from '../Contact'
import AddContact from '../AddContact'

const ContactBook = () => {
  const [contacts, setContacts] = useState([])

  return (
    <main className="contact-book-container">
      <AddContact setContacts={setContacts} />

      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} data={contact} setContacts={setContacts} />
        )
      })}
    </main>
  )
}

export default ContactBook
