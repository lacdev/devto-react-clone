import faker from 'faker'

const generateRandomName = () => {
  let firstName = faker.name.firstName()
  let lastName = faker.name.lastName()

  return `${firstName} ${lastName}`
}

export { generateRandomName }
