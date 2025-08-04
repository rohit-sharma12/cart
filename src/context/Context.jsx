import { createContext, useContext, useReducer } from "react";
import cartReducer from "./Reducer";
import { faker } from "@faker-js/faker";

const Cart = createContext();
faker.seed(99);

export const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlPicsumPhotos(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    })

    return (
        <Cart.Provider value={{ state, dispatch }}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart)
}