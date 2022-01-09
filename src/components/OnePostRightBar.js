import React from 'react'
import { Columns } from 'components/Columns'
import { CommentSection } from './CommentSection'
import { ReadNext } from './ReadNext'

function OnePostRightBar() {
  const parent = 'grid row-end-2 h-max w-24 block mt-8 '
  const barbox = 'grid grid-cols-1 col-span-2 bg-slate-100 gap-x-6 fixed'
  const gridcol = 'grid gap-4 items-center inset-x-0 bottom-0 '
  const btnicon = 'flex-col items-center fill-black cursor-pointer'
  const btnhearthover =
    'flex mx-1 p-2 focus-visible hover:bg-red-200 hover:rounded-full hover:fill-red-700'
  const btnunicornhover =
    'flex mx-1 p-2 focus-visible hover:bg-cyan-100 hover:rounded-full hover:fill-cyan-300'
  const btnsavehover =
    'flex mx-1 p-2 focus-visible hover:bg-indigo-100 hover:rounded-full  hover:fill-indigo-600'
  const btnpointshover =
    'flex mx-1 p-2 focus-visible hover:bg-zinc-200 hover:rounded-full hover:fill-stone-500'
  const textspan = 'text-sm text-stone-600'

  return (
    <div className="bg-slate-100">
      <Columns>
        <aside className={parent}>
          <div className={barbox}>
            <div className={gridcol}>
              <button className={btnicon}>
                <span className={btnhearthover}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="crayons-icon"
                  >
                    <path d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"></path>
                  </svg>
                </span>

                <span className={textspan}> 9 </span>
              </button>
              <button className={btnicon}>
                <span className={btnunicornhover}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="crayons-icon"
                  >
                    <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157zM22.2 3.543l-8.579 3.68c-.332-.343-.615-.63-.76-.773-.527-.517.313-4.224-.409-4.439-.933-.277-5.042 4.624-4.696 7.953.224 2.735 2.193 4.89 1.72 8.412 3.446-.644 4.841 1.697 5.83 2.45 1.752 1.335 5.155-.551 3.807-3.582-.193-.435-2.05-4.732-2.931-6.775l6.619-5.94c.486-.44-.003-1.242-.601-.986zm-9.418 9.535a.828.828 0 01-.74-.9.825.825 0 01.81-.76c.479 0 .85.42.81.903a.824.824 0 01-.88.757z"></path>
                  </svg>
                </span>
                <span className={textspan}> 3 </span>
              </button>

              <button className={btnicon}>
                <span className={btnsavehover}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="crayons-icon"
                  >
                    <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"></path>
                  </svg>
                </span>

                <span className={textspan}> 5 </span>
              </button>
              <div className="relative text-center">
                <button className={btnicon}>
                  <span className={btnpointshover}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      aria-hidden="true"
                      class="dropdown-icon crayons-icon"
                    >
                      <title>More...</title>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </Columns>
      <Columns>
        <CommentSection />
        <ReadNext />
      </Columns>
      <Columns></Columns>
    </div>
  )
}

export { OnePostRightBar }
