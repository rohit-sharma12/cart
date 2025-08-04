import { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { Button, ListGroup, Row, Col } from 'react-bootstrap'
import Rating from './Rating'

const Cart = () => {
    const { state: { cart }, dispatch } = CartState();

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])
    return (
        <div className='flex justify-between'>
            <div className='flex w-{80px} p-5 flex-wrap justify-around'>
                <ListGroup>
                    {
                        cart.map((prod) => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={2}><span>$ {prod.price}</span></Col>
                                    <Col md={2}><Rating rating={prod.rating} /></Col>
                                    
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className='bg-blue-950 p-5 flex w-{20%} m-2.5 h-{86vh} flex-col text-white' >
                <span className='pb-4 text-xl font-semibold'>
                    Subtotal ({cart.length}) items
                </span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
                <Button type='button' disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div >
    )
}

export default Cart
Cart