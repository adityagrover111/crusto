import { Outlet, useNavigation } from 'react-router-dom'
import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import Loader from './Loader'
import { Toaster } from 'react-hot-toast'

function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-hidden">
            {isLoading && <Loader />}
            <Toaster
                position={
                    window.innerWidth < 640 ? 'bottom-center' : 'top-right'
                }
                containerStyle={
                    window.innerWidth < 640 ? { bottom: '5.5rem' } : {}
                }
                toastOptions={{
                    duration: 1000,
                    style: {
                        background: '#27272a',
                        color: '#fbbf24',
                        borderRadius:
                            window.innerWidth < 640 ? '0.5rem' : '0.75rem',
                        fontSize: window.innerWidth < 640 ? '0.875rem' : '1rem',
                    },
                    success: {
                        iconTheme: {
                            primary: '#f59e0b',
                            secondary: '#27272a',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#27272a',
                        },
                    },
                }}
            />

            <Header />
            <main className="mx-1 max-w-full overflow-y-auto py-2">
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}

export default AppLayout
