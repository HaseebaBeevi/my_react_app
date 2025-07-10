import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ProdctCard from './ProductCard.jsx'
import Cart from './Cart.jsx'


let products = [{
    name: 'Stylish Noise Cancelling Headphones',
    description: "Immerse yourself in pure audio bliss with our premium noise-cancelling headphones.Perfect for travel or focused work.",
    discountAmount: "$149.99",
    amount: "$199.99",
    reviews: 128,
    rating: 2,
    id: 1
}, {
    name: 'Advanced Fitness Smartwatch',
    description: "Track your health and stay connected with our feature-packed smartwatch. Waterproof and long-lasting battery.",
    discountAmount: "$99.00",
    amount: "$120.00",
    reviews: 250,
    rating: 2,
    id: 2
}, {
    name: 'Mechanical RGB Gaming Keyboard',
    description: "Experience lightning-fast responsiveness with our customizable RGB gaming keyboard. Built for champions.",
    discountAmount: "$75.50",
    amount: "$90.00",
    reviews: 80,
    rating: 2,
    id: 3
}, {
    name: 'Ergonomic Wireless Mouse',
    description: "Work comfortably for hours with our precision ergonomic mouse. Say goodbye to wrist strain.",
    discountAmount: "$35.99",
    amount: "$45.00",
    reviews: 190,
    rating: 2,
    id: 4
}, {
    name: 'Compact Portable Bluetooth Speaker',
    description: "Enjoy your music anywhere with this powerful and portable Bluetooth speaker. Great bass and battery life.",
    discountAmount: "$59.99",
    amount: "$70.00",
    reviews: 300,
    rating: 2,
    id: 5
}, {
    name: 'Universal Smart Home Hub',
    description: "Control all your smart devices from one central hub. Simplify your home automation.",
    discountAmount: "$119.99",
    amount: "$150.00",
    reviews: 95,
    rating: 2,
    id: 6
}]

function ProductList() {
    const [selectedProducts, setSelectedProducts] = React.useState([]);
    function addProductToCart(product) {
        setSelectedProducts((prevProducts) => [...prevProducts, product])
    }
    return (
        <>
            <Cart selectedProducts={selectedProducts} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {products.map((product, index) => (
                    <ProdctCard
                        key={index}
                        product={product}
                        addProductToCart={addProductToCart}

                    />
                ))}
            </div>
        </>
    );
}

const container = (
    <div className='p-6 space-y-4'>
        <Header />
        <ProductList />
        <Footer />
    </div>
);
const root = createRoot(document.getElementById('root'));
root.render(container);



