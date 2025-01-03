import { getSlug } from "./getSlug"
import { userType } from "./types"

export async function getUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )
  return users
}

export const getUserPost = async (name: string) => {
  const users = await getUsers()
  return users.find((user: userType) => getSlug(user.name) === name)
}
