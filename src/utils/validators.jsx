export const validateContactInputs = (contact) => {
  return Object.entries(contact).every(([key, value]) => {
    console.log(key, value)
    if (key === 'avatar') {
      return value instanceof File
    } else {
      return typeof value === 'string' && value.trim() !== ''
    }
  })
}
