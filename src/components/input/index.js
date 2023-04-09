import React from 'react'
import '../../styles/style.css'

const Input = (Props) => {
  return (
    <>
       <label>{Props.label}</label> 
       <input
        type={Props.type}
       />
    </>
  )
}

export default Input