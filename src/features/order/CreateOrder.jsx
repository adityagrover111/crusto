import { useState } from 'react'
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { createOrder } from '../../services/apiRestaurant'
import Button from '../../ui/Button'
import { useSelector } from 'react-redux'
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice'
import EmptyCart from '../cart/EmptyCart'
import store from '../../store'
import { formatCurrency } from '../../utils/helpers'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    )

function CreateOrder() {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    const formErrors = useActionData()

    const [withPriority, setWithPriority] = useState(false)

    const userName = useSelector((state) => state.user.username)
    const cart = useSelector(getCart)
    const totalCartPrice = useSelector(getTotalCartPrice)
    const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0

    const totalPrice = totalCartPrice + priorityPrice
    if (!cart.length) return <EmptyCart />

    return (
        <div className="px-4 py-6">
            <h2 className="mb-8 text-xl font-semibold">
                Ready to order? Lets go!
            </h2>
            <Form method="POST">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">First Name</label>
                    <input
                        className="input grow"
                        type="text"
                        name="customer"
                        required
                        defaultValue={userName}
                    />
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Phone number</label>
                    <div className="grow">
                        <input
                            className={
                                formErrors?.phone
                                    ? 'input w-full border-[3px] border-red-600 transition-all duration-100 focus:border-none'
                                    : 'input w-full'
                            }
                            type="tel"
                            name="phone"
                            required
                        />

                        {formErrors?.phone && (
                            <p className="my-2 rounded-md bg-red-100 p-2 text-sm font-semibold text-red-600">
                                {formErrors.phone}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="sm:basis-40">Address</label>
                    <div className="grow">
                        <input
                            className="input w-full"
                            type="text"
                            name="address"
                            required
                        />
                    </div>
                </div>

                <div className="mb-10 flex items-center gap-5">
                    <input
                        className="my-2 h-6 w-6 accent-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-2"
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label className="font-medium" htmlFor="priority">
                        Want to give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    ></input>
                    <Button type="primary" disabled={isSubmitting}>
                        {isSubmitting
                            ? 'Placing Order...'
                            : `Order now from ${formatCurrency(totalPrice)}`}
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === 'true',
    }

    const errors = {}
    if (!isValidPhone(order.phone))
        errors.phone = 'Please give us your correct phone number'

    if (Object.keys(errors).length > 0) return errors

    const newOrder = await createOrder(order)
    const orderWithId = { ...order, id: newOrder.id }
    const existing = JSON.parse(localStorage.getItem('orders')) || []
    const updated = [...existing, orderWithId]
    localStorage.setItem('orders', JSON.stringify(updated))

    store.dispatch(clearCart())
    return redirect(`/order/${newOrder.id}`)
}
export default CreateOrder
