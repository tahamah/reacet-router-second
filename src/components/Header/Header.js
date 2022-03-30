import React from 'react'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div className="relative">
            <nav className="bg-sky-500 py-5 fixed top-0 w-full flex justify-center text-white  text-2xl">
                <CustomLink className="m-3" to="/">
                    Home
                </CustomLink>
                <CustomLink className="m-3" to="/friends">
                    Friends
                </CustomLink>
                <CustomLink className="m-3" to="/posts">
                    Posts
                </CustomLink>
                <CustomLink className="m-3" to="/about">
                    About
                </CustomLink>
            </nav>
            {/* <div>
                <h1 className="text-4xl font-bold py-5 mt-20">
                    {' '}
                    Hello World! This is Header
                </h1>
            </div> */}
        </div>
    )
}

export default Header
