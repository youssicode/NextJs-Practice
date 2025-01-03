import { getUsers } from "@/helpers/fetchData";
import { getSlug } from "@/helpers/getSlug";
import { userType } from "@/helpers/types";
import Link from "next/link"


export default async function Api() {
  const users: userType[] | [] = await getUsers()
  return (
    <main>
      <h1>API Page</h1>
      <ul>
        {users.map((user: userType) => (

          <li key={user.id}>
            {user.id}/
            <Link href={"articles/" + getSlug(user.name)} className="hover:text-blue-700">
              {user.name}
            </Link>
          </li>)
        )
        }
      </ul>
    </main>
  )
}