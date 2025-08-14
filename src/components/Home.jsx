import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import Filters from './Filters'

const Home = () => {
  const { state: { products }, productState: { byStock, byFastDelivery, sort, byRating, searchQuery }
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      )
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating)
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }

    return sortedProducts;
  }

  return (
    <div className='flex'>
      <Filters />
      <div className='flex w-{80px} p-5 flex-wrap justify-around'>
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />
        })}
      </div>
    </div>
  )
}

export default Home
