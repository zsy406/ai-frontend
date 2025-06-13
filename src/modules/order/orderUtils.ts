export const formatOrder = (order) => {
    return {
        ...order,
        formattedDate: new Date(order.date).toLocaleDateString(),
        totalAmount: calculateTotal(order.items),
    };
};

export const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};