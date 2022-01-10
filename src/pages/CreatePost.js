import React, {useState} from 'react'

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
