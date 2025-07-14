import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {
    action as createOrderAction,
} from './features/order/CreateOrder'
import Order, { loader as orderLoader } from './features/order/Order'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import ProtectedRoute from './features/user/ProtectedRoute'
import OrderHistory from './features/order/OrderHistory'
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/menu',
                element: (
                    <ProtectedRoute>
                        <Menu />
                    </ProtectedRoute>
                ),
                loader: menuLoader,
            },
            {
                path: '/cart',
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/order/history',
                element: (
                    <ProtectedRoute>
                        <OrderHistory />
                    </ProtectedRoute>
                ),
            },
            {
                path: '/order/new',
                element: (
                    <ProtectedRoute>
                        <CreateOrder />
                    </ProtectedRoute>
                ),
                action: createOrderAction,
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                loader: orderLoader,
                errorElement: <Error />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
