import React, {useEffect, useState} from 'react'
import { formatDate, formatCreationDate } from 'utils/dates'
import {useParams} from 'react-router-dom'
import {getPost} from 'services/posts'

function OnePost({name , title, imageURL, content, tags}) {
    let params = useParams();
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
          get()
        
    }, [])
    

    

    const classes = {
        tagLink:
          'text-xs mr-1 px-2 py-1 border rounded-lg border-white hover:border-gray-400 hover:bg-gray-100',
        commentsButtons:
          'px-2 py-1 mr-3 text-sm rounded-md hover:bg-gray-100 bg-white hover:font-base',
      }
    return (
   <div>
             <div className="rounded-lg border w-full bg-white shadow-sm mb-4">
                 <div className="rounded-lg">
                     <img alt="dev" src={renderData?.imageURL}></img>
                 </div>
             </div>
            <h2 className="font-semibold text-base">{renderData?.name}</h2>
              <h3 className="text-gray-600 text-sm"> Posted on 
                 {`${formatCreationDate(new Date())} (${formatDate(
                  new Date(2022, 0, 1, 0, 0, 15))})`}
              </h3>
            <h1 className="font-bold text-3xl mt-2 cursor-pointer hover:text-indigo-700 mb-2"> {title}</h1>
            <div className="flex">
            <a href="/#" className={classes.tagLink}>{tags}</a>
                </div>
            <p className='text-lg break-words'>{renderData?.content}</p>
   </div>
       
    
    )
}

export default OnePost
