import { Link, useRouteError } from 'react-router-dom'
import Header from './Header'
import LinkButton from './LinkButton'

function Error() {
    const error = useRouteError()

    return (
        <div>
            <Link to="/">Crusto</Link>
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>
            <LinkButton to="-1">&larr; Go Back</LinkButton>
        </div>
    )
}

export default Error
