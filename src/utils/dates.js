import { format, formatDistance } from 'date-fns'

const formatDate = (date) =>
  formatDistance(date, new Date(), { addSuffix: true })

const formatCreationDate = (date) => format(date, 'MMM d')

export { formatDate, formatCreationDate }
