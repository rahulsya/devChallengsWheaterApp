import React from 'react'

export default function Button({children,onClick,color,bgColor,borderRadius}) {
    return (
        <button className={`
        px-3 py-2 bg-${bgColor} 
        rounded-${borderRadius} 
        text-${color}

        `}
        onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps={
    bgColor:"gray-600",
    borderRadius:'sm',
    color:'white'
}
