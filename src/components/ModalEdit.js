import React, { useState, useEffect } from 'react'
import { getPost, updatePost } from 'services/posts'
import { useParams } from 'react-router-dom'

function ModalEdit() {
  const classes = {
    btn: 'bg-blue-500 rounded-lg m-2 p-2 w-28 text-white font-bold h-26 hover:bg-blue-400 hover:font-bold',
    modalcontainer:
      'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none',
    modalposition: 'relative w-auto my-6 mx-auto max-w-sm',
    modalheader:
      'border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none',
    modalfix:
      'flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t',
    modaltitle: 'text-3xl font-semibold',
    btncancel:
      'p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none',
    modalspan:
      'bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none',
    modalbodyposition: 'relative p-6 flex-auto',
    modalbody: 'my-4 text-blueGray-500 text-lg leading-relaxed',
    modalfooter:
      'flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b',
    closebtn:
      'text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
    savebtn:
      'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
    modalend: 'opacity-25 fixed inset-0 z-40 bg-black',
  }

  const [modal, setModal] = useState(false)
  const [imagenURL, setImagenURL] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [name, setName] = useState('')
  const [tags, setTags] = useState('')
  const [date, setDate] = useState('')

  const params = useParams()

  useEffect(() => {
    const get = async () => {
      const { name, title, imagenURL, content, tags, date } = await getPost(
        params.postId
      )
      setName(name)
      setTags(tags)
      setDate(date)
      setImagenURL(imagenURL)
      setTitle(title)
      setContent(content)
    }
    get()
  }, [params.postId])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      // name,
      title,
      imageURL: imagenURL,
      content,
      // tags,
      // date,
    }
    console.log(data)
    await updatePost(params.postId, data)
    console.log('Si imprime')
  }
  return (
    <>
      <button
        className={classes.btn}
        type="button"
        onClick={() => setModal(true)}
      >
        {' '}
        Editar{' '}
      </button>
      {modal ? (
        <>
          <div className={classes.modalcontainer}>
            <div className={classes.modalposition}>
              {/*content*/}
              <div className={classes.modalheader}>
                {/*header*/}
                <div className={classes.modalfix}>
                  <h3 className={classes.modaltitle}>Edita tu Post</h3>
                  <button
                    className={classes.modalbtncancel}
                    onClick={() => setModal(false)}
                  >
                    <span className={classes.modalspan}>×</span>
                  </button>
                </div>
                {/*body*/}
                <form className={classes.modalbodyposition}>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-6">
                      <label
                        for="imagenURL"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reemplaza la Imagen
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          type="url"
                          id="imagenURL"
                          value={imagenURL}
                          onChange={(event) => setImagenURL(event.target.value)}
                          name="imagenURL"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <label
                        for="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Modifica el Titulo
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        for="content"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Revisa el contenido
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="content"
                          value={content}
                          onChange={(event) => setContent(event.target.value)}
                          rows="3"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className={classes.modalfooter}>
                  <button
                    className={classes.closebtn}
                    type="button"
                    onClick={() => setModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className={classes.savebtn}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.modalend}></div>
        </>
      ) : null}
    </>
  )
}

export default ModalEdit
