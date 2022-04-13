import React from 'react'
import cn from 'classnames'

const Button = ({ text, type, className, onClickFun }) => {
    return (
        <button
            onClick={onClickFun}
            className={cn(
                `m-4  p-4 text-sm rounded-lg text-white`,
                type === 'main' ? 'bg-main' : 'bg-black ',
                className
            )}
        >
            {text}
        </button>
    )
}

export default Button
