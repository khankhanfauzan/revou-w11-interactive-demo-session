import React from 'react'

function SecondaryButton({ name, onClick }) {
    return (
        <button className="w-full text-blue-500 hover:text-blue-900 font-bold py-2 px-3 text-sm sm:text-base transition duration-300 rounded hover:bg-blue-50" onClick={onClick}>
            {name}
        </button>
    )
}

export default SecondaryButton