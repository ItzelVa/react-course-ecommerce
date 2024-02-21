import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { CalendarIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export function OrdersCard ({totalPrice, totalProducts}) {
    
    
    return(
        <div className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className='flex justify-between gap-2 items-center'>
                        <CalendarIcon className="h-4 w-4 text-black cursor-pointer"/>
                        <span className="font-light">01.02.24</span>
                    </span>
                    <span className='flex justify-between gap-2 items-center'>
                        <ShoppingBagIcon className="h-4 w-4 text-black cursor-pointer"/>
                        <span className="font-light">{totalProducts} {totalProducts > 1 ? "articles" : "article"}</span>
                    </span>
                </p>
                <p className='flex justify-between items-center gap-2'>
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
                </p>
            </div>
        </div>
    )
}