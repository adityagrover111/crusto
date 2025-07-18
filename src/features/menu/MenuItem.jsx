import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import { addItem, getCurrentQuantityById } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'

function MenuItem({ pizza }) {
    const dispatch = useDispatch()

    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
    function handleAddToCart() {
        const newItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }
    const currentQuantity = useSelector(getCurrentQuantityById(id))
    const isInCart = currentQuantity > 0
    return (
        <li className="flex gap-4 py-2">
            <img
                className={`h-24 ${soldOut ? 'opacity-80 grayscale' : ''}`}
                src={imageUrl}
                alt={name}
            />
            <div className="flex grow flex-col pt-0.5">
                <p className="font-semibold">{name}</p>
                <p className="text-sm capitalize italic text-zinc-500">
                    {ingredients.join(', ')}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-zinc-500">
                            Sold out
                        </p>
                    )}
                    {isInCart && (
                        <div className="flex items-center gap-2 md:gap-3">
                            <UpdateItemQuantity
                                pizzaId={id}
                                currentQuantity={currentQuantity}
                            />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}
                    {!soldOut && !isInCart && (
                        <>
                            <Button onClick={handleAddToCart} type="small">
                                Add to cart
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </li>
    )
}

export default MenuItem
