import React from 'react'

function PrimaryButton({ name, onClick }) {
    return (
        <button className="w-full bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full text-sm sm:text-base transition duration-300" onClick={onClick}>
            {name}
        </button>
    )
}

export default PrimaryButton