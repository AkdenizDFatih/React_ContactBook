export const validateContactInputs = (contact) => {
  return Object.values(contact).every((value) => {
    return typeof value === 'string' && value.trim() !== ''
  })
}
