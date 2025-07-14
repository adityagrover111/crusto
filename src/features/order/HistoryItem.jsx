import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/helpers'

function HistoryItem({ item }) {
    const { cart, phone, priority, id, address } = item
    const total = cart.reduce((acc, item) => acc + item.totalPrice, 0)

    return (
        <div className="m-3 mb-2 rounded-lg border border-zinc-300 bg-amber-100 p-4 shadow-sm transition-all duration-200 hover:bg-amber-200">
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3
                    className="text-lg font-semibold"
                    aria-label={`Order ID ${id}`}
                >
                    Order ID: #{id}
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

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-zinc-600">
                    <p className="mb-1">📞 {phone}</p>
                    <p>📍 {address}</p>
                </div>

                <Link
                    to={`/order/${id}`}
                    className="inline-block w-full rounded-full bg-amber-400 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-zinc-800 transition-colors hover:bg-amber-300 focus:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:w-32"
                >
                    View Details
                </Link>
            </div>

            <ul className="mt-4 space-y-2 border-t border-zinc-400 pt-4">
                {cart.map((pizza) => (
                    <li
                        key={pizza.pizzaId}
                        className="flex items-center justify-between text-sm"
                    >
                        <span>
                            {pizza.quantity}× {pizza.name}
                        </span>
                        <span className="font-medium">
                            {formatCurrency(pizza.totalPrice)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryItem
