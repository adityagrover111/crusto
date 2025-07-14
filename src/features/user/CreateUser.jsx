import { useReducer, useState } from 'react'
import Button from '../../ui/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateName } from './userSlice'
import toast from 'react-hot-toast'

function CreateUser() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!username) return
        dispatch(updateName(username))
        toast.success(`Welcome, ${username}`)
        navigate('/menu')
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-4 text-sm text-zinc-600 md:text-base">
                🍕 Welcome to Crusto! Let&apos;s start with your name:
            </p>

            <input
                type="text"
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input mb-8 w-72 rounded-full shadow-sm shadow-amber-100"
            />

            {username !== '' && (
                <div>
                    <Button type="primary">Start ordering</Button>
                </div>
            )}
        </form>
    )
}

export default CreateUser
