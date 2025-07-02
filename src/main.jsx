import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Heading() {
    return (
        <>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Amazing Products</h1>
            <p className="text-xl text-gray-600">Discover a wide range of high-quality items designed to enhance your life.</p>
        </>

    )
}
function Footer() {
    return (
        <p>&copy;" 2025 Component Labs. All rights reserved."</p>
    )
}
function Box(props) {
    return (
        <>
            <div
                class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div class="p-6">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-2">{props.heading}</h2>
                    <p class="text-gray-600 text-sm mb-4">{props.paragraph}</p>
                    <div class="flex items-baseline mb-4">
                        <span class="text-3xl font-bold text-indigo-700 mr-2">{props.discountAmount}</span>
                        <span class="text-sm text-gray-500 line-through">{props.amount}</span>
                    </div>
                    <div class="flex items-center text-yellow-500 mb-4">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d={props.svg1} />
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d={props.svg2} />
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d={props.svg3} />
                        </svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path
                                d={props.svg4} />
                        </svg>
                        <svg class="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                            <path
                                d={props.svg5} />
                        </svg>
                        <span class="ml-2 text-gray-600 text-sm">{props.reviews}</span>
                    </div>
                    <button
                        class="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md">{props.cartMessage}</button>
                </div>
            </div>
        </>
    )
}
const header = <header className="text-center mb-12"> <Heading /></header>

const mainDiv = <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    <Box
        heading='Stylish Noise Cancelling Headphones'
        paragraph="Immerse yourself in pure audio bliss with our premium noise-cancelling headphones.Perfect for travel or focused work."
        discountAmount="$149.99"
        amount="$199.99"
        reviews="(128 Reviews)"
        cartMessage="Add To Cart"
        svg1="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg2="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg3="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg4="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg5="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
    />
    <Box
        heading='Advanced Fitness Smartwatch'
        paragraph="Track your health and stay connected with our feature-packed smartwatch. Waterproof and long-lasting battery."
        discountAmount="$99.00"
        amount="$120.00"
        reviews="(250 Reviews)"
        cartMessage="Add To Cart"
        svg1="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg2="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg3="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg4="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg5="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
    />
    <Box
        heading='Mechanical RGB Gaming Keyboard'
        paragraph="Experience lightning-fast responsiveness with our customizable RGB gaming keyboard. Built for champions."
        discountAmount="$75.50"
        amount="$90.00"
        reviews="(80 Reviews)"
        cartMessage="Add To Cart"
        svg1="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg2="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg3="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg4="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg5="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
    />
    <Box
        heading='Ergonomic Wireless Mouse'
        paragraph="Work comfortably for hours with our precision ergonomic mouse. Say goodbye to wrist strain."
        discountAmount="$35.99"
        amount="$45.00"
        reviews="(190 Reviews)"
        cartMessage="Add To Cart"
        svg1="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg2="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg3="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg4="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg5="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
    />
    <Box
        heading='Compact Portable Bluetooth Speaker'
        paragraph="Enjoy your music anywhere with this powerful and portable Bluetooth speaker. Great bass and battery life."
        discountAmount="$59.99"
        amount="$70.00"
        reviews="(300 Reviews)"
        cartMessage="Add To Cart"
        svg1="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg2="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg3="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg4="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg5="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
    />
    <Box
        heading='Universal Smart Home Hub'
        paragraph="Control all your smart devices from one central hub. Simplify your home automation."
        discountAmount="$119.99"
        amount="$150.00"
        reviews="(95 Reviews)"
        cartMessage="Add To Cart"
        svg1="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg2="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg3="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg4="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
        svg5="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.882 1.48-8.279-6.064-5.828 8.332-1.151z"
    />
</div>



const footer = <footer class="text-center mt-12 py-6 border-t border-gray-200 text-gray-500 text-sm">
    <Footer />
</footer>

const container = React.createElement(
    'div',
    { className: 'p-6 space-y-4' },
    [header, mainDiv, footer]
);

const root = createRoot(document.getElementById('root'));
root.render(container);
