import { Button, Card } from "react-bootstrap"
import Rating from "./Rating"
import { CartState } from "../context/Context"

const SingleProduct = ({ prod }) => {
  const { state: { cart }, dispatch,
  } = CartState()
  return (
    <div style={{ width: "270px", margin: "10px" }}>
      <Card>
        <Card.Img style={{ width: "100%", height: "200px", objectFit: "cover", aspectRatio: "1/1" }} variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle>
            <span>$ {prod.price.split('.')[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {
            cart.some(p => p.id === prod.id) ? (
              <div style={{ display: "flex", justifyContent: 'center', gap: "8px", marginTop: "10px" }}>
                <Button onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: true,
                  })
                }} variant="danger"> Remove</Button>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: 'center', gap: "8px", marginTop: "10px" }}>
                <Button onClick={() => {
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: prod
                  })
                }} disabled={!prod.inStock}>
                  {!prod.inStock ? "Out Of Stock" : "ADD to Cart"}
                </Button>
              </div>)
          }

        </Card.Body>
      </Card>
    </div >
  )
}

export default SingleProduct
