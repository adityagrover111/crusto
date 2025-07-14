import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function ProtectedRoute({ children }) {
    const username = useSelector((state) => state.user.username)
    const hasShownToast = useRef(false)

    useEffect(() => {
        if (!username && !hasShownToast.current) {
            toast.error('Enter name to continue')
            hasShownToast.current = true
        }
    }, [username])

    if (!username) return <Navigate to="/" replace />

    return children
}

export default ProtectedRoute
