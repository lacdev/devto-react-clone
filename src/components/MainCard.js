import { formatDate, formatCreationDate } from 'utils/date'
import { generateRandomName } from 'utils/faker'

const MainCard = () => {
  return (
    <div className="rounded-lg border w-full bg-white">
      <div className="rounded-lg">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Vuq-somU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1tah8m0zqe11xt7zknl5.png"
          alt="dev"
        ></img>
      </div>
      <div className="p-6 shadow-sm">
        <h1 className="mt-4">{generateRandomName()}</h1>
        <h3>
          {`${formatCreationDate(new Date())} (${formatDate(
            new Date(2022, 0, 1, 0, 0, 15)
          )})`}
        </h3>
      </div>
    </div>
  )
}

export { MainCard }
