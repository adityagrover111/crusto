import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const username = useSelector((state) => state.user.username)

    if (!username) return <Navigate to="/" replace />
    return <>{children}</>
}

export default ProtectedRoute
