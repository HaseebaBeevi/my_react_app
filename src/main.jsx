import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Heading from './header.jsx'
import Footer from './footer.jsx'
import Box from './boxes.jsx'
import CartList from './cartList.jsx'


let boxes = [{
    heading: 'Stylish Noise Cancelling Headphones',
    paragraph: "Immerse yourself in pure audio bliss with our premium noise-cancelling headphones.Perfect for travel or focused work.",
    discountAmount: "$149.99",
    amount: "$199.99",
    reviews: "(128 Reviews)",
    cartMessage: "Add To Cart",
    svg1: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg2: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg3: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg4: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg5: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    id: 1
}, {
    heading: 'Advanced Fitness Smartwatch',
    paragraph: "Track your health and stay connected with our feature-packed smartwatch. Waterproof and long-lasting battery.",
    discountAmount: "$99.00",
    amount: "$120.00",
    reviews: "(250 Reviews)",
    cartMessage: "Add To Cart",
    svg1: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg2: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg3: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg4: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg5: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    id: 2
}, {
    heading: 'Mechanical RGB Gaming Keyboard',
    paragraph: "Experience lightning-fast responsiveness with our customizable RGB gaming keyboard. Built for champions.",
    discountAmount: "$75.50",
    amount: "$90.00",
    reviews: "(80 Reviews)",
    cartMessage: "Add To Cart",
    svg1: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg2: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg3: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg4: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg5: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    id: 3
}, {
    heading: 'Ergonomic Wireless Mouse',
    paragraph: "Work comfortably for hours with our precision ergonomic mouse. Say goodbye to wrist strain.",
    discountAmount: "$35.99",
    amount: "$45.00",
    reviews: "(190 Reviews)",
    cartMessage: "Add To Cart",
    svg1: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg2: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg3: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg4: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg5: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    id: 4
}, {
    heading: 'Compact Portable Bluetooth Speaker',
    paragraph: "Enjoy your music anywhere with this powerful and portable Bluetooth speaker. Great bass and battery life.",
    discountAmount: "$59.99",
    amount: "$70.00",
    reviews: "(300 Reviews)",
    cartMessage: "Add To Cart",
    svg1: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg2: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg3: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg4: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg5: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    id: 5
}, {
    heading: 'Universal Smart Home Hub',
    paragraph: "Control all your smart devices from one central hub. Simplify your home automation.",
    discountAmount: "$119.99",
    amount: "$150.00",
    reviews: "(95 Reviews)",
    cartMessage: "Add To Cart",
    svg1: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg2: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg3: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg4: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    svg5: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z",
    id: 6
}]

function Cart() {
    const [heading, newHeading] = React.useState("");

    function findIndex(index) {
        const obj = boxes[index - 1];
        newHeading(obj.heading);
        console.log(heading);

    }

    return (
        <>
            <CartList heading={heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {boxes.map((box, index) => (
                    <Box
                        key={index}
                        heading={box.heading}
                        paragraph={box.paragraph}
                        discountAmount={box.discountAmount}
                        amount={box.amount}
                        reviews={box.reviews}
                        cartMessage={box.cartMessage}
                        svg1={box.svg1}
                        svg2={box.svg2}
                        svg3={box.svg3}
                        svg4={box.svg4}
                        svg5={box.svg5}
                        id={box.id}
                        onBtnclick={findIndex}
                    />
                ))}
            </div>
        </>
    );
}



const header = <header className="text-center mb-12"> <Heading /></header>

const footer = <footer className="text-center mt-12 py-6 border-t border-gray-200 text-gray-500 text-sm">
    <Footer />
</footer>

const container = (
    <div className='p-6 space-y-4'>
        {header}
        <Cart />
        {footer}
    </div>
);

const root = createRoot(document.getElementById('root'));
root.render(container);



