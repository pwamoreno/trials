import { user } from "@/lib/data/user";
import Navbar from "@/components/devtutsComp/Navbar";

import Image from "next/image";
import Link from "next/link";

const SettingsPage = () => {
  return (
     <div className="mt-12 mx-12 max-md:mx-6">
      <div className="flex justify-between">
        <Image src="/next.svg" alt="logo" width={50} height={50} />
        <div className="flex items-center">
          {/* <p>Welcome {user.name}!</p> */}
          <div className="border border-slate-200 rounded-full p-4 bg-slate-100 overflow-hidden relative">
            <Link href="/devtuts/profile">
              <Image
                src={user.userIcon}
                alt="user icon"
                fill
                className="object-cover"
              />
            </Link>
          </div>
          <p className="ml-4">
            Welcome <strong>{user.username}!</strong>
          </p>
        </div>
      </div>

      <Navbar />
    </div>
  )
}

export default SettingsPage