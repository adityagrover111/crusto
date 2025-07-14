import { useSelector } from 'react-redux'
import CreateUser from '../features/user/CreateUser'
import Button from './Button'

function Home() {
    const userName = useSelector((state) => state.user.username)
    return (
        <div className="my-10 px-4 text-center sm:my-16">
            <h1 className="mb-8 text-xl font-bold md:text-3xl">
                From code to crust.
                <br />
                <span className="text-amber-500">
                    Built for practice. Served hot.
                </span>
            </h1>
            {userName === '' ? (
                <CreateUser />
            ) : (
                <div className="flex-col space-y-2">
                    <Button to="/menu" type="primary">
                        Continue Ordering, {userName}
                    </Button>
                    {
                        <Button to="/order/history" type="secondary">
                            Your Order History
                        </Button>
                    }
                </div>
            )}
        </div>
    )
}

export default Home
