import React, { useContext } from 'react';
import { CartContext } from '../modules/cart/CartContext';
import Cart from '../components/Cart/Cart';

const CartPage: React.FC = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Cart />
            )}
        </div>
    );
};

export default CartPage;