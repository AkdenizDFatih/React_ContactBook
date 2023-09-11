export const validateContactInputs = (contact, intitalData) => {
  return Object.entries(contact).every(([key, value]) => {
    // Check whether the value change with the input or there is no initial data. If there is no intialData it means that it is a new contact. 
    // If no additions were identified, return the same value. 
    if (!intitalData || value !==intitalData[key]) {
      if (key === 'avatar') {
        return value instanceof File
      } else {
        // if input is string and is empty or value and is bigger than 0 (since the typeof if is number)
        return (typeof value === 'string' &&  value.trim() !== '')  || ( typeof value === 'number' && value >= 0)
      }
    }
    else {
      if (key === 'avatar') {
        return value
      } else {
        return true
      }
    }
  })
}
