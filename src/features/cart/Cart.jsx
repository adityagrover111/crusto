import { Link } from 'react-router-dom'
import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'
import toast from 'react-hot-toast'

function Cart() {
    const cart = useSelector(getCart)
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.user.username)
    function handleClear() {
        toast.error('Cart cleared!')
        dispatch(clearCart())
    }
    if (!cart.length) return <EmptyCart />
    return (
        <div className="px-4 py-3">
            <LinkButton to={'/menu'}> &larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">
                Your cart, {userName}
            </h2>
            <ul className="mt-3 divide-y divide-zinc-200 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>
            <div className="mt-6">
                <Button type="primary" to="/order/new">
                    Order pizzas
                </Button>

                <Button onClick={() => handleClear()} type="secondary">
                    Clear cart
                </Button>
            </div>
        </div>
    )
}

export default Cart
