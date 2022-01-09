import React from 'react'

function NavBarCreate() {
    return (
        <div class="flex ml-80">
            <div class="flex justify-between w-1/2">
                <div class="inline-flex items-center">
                    <div>
                        <a href="/" class="site-logo" aria-label="DEV Community Home">
                        <img
                        className="w-14 h-14 ml-4"
                        src="https://www.vectorlogo.zone/logos/devto/devto-icon.svg"
                        alt="dev-logo"
                        ></img>
                        </a>
                    </div>
                    <div class="ml-2 font-semibold">Create Post
                    </div>
                </div>
                <div class="inline-flex mt-4">
                    <span class="mr-4 font-semibold underline underline-offset-4">Edit</span>
                    <span>Preview</span>
                </div>
            </div>
        </div>
    )
}

export default NavBarCreate
