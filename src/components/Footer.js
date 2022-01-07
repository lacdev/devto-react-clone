import React from 'react'

function Footer() {
  const parent = 'container min-w-full h-auto p-12 bg-zinc-300 text-center'
  const confoot = 'flex flex-col justify-center'
  const textdecoration = 'font-medium text-indigo-600 '
  const textdecoration2 = 'text-indigo-600'
  const foottext = 'text-sm m-2'
  const footicon = 'relative p-2 self-center'
  return (
    <footer className={parent}>
      <div className={confoot}>
        <p className={foottext}>
          {' '}
          <label className={textdecoration}> DEV Community </label> — A
          constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>

        <div>
          <p className={foottext}>
            {' '}
            Built on
            <label className={textdecoration2}> Forem</label>— the
            <label className={textdecoration2}> open source </label>
            software that powers
            <label className={textdecoration2}> DEV </label>
            and other inclusive communities.
          </p>
          <p className={foottext}>
            {' '}
            Made with love and
            <label className={textdecoration2}> Ruby on Rails. </label>
            DEV Community © 2016 - 2022.
          </p>
        </div>
        <div className={footicon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            role="img"
            aria-labelledby="a1oq2bptut6uiiuiq4gvwodxfo8gicqz"
            class="c-link__icon crayons-icon crayons-icon--default"
          >
            <title id="a1oq2bptut6uiiuiq4gvwodxfo8gicqz">Forem logo</title>
            <g clip-path="url(#clip0)" fill="#1AB3A6">
              <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h24v24H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
