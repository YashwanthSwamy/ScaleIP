import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius, icon}) => {
  return (
    <button
    type='button'
    style={{background: bgColor, color, borderRadius}}
    className={`text-${size} flex gap-1 items-center justify-center p-3 hower:drop-shadow-xl `}
    >
      {text} {icon}
    </button>
  )
}

export default Button