import React from 'react'
import { MdErrorOutline  } from 'react-icons/md' 

function ErrorMessage() {
  return (
    <div className="msg">
      <MdErrorOutline className="icon-error" />
      <span>Error!!!</span>
    </div>
  )
}

export default ErrorMessage