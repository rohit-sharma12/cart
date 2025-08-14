import { Form, Button } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {
    const { productState: { byStock, byFastDelivery, sort, byRating }, ProductDispatch } = CartState();
    console.log(byFastDelivery);

    return (
        < div className='bg-blue-950 p-5 flex w-{20%} m-2.5 h-{86vh} flex-col text-white' >
            <span className='pb-4 text-xl font-semibold'>Filter Products</span>
            <span className='pb-5 pr-5'>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onChange={() =>
                        ProductDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh",
                        })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span className='pb-5'>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onChange={() =>
                        ProductDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "highToLow",
                        })
                    }
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span className='pb-5'>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onChange={() =>
                        ProductDispatch({
                            type: "FILTER_BY_STOCK",
                        })
                    }
                    checked={byStock}
                />
            </span>
            <span className='pb-5'>
                <Form.Check
                    inline
                    label="Fast Delivery"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onChange={() =>
                        ProductDispatch({
                            type: "FILTER_BY_DELIVERY",
                        })
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={byRating} onClick={(i) =>
                    ProductDispatch({
                        type: 'FILTER_BY_RATING',
                        payload: i + 1,
                    })
                }
                    style={{ cursor: 'pointer' }}
                />
            </span>
            <Button variant="light" onClick={() => ProductDispatch({ type: "CLEAR_FILTERS" })}>Clear Filters</Button>
        </div >
    )
}

export default Filters
