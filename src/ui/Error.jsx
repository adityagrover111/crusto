import { Link, useNavigate, useRouteError } from 'react-router-dom'
import Header from './Header'

function Error() {
    const navigate = useNavigate()
    const error = useRouteError()

    return (
        <div>
            <Link to="/">ZaNow</Link>
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    )
}

export default Error
