import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
    const base =
        'inline-block rounded-full bg-amber-400 font-semibold uppercase tracking-wide text-zinc-800 transition-colors hover:bg-amber-300 focus:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 text-sm focus:ring-offset-2 disabled:cursor-not-allowed '

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' py-2 px-4 text-xs md:px-5 md:py-2.5',
        round: base + ' py-1 px-2.5 text-xs md:px-3.5 md:py-2',
        secondary:
            ' inline-block text-sm px-3.5 ml-1.5 py-2.5 md:px-6 md:py-3.5 rounded-full border-2 focus:text-zinc-800  border-zinc-300  font-semibold uppercase tracking-wide text-zinc-400 transition-colors hover:bg-zinc-300 focus:bg-zinc-300 hover:text-zinc-800 focus:outline-none focus:ring focus:ring-zinc-200 focus:ring-offset-2 disabled:cursor-not-allowed ',
    }
    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        )
    if (onClick)
        return (
            <button
                onClick={onClick}
                disabled={disabled}
                className={styles[type]}
            >
                {children}
            </button>
        )

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
