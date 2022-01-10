import React, {Component} from 'react'
import Select from 'react-select'
import Selector from './Selector'


function CreateInputs({name,title, imageURL, content, tags, reactions, avatar, setValue}) {
    // const options = [
    //     {value:"Javascript", label:"Javascript"},
    //     {value:"ReactJS", label:"ReactJS"},
    //     {value:"HTML", label:"HTML"},
    //     {value:"Sass", label:"Sass"},
    //     {value:"WebDev", label:"WebDev"},
    //     {value:"Programming", label:"Programming"},
    //     {value:"CSS", label:"CSS"},
    //     {value:"Node", label:"Node"},
    //     {value:"Java", label:"Java"},
    //     {value:"AWS", label:"AWS"},
    //     {value:"Phyton", label:"Phyton"},
    //     {value:"Linux", label:"Linux"},
    // ]

    return (
        <div class="flex justify-center">
            <div class="flex-column w-1/2 rounded-lg border py-8 px-16 bg-white text-[#090909]  ">
                <div>
                    <input class="text-[36px] w-1/2 font-semibold mt-4" type="text" placeholder='Add your username' name="name" value={name} onChange={setValue}></input>
                </div>
                <div>
                    <input class="text-[40px] w-3/4 font-semibold mt-4" type="text" placeholder='Add a cover image URL' name="imageURL" value={imageURL} onChange={setValue}></input>
                </div>
                <div>
                    <input class= "text-[48px] w-full font-bold mt-4" type="text" placeholder='New post title here...' name="title" value={title} onChange={setValue}></input>
                </div>
                {/* <div class="text-xl mt-4">
                    <Select isMulti name="tags" options={options} className="basic-multi-select" classNamePrefix="select" placeholder="Select up to four tags..."/>
                </div> */}
                    <Selector/>
                <div>
                    <textarea class="resize rounded-md text-xl min-h-[600px] min-w-full mt-10" type="text" placeholder='Write you post content here...' name="content" value={content} onChange={setValue}></textarea>
                </div>
            </div>

        </div>
        
    )
}

export default CreateInputs
