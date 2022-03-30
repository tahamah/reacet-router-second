import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="bg-sky-500 mb-8 py-5 text-white text-2xl">
                <Link className="m-3" to="/">
                    Home
                </Link>
                <Link className="m-3" to="/friends">
                    Friends
                </Link>
                <Link className="m-3" to="/about">
                    About
                </Link>
            </nav>
            <h1 className="text-4xl font-bold mb-5">
                {' '}
                Hello World! This is Header
            </h1>
        </div>
    )
}

export default Header
