import { useContext } from "react"

import { Layout } from "../../Layout"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductoDetail"

import { ShoppingCartContext } from "../../Context"

export function Home() {

  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname.substring(1)
  //console.log(currentPath)

  const renderView = () => {

    if(context.searchByTitle?.length > 0) {
      if(context.filteredItems?.length>0){
        if((currentPath)?.length > 0){
          return(
            context.filteredItems?.filter(item => item.category.includes(currentPath)) // Filtrar los elementos que coinciden
                        .map(item => ( // Mapear los elementos filtrados a elementos Card
            <Card key={item.id} data={item} />))
          )
        }
        else if((currentPath)?.length === 0){
          return (
            context.filteredItems?.map(item =>(
              <Card key={item.id} data={item} />
            ))
          )
        }
        else{
          return(
            <div>We do not have anything to show :( </div>
          )
        }
      }
      else{
        return(
          <div>We do not have anything to show :( </div>
        )
      }
    }
    else{
      if ((currentPath)?.length > 0) {
        return (
          context.items
            ?.filter(item => item.category.includes(currentPath)) // Filtrar los elementos que coinciden
            .map(item => ( // Mapear los elementos filtrados a elementos Card
              <Card key={item.id} data={item} />
            ))
        );
      }
      else{
        return(
          context.items?.map(item =>(
            <Card key={item.id} data={item} />
          ))
        )
      }
      
    }
  }

  return (
    <Layout>
      <div className="flex justify-center w-80 items-center relative mb-4">
          <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event)=>context.setSearchByTitle(event.target.value)}/>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          renderView()
        }
      </div>
      <ProductDetail></ProductDetail>
    </Layout>
  )
}
