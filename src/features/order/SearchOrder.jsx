import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search order #"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-32 rounded-full bg-amber-100 px-2 py-2 text-sm transition-all duration-300 placeholder:text-zinc-400 focus:w-52 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 sm:w-72 sm:focus:w-96"
            ></input>
        </form>
    )
}

export default SearchOrder
