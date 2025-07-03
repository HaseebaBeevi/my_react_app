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
export default Box