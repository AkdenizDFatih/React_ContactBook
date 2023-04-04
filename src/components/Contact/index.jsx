import { useState } from 'react'

import './styles.css'
import ContactForm from '../ContactForm/'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import { validateContactInputs } from '../../utils/validators'

const Contact = ({ data, setContacts }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [editContact, setEditContact] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleToggleDetails = () => {
    setShowDetails((prevState) => !prevState)
  }

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this contact?'
    )
    if (confirmed) {
      setContacts((prevContacts) =>
        prevContacts.filter((item) => item.id !== data.id)
      )
    }
  }

  const handleEdit = () => {
    setShowDetails(false)
    setEditContact(true)
  }

  const handleCancelEdit = () => {
    setEditContact(false)
    setShowDetails(true)
  }

  const handleSubmitEdit = (e, contact) => {
    e.preventDefault()
    const valid = validateContactInputs(contact)
    if (valid) {
      setContacts((prevState) =>
        prevState.map((item) => {
          return item.id === contact.id ? contact : item
        })
      )
      setErrorMessage('')
      setEditContact(false)
      setShowDetails(true)
    } else {
      setErrorMessage('All the fields need to be filled.')
    }
  }

  return (
    <>
      <div className="card contact-container">
        <header className="contact-header" onClick={handleToggleDetails}>
          <img src={data.avatar} alt="avatar" className="contact-avatar" />
          <p>{`${data.firstName} ${data.lastName}`}</p>
          <img src={showDetails ? ArrowUp : ArrowDown} alt="caret" />
        </header>

        {showDetails && (
          <div className="contact-details">
            <p>
              <span>Address:</span> {data.address}
            </p>
            <p>
              <span>Phone number:</span> {data.phone}
            </p>

            <div className="contact-buttons-container">
              <button
                type="button"
                className="btn-negative"
                onClick={handleDelete}
              >
                DELETE
              </button>
              <button type="button" onClick={handleEdit}>
                EDIT
              </button>
            </div>
          </div>
        )}
      </div>

      {editContact && (
        <ContactForm
          initialContact={data}
          handleCancel={handleCancelEdit}
          handleSubmit={handleSubmitEdit}
          errorMessage={errorMessage}
        />
      )}
    </>
  )
}

export default Contact
