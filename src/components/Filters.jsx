import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Rating from './Rating';

const Filters = () => {
    const [rate, setRate] = useState(3);

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
                />
            </span>
            <span className='pb-5'>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            <span className='pb-5'>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>
            <span className='pb-5'>
                <Form.Check
                    inline
                    label="Fast Delivery"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                />
            </span>

            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={rate} onClick={(i) => setRate(i + 1)} style={{ cursor: 'pointer' }} />
            </span>
            <Button variant="light">Clear Filters</Button>
        </div >
    )
}

export default Filters
