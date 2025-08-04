import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import Filters from './Filters'

const Home = () => {
  const { state: { products } } = CartState()
  return (
    <div className='flex'>
      <Filters />
      <div className='flex w-{80px} p-5 flex-wrap justify-around'>
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />
        })}
      </div>
    </div>
  )
}

export default Home
