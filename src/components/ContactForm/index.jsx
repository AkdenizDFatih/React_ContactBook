import { useState } from 'react'

import './styles.css'

const emptyContact = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  avatar: null,
}

const ContactForm = ({
  initialContact,
  handleCancel,
  handleSubmit,
  errorMessage,
}) => {
  const [contact, setContact] = useState(initialContact || emptyContact)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'avatar') {
      setContact((prevState) => ({
        ...prevState,
        avatar: e.target.files[0],
      }))
    } else {
      setContact((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  return (
    <form
      className="card contact-form"
      onSubmit={(e) => handleSubmit(e, contact)}
    >
      <label>
        First name:{' '}
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last name:{' '}
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Address:{' '}
        <input
          type="text"
          name="address"
          value={contact.address}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone number:{' '}
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />
      </label>

      <div className="contact-form-avatar-container">
        <label className="contact-form-avatar">
          Choose Avatar
          <input
            className="visually-hidden"
            type="file"
            name="avatar"
            accept="image/jpeg, image/png"
            onChange={handleChange}
          />
        </label>
        {contact.avatar && (
          <span className="contact-form-avatar-name">
            {contact.avatar.name}
          </span>
        )}
      </div>

      {errorMessage && (
        <small className="contact-form-error-message">{errorMessage}</small>
      )}

      <div className="contact-form-buttons">
        <button className="btn-negative" type="button" onClick={handleCancel}>
          CANCEL
        </button>
        <button className="btn-positive" type="submit">
          SAVE
        </button>
      </div>
    </form>
  )
}

export default ContactForm
