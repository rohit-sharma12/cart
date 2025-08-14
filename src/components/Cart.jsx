import { useEffect, useState } from 'react'
import { CartState } from '../context/Context'
import { Button, ListGroup, Row, Col, Form, Image } from 'react-bootstrap'
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
    const { state: { cart }, dispatch } = CartState();

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])
    return (
        <div className='flex justify-between'>
            <div className='flex w-{78px} p-5 flex-wrap justify-around'>
                <ListGroup>
                    {
                        cart.map((prod) => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2} style={{ width: '10vw', height: '10vh', padding: '0' }}>
                                        <Image src={prod.image} alt={prod.name} fluid rounded style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </Col>
                                    <Col md={2}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={2}><span>$ {Math.floor(prod.price)}</span></Col>
                                    <Col md={2}><Rating rating={prod.rating} /></Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value={prod.qty}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: 'CHANGE_CART_QTY',
                                                    payload: {
                                                        id: prod.id,
                                                        qty: e.target.value,
                                                    },
                                                })}
                                        >

                                            {[...Array(prod.inStock).keys()].map((x) => (
                                                <option key={x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={() => dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: prod,
                                        })}>
                                            <AiFillDelete fontSize='20px' />
                                        </Button>

                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className='bg-blue-950 p-5 flex w-{22%} m-2.5 h-{86vh} flex-col text-white' >
                <span className='pb-4 text-xl font-semibold'>
                    Subtotal ({cart.length}) items
                </span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {Math.floor(total)}</span>
                <Button type='button' disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div >
    )
}

export default Cart
Cart