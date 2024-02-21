import { XMarkIcon } from '@heroicons/react/24/solid'

export function OrderCard ({title, image, price, handleDelete}) {
    const titleShort = title.split(' ').slice(0,3).join(' ')
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon 
        className="h-6 w-6 text-black cursor-pointer"
        onClick={handleDelete} />
    }
    return(
        <div className="flex justify-between items-center mb-2">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img 
                        className='w-full h-full object-contain rounded-lg' 
                        src={image} 
                        alt={titleShort}
                    />
                </figure>
                <p className='text-sm font-light'>{titleShort}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderXMarkIcon}
            </div>
            
        </div>
    )
}