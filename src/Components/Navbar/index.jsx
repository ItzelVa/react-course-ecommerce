import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

export function Navbar() {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="w-full flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to={'/'}
                    onClick={()=> context.setSearchByTitle('a')}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/'}
                    onClick={()=> context.setSearchByTitle('a')}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/clothing'}
                    onClick={()=> context.setSearchByTitle('a')}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/electronics'}
                    onClick={()=> context.setSearchByTitle('a')}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/jewelery'}
                    onClick={()=> context.setSearchByTitle('a')}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        Jewerely
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/toys'}
                    onClick={()=> context.setSearchByTitle('toys')}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/others'}
                    onClick={()=> context.setSearchByTitle('others')}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    itzel@hotmail.com
                </li>
                <li>
                    <NavLink 
                    to={'/my-orders'}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/my-account'}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to={'/sign-in'}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 w-6 text-black"/> 
                    {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}