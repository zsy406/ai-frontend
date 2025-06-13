import React, { useContext } from 'react';
import { CartContext } from '../../modules/cart/CartContext';

const Cart: React.FC = () => {
    const { cartItems, addItem, removeItem } = useContext(CartContext);

    const handleAddItem = (item) => {
        addItem(item);
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => handleAddItem(item)}>Add</button>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;