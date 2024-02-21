import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider ({children}) {

    //Shoppin cart · Increment quantity
    const [count, setCount] = useState(0)

    //Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout side menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping cart · Order
    const [order, setOrder] = useState([])

    //Get products
    const [items, setItem] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //console.log(searchByTitle)

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setItem(data))
      }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect( () => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items,searchByTitle))
      }, [items,searchByTitle])

    //console.log(filteredItems)

    return(
        <ShoppingCartContext.Provider
        value={{
            count,
            setCount,
            openProductDetail,
            isProductDetailOpen,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItem,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}