export const filterProducts = (products, searchTerm) => {
    return products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });
};