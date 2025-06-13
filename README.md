# Toy Store SPA

Welcome to the Toy Store Single Page Application (SPA) built with React and Vite! This project serves as an e-commerce platform for children's toys, allowing users to browse products, manage their cart, place orders, and manage their user profiles.

## Features

- **Product Management**: Users can view a list of toys, filter products, and view details for each toy.
- **Cart Management**: Users can add or remove items from their cart and view the cart's contents.
- **Order Management**: Users can place orders and view their order history.
- **User Management**: Users can register, log in, and manage their profile information.

## Project Structure

The project is organized into several modules:

- **src/api**: Contains API calls for cart, order, product, and user management.
- **src/components**: Contains React components for Cart, Order, Product, and User.
- **src/modules**: Contains utility functions and context for managing cart, order, product, and user states.
- **src/pages**: Contains page components for different views of the application.
- **src/types**: Contains TypeScript interfaces and types for various entities in the application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd toy-store-spa
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## API Integration

This SPA interacts with a backend RESTful API developed with .NET 8. Ensure that the backend server is running and accessible for the frontend to function correctly.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.