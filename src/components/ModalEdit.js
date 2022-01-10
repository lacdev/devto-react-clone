import React,{useState}from 'react'

function ModalEdit() {
    const classes = {
      btn : 'bg-blue-500 rounded-lg m-2 p-2 w-28 h-26 hover:bg-blue-400 hover:font-bold',
      modalcontainer: 'justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none',
      modalposition: 'relative w-auto my-6 mx-auto max-w-3xl',
      modalheader:'border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none',
      modalfix: 'flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t',
      modaltitle:'text-3xl font-semibold',
      btncancel:'p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none',
      modalspan:'bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none',
      modalbodyposition: 'elative p-6 flex-auto',
      modalbody:'my-4 text-blueGray-500 text-lg leading-relaxed',
      modalfooter: 'flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b',
      closebtn:'text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
      savebtn:'bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150',
      modalend:'opacity-25 fixed inset-0 z-40 bg-black'      
    }

    const [Modal, setModal] = useState(false)
    return (
        <>
        <button
          className={classes.btn}
          type="button" onClick={() => setModal(true)} > Editar </button>
        {Modal ? (
          <>
            <div className={classes.modalcontainer} >
              <div className={classes.modalposition} >
                {/*content*/}
                <div className={classes.modalheader} >
                  {/*header*/}
                  <div className={classes.modalfix} >
                    <h3 className={classes.modaltitle} >
                      Edita tu Post
                    </h3>
                    <button
                      className={classes.modalbtncancel}
                      onClick={() => setModal(false)}
                    >
                      <span className={classes.modalspan} >
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className={classes.modalbodyposition} >
   <p className={classes.modalbody} >
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className={classes.modalfooter} >
                    <button
                      className={classes.closebtn}
                      type="button"
                      onClick={() => setModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className={classes.savebtn}
                      type="button"
                      onClick={() => setModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
           </div>
            <div className={classes.modalend} ></div>
          </>
        ) : null}
      </>
    );
  }
  
export default ModalEdit
