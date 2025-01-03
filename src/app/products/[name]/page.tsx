import { getUserPost } from '@/helpers/fetchData'
import React from 'react'

const product = async ({ params }: { params: { name: string } }) => {
    const post = await getUserPost(params.name)
    console.log(post);

    return (
        <>
            <h1>This {post?.name} Post!</h1>
            <ul>
                <li>Id = {post?.id}</li>
                <li>Name = {post?.name}</li>
                <li>Email = {post?.email}</li>
            </ul>
        </>

    )
}

export default product