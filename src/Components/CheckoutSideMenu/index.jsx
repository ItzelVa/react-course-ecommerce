import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'

import './styles.css'

export function CheckoutSideMenu () {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.
            filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date:'01.02.24',
            products: context.cartProducts,
            totalProducts : context.cartProducts.length,
            totalPrice : totalPrice(context.cartProducts)
        }
        context.setOrder([... context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }
    //console.log('PRODUCT TO SHOW: ', context.productToShow)
    //console.log('SHOPPING CART', context.cartProducts)
    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex':'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div className='cursor-pointer'
                    onClick={()=>context.closeCheckoutSideMenu()}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {context.cartProducts.map(product => (
                    <OrderCard 
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        handleDelete={()=>handleDelete(product.id)}
                    />
                ))}
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-semibold text-2xl text-black'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='my-orders/last'>
                    <button 
                    className='bg-black py-3 w-full text-white rounded-lg'
                        onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}