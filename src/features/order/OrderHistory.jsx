import { useSelector } from 'react-redux'
import HistoryItem from './HistoryItem'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'

function OrderHistory() {
    const orders = JSON.parse(localStorage.getItem('orders')) || []
    const username = useSelector((state) => state.user.username)
    if (orders.length === 0)
        return (
            <div>
                <div className="flex h-full flex-col items-center justify-center p-4 text-center font-sans">
                    <h2 className="mb-2 text-2xl font-semibold">
                        No Orders Yet
                    </h2>
                    <p className="mb-4 text-gray-600">
                        Looks like you haven’t placed an order yet.
                    </p>

                    <Button to="/menu" type="primary">
                        Place Your First Order
                    </Button>
                </div>
            </div>
        )

    return (
        <div>
            <h1 className="ml-1.5 px-2 py-2 text-lg font-extrabold capitalize">
                {`Order History For, ${username}`}
            </h1>

            <ul>
                {orders.map((item) => (
                    <HistoryItem item={item} key={item.id} />
                ))}
            </ul>
        </div>
    )
}

export default OrderHistory
