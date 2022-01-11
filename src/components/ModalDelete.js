import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, deletePost } from 'services/posts'

function ModalDelete() {
  const classes = {
    btn: 'bg-red-500 rounded-lg m-2 p-2 w-28 text-white font-bold h-26 hover:bg--400 hover:font-bold',
    modalcontainer:
      'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none',
    modalposition: 'relative w-auto my-6 mx-auto max-w-3xl',
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
  const [Modal, setModal] = useState(false)
  const [post, setPost] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const get = async () => {
      const response = await getPost(params.postId)
      console.log(response)
      setPost(response)
    }
    get()
  }, [params.postId])

  const handleDelete = async () => {
    console.error('eliminado')
    await deletePost(params.postId)
    navigate('/')
  }

  return (
    <>
      <button
        className={classes.btn}
        type="button"
        onClick={() => setModal(true)}
      >
        {' '}
        Eliminar{' '}
      </button>
      {Modal ? (
        <>
          <div className={classes.modalcontainer}>
            <div className={classes.modalposition}>
              {/*content*/}
              <div className={classes.modalheader}>
                {/*header*/}
                <div className={classes.modalfix}>
                  <h3 className={classes.modaltitle}>
                    ¿Estas seguro de Eliminar el Post?
                  </h3>
                  <button
                    className={classes.modalbtncancel}
                    onClick={() => setModal(false)}
                  >
                    <span className={classes.modalspan}>×</span>
                  </button>
                </div>
                {/*body*/}
                <div className={classes.modalbodyposition}>
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      class="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                </div>
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
                    type="button"
                    onClick={handleDelete}
                  >
                    Eliminar
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

export default ModalDelete
