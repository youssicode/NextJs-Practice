"use client"
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (

        <div>

            <button className='bg-slate-800 text-gray-50 rounded-md mb-2' onClick={() => setCount(prev => prev + 1)}>Increment Counter</button>
            <div className='text-center'>{count}</div>
        </div>

    )
}

export default Counter