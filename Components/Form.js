import React from 'react'
import '@/app/globals.css'

const form = () => {
    return(
        <>
        <form className="font-Poppins">
            <input type="text" className="border-4" placeholder="Heading" />

            <input type="text" className="border-4" placeholder="Description" />

            <button className="border-4">Add Task</button>
        </form>
        </>
    )
}

export default form