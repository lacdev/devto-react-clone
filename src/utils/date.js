import { format, formatDistance } from 'date-fns'

const formatDate = (date) => {
  const presentDay = new Date()

  const formattedDate = formatDistance(date, presentDay, { addSuffix: true })
  return formattedDate
}

const formatCreationDate = (date) => {
  const formattedDate = format(date, 'MMM d')
  return formattedDate
}

export { formatDate, formatCreationDate }
