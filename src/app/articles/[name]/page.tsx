import { getUsers } from '@/helpers/fetchData'
import { getSlug } from '@/helpers/getSlug'
import { userType } from '@/helpers/types'
import React from 'react'

const getUserPost = async (name: string) => {
  const users = await getUsers()
  return users.find((user: userType) => getSlug(user.name) === name)
}

const article = async ({ params }: { params: { name: string } }) => {
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

export default article