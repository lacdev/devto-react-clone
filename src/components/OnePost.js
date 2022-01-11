import React, { useEffect, useState } from 'react'
import { formatCreationDate } from 'utils/dates'
import { useParams } from 'react-router-dom'
import { getPost } from 'services/posts'
import ModalEdit from './ModalEdit'
import ModalDelete from './ModalDelete'
function OnePost({ name, title, imageURL, content, tags }) {
  let params = useParams()
  console.log(params)

  const [renderData, setRenderData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(true)
  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true)
        const response = await getPost(params.postId)
        console.log(response)
        console.log(response.data)
        setRenderData(response.data.posts)
        console.log(renderData)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
    }
    get();
  }, []);

  const classes = {
    tagLink:
      'text-xs mr-1 px-2 py-1 border rounded-lg  text-center border-white hover:border-gray-400 hover:bg-gray-100',
    commentsButtons:
      'px-2 py-1 mr-3 text-sm rounded-md hover:bg-gray-100 bg-white hover:font-base',
    avatarImage: 'w-16 h-16 mx-4 rounded-full cursor-pointer',
    userName: 'font-semibold text-base',
  }
  return (
    <div className="bg-white pb-3 w-auto h-auto">
      <div className="rounded-lg border w-full bg-white shadow-sm mb-4">
        <div className="rounded-lg">
          <img alt="dev" src={renderData?.imageURL}></img>
        </div>
      </div>
      <div className="p-4 flex">
        <div className={classes.avatarImage}>
          <img
            className="rounded-full"
            src={renderData?.avatar}
            alt="linus"
          ></img>
        </div>
        <div className="flex flex-col">
          <h2 className={classes.userName}>{renderData?.name}</h2>
          <h3 className="text-gray-600 text-sm">
            {' '}
            {`Posted on ${formatCreationDate(renderData?.date)}`}
          </h3>
        </div>
      </div>

      <div className="p-10">
        <h1 className="font-bold text-3xl mt-2 cursor-pointer hover:text-indigo-700 mb-2 text-center">
          {' '}
          {renderData?.title}
        </h1>
        <div className="flex">
          {renderData?.tags?.map((tag) => {
            return (
              <a href="#/" className={classes.tagLink}>
                {`#${tag}`}
              </a>
            )
          })}
        </div>
        <p className="text-lg break-words text-justify">
          {renderData?.content}
        </p>
      </div>

      <div className="flex m-3 px-1 py-2 place-content-end">
        <ModalEdit />
         <ModalDelete/>
      </div>
    </div>
  )
}

export default OnePost
