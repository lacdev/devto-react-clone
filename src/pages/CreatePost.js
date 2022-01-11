import React, {useState, useEffect} from 'react'

import NavBarCreate from 'components/NavBarCreate'
import BottomButtonsCreate from 'components/BottomButtonsCreate'
import CreateInputs from 'components/CreateInputs'
import { createPost } from '../services/posts'
import { generateRandomReactions } from 'utils/reactions'
import { getRandomAvatar} from 'utils/avatar'

function CreatePost() {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [reactions, setReaction] = useState(0);
    const [avatar, setAvatar] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        const post = async () => {
          try {
            setIsLoading(true)
            const response = await createPost()
            setIsLoading(false)
          } catch (error) {
            console.log(error)
            setIsError(true)
          }
        }
        post()
      }, [])
    
    if (!isLoading && isError) {
        return (
            <div>
              <h3 className="text-5xl font-bold text-indigo-700">
                Oops. There was an error <br></br>
              </h3>
              <h3 className="text-5xl font-bold mt-6 text-indigo-500">
                Try again later
              </h3>
            </div>
        )
    }

    const Publish = async (event) => {
        event.preventDefault();
        const date = new Date();
        const reactions = generateRandomReactions();
        const avatar = getRandomAvatar();
        const newTags = tags.map((tag) =>{
            return tag.value
        })
        
        try {
            const data = {
                name,
                title,
                imageURL,
                content,
                tags : newTags,
                reactions,
                avatar,
                date
            };
            console.log(data)
            await createPost(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const setValues = (event) => {
        event.preventDefault();
        const name = event.target.name
        const value = event.target.value

        switch (name) {
            case "name": setName(value);
                break;
            case "title": setTitle(value);
                break;
            case "imageURL": setImageURL(value);
                break;
            case "content": setContent(value);
                break;
            case "reactions": setReaction(value);
                break;
            case "avatar": setAvatar(value);
                break;
            default:
                break;
        }
    }

    const setTagValues = (tagOptions) => {
        setTags(tagOptions)
    }

    return (
        <div class="bg-[#efefef]">
            <NavBarCreate />
            <CreateInputs setTagValues={setTagValues} setValue={setValues} name={name} title={title} imageURL={imageURL} content={content} tags={tags} reactions={reactions} avatar={avatar}/>
            <BottomButtonsCreate onPublishClick={Publish} />
            
        </div>
    )
}

export default CreatePost
