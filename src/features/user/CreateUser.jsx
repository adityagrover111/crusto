import { useState } from 'react'

function CreateUser() {
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-72 rounded-2xl border-2 bg-yellow-200 px-4 py-3 text-center outline-2 placeholder:text-stone-400 focus:outline-none focus:outline focus:outline-yellow-400"
            />

            {username !== '' && (
                <div>
                    <button className="mt-2 rounded-full bg-yellow-200 px-4 py-3 font-semibold transition-all hover:bg-yellow-300">
                        Start ordering
                    </button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
