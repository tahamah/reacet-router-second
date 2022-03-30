import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [postId])
    const { title } = post

    return (
        <div>
            <h1>Hello Ulcle Ami bachilor: {postId}</h1>
            <p>Title: {title}</p>
        </div>
    )
}

export default PostDetail
