import React from 'react'
import cn from 'classnames'

const Popup = ({ children, size }) => {
    return (
        <div className="z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 w-full h-full">
            <div
                className={cn(
                    'animate-showUp rounded-md warning-content w-4/5 h-4/5 max-h-80 max-w-md bg-white flex justify-center items-center flex-col',
                    { 'max-w-none max-h-max': (size = 'big') }
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default Popup
