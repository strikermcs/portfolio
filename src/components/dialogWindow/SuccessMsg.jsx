import React from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

function SuccessMsg() {
  return (
    <div className="msg">
        <IoIosCheckmarkCircleOutline className="icon-ok" />
        <span>Success!</span>      
    </div>
  )
}

export default SuccessMsg