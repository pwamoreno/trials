import { user } from "@/lib/data/user"

const UserProfile = () => {
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.occupation}</h1>
    </div>
  )
}

export default UserProfile