import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/helpers'

function HistoryItem({ item }) {
    const { cart, phone, priority, id, customer, address } = item
    const total = cart.reduce((acc, item) => acc + item.totalPrice, 0)

    return (
        <Link to={`/order/${id}`}>
            <div className="m-3 mb-2 rounded-lg border border-zinc-300 bg-amber-100 p-4 shadow-sm transition-all duration-200 hover:bg-amber-200">
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                        {`Order ID: #${id}`}
                        {priority && (
                            <span className="ml-2 rounded-full bg-amber-400 px-2 py-0.5 text-xs font-medium text-zinc-900">
                                Priority
                            </span>
                        )}
                    </h3>
                    <p className="text-sm font-bold text-gray-600">
                        Total: {formatCurrency(total)}
                    </p>
                </div>

                <p className="text-sm text-zinc-600">
                    📞 {phone} <br /> 📍 {address}
                </p>

                <ul className="mt-4 space-y-2 border-t border-zinc-400 pt-4">
                    {cart.map((pizza) => (
                        <li
                            key={pizza.pizzaId}
                            className="flex items-center justify-between text-sm"
                        >
                            <span>
                                {pizza.quantity}&times; {pizza.name}
                            </span>
                            <span className="font-medium">
                                {formatCurrency(pizza.totalPrice)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}

export default HistoryItem
