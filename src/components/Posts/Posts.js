import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl pt-10 pb-5 mt-20 font-medium">
                Every Posts Facebook ever had: {posts.length}
            </h1>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <Link
                        className="bg-sky-500 m-4 py-3 px-5  text-white rounded hover:bg-sky-800 "
                        key={post.id}
                        to={`/posts/${post.id}`}
                    >
                        {post.id}
                    </Link>
                ))}
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Posts
