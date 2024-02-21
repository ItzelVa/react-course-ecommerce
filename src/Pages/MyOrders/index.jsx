import { Layout } from "../../Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import {ShoppingCartContext} from '../../Context'
import { useContext } from "react"
import { Link } from "react-router-dom"


export function MyOrders() {

  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        <div className="flex justify-center w-80 items-center relative mb-4">
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
        {
          context.order.map( (order,index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}/>
            </Link>
          ))
        }
      </Layout>
    )
}