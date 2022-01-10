import React from 'react'


function CreateInputs({name,title, imageURL, content, tags, reactions, avatar, setValue}) {

    return (
        <div class="flex justify-center">
            <div class="flex-column w-1/2 rounded-lg border py-8 px-16 bg-white text-[#090909]  ">
                <div>
                    <input class="text-lg" type="text" placeholder='Add your username' name="name" value={name} onChange={setValue}></input>
                </div>
                <div>
                    <input class="text-lg" type="text" placeholder='Add a cover image URL' name="imageURL" value={imageURL} onChange={setValue}></input>
                </div>
                <div>
                    <input class= "text-[48px] font-bold" type="text" placeholder='New post title here...' name="title" value={title} onChange={setValue}></input>
                </div>
                <div>
                <select id = "tag-selector" class="selectpicker" multiple aria-label="size 3 select example" placeholder = "Add up to four tags">
                      <option value="Javascript">Javascript</option>
                      <option value="ReactJS">ReactJS</option>
                      <option value="HTML">HTML</option>
                      <option value="Sass">Sass</option>
                      <option value="WebDev">WebDev</option>
                      <option value="Programming">Programming</option>
                      <option value="CSS">CSS</option>
                      <option value="Node">Node</option>
                      <option value="Java">Java</option>
                      <option value="AWS">AWS</option>
                      <option value="Php">Php</option>
                      <option value="Linux">Linux</option>
                    </select>
                </div>
                <div>
                    <textarea class="resize rounded-md text-lg min-h-[620px] min-w-full" type="text" placeholder='Write you post content here...' name="content" value={content} onChange={setValue}></textarea>
                </div>
            </div>

        </div>
        
    )
}

export default CreateInputs
