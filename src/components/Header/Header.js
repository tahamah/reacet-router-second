import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
            <nav className="bg-sky-500 mb-8 py-5 flex justify-center text-white  text-2xl">
                <CustomLink className="m-3" to="/">
                    Home
                </CustomLink>
                <CustomLink className="m-3" to="/friends">
                    Friends
                </CustomLink>
                <CustomLink className="m-3" to="/about">
                    About
                </CustomLink>
            </nav>
            <h1 className="text-4xl font-bold mb-5">
                {' '}
                Hello World! This is Header
            </h1>
        </div>
    )
}

export default Header
