import { Link } from 'react-router-dom'
import LinkButton from '../../ui/LinkButton'

function EmptyCart() {
    return (
        <div className="w-auto px-4 py-3">
            <LinkButton to={'/menu'}> &larr; Back to menu</LinkButton>

            <p className="mt-7 py-3 font-semibold text-zinc-700">
                Your cart is still empty. Start adding some pizzas :)
            </p>
        </div>
    )
}

export default EmptyCart
