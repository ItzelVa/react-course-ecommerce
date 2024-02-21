import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

export function ProductDetail () {
    const context = useContext(ShoppingCartContext)
    //console.log('PRODUCT TO SHOW: ', context.productToShow)
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex':'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='cursor-pointer'
                    onClick={()=>context.closeProductDetail()}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                </div>
            </div>
            <figure className='w-auto h-2/4 px-6'>
                <img className='h-full w-full object-contain rounded-lg'
                    src={context.productToShow.image} 
                    alt={context.productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl'>{context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}