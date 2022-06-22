import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Header from "../../components/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)
function Profile() {
  const { data: session } = useSession();

  console.log(session);
  
  return (
    <>
      <Header />
      <div className="relative mt-1 p-3 rounded-md">
        <img className="rounded-full" src={session?.user?.image} alt="" />
        <div className="items-center">
          <h2 className="font-bold text-lg">{session?.user?.username}</h2>
          <h3 className="text-sm text-gray-400">{session?.user?.email}</h3>
        </div>
      </div>
      <div className="items-center">
        <div className=" p-3">
          <p>5k followers</p>
          <p>2k following</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
