import { useContext } from "react";
import { UserContext } from "../context/userContext";
import React from 'react'

function Dashboard() {

  const {user} = useContext(UserContext)

  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hii {user.name}</h2>)}

        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default Dashboard