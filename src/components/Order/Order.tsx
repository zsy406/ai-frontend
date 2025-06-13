import React, { useEffect, useState } from 'react';
import { getOrders } from '../../api/orderApi';
import { OrderType } from '../../types/order';

const Order: React.FC = () => {
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchedOrders = await getOrders();
                setOrders(fetchedOrders);
            } catch (err) {
                setError('Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Your Orders</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <h3>Order ID: {order.id}</h3>
                            <p>Total: ${order.total}</p>
                            <p>Status: {order.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Order;