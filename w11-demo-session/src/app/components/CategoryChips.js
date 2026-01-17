import React from 'react'

function CategoryChips({ name }) {
    return (
        <div className="absolute top-2 left-2 bg-gray-500 px-3 py-1 rounded-full text-sm font-medium shadow-sm">{name}</div>
    )
}

export default CategoryChips