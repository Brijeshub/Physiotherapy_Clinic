import React from "react"
import { Link } from "react-router-dom";

function BackTo(){
  return(
    <>
     <Link to="/" className="bg-green-400 p-3 shadow-lg shadow-slate-500">
        ← Home
      </Link>
    </>
  )
}
export default BackTo;