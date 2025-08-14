import { Badge, Container, Dropdown, FormControl, Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';


const Header = () => {

    const { state: { cart }, dispatch, productDispatch } = CartState()
    return (
        <Navbar className='bg-blue-950' variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl onChange={(e) => {
                        productDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                        })
                    }} style={{ width: 600, margin: 'auto' }} placeholder='Search Items..' />
                </Navbar.Text>

                <Nav>
                    <Dropdown align='end'>
                        <Dropdown.Toggle variant='success'>
                            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                <FaShoppingCart color='white' fontSize='20px' />
                                <Badge>{cart.length}</Badge>
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth: 350 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className='flex justify-between mx-[10px] my-0 mb-5 items-center' key={prod.id}>
                                            <img className='w-[50px] h-[50px] object-cover border-r rounded-full' src={prod.image} alt={prod.name} />

                                            <div>
                                                <span className='flex flex-1 px-20px py-0 flex-col '>{prod.name}</span>
                                                <span>${prod.price.split('.')[0]}</span>
                                            </div>
                                            <AiFillDelete
                                                fontSize='20px'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: 'REMOVE_FROM_CART',
                                                        payload: prod,
                                                    })
                                                }

                                            />
                                        </span>
                                    ))}
                                    <Link to='/cart'>
                                        <Button style={{ width: '95%', marfin: '0 10px' }}>Go To Cart</Button>
                                    </Link>
                                </>
                            ) : (<span style={{ padding: 10 }}>Cart is Empty !</span>)}

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    );
};

export default Header;
