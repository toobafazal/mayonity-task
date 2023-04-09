import React from 'react'

const Box = (Props) => {
  return (
    <>
        <div className='text-center my-2'>
        <span className='boxLabel'>{Props.label}</span>
        <div className='box'>{Props.value}</div>
        </div>
    </>
  )
}

export default Box