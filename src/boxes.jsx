import React from "react";

function Box(props) {
    function onbtnclick() {
        props.onBtnclick(props.id);
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl" id={props.id}>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{props.heading}</h2>
                    <p className="text-gray-600 text-sm mb-4">{props.paragraph}</p>
                    <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-indigo-700 mr-2">{props.discountAmount}</span>
                        <span className="text-sm text-gray-500 line-through">{props.amount}</span>
                    </div>
                    <div className="flex items-center text-yellow-500 mb-4">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d={props.svg1} />
                        </svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d={props.svg2} />
                        </svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d={props.svg3} />
                        </svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d={props.svg4} />
                        </svg>
                        <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                            <path d={props.svg5} />
                        </svg>
                        <span className="ml-2 text-gray-600 text-sm">{props.reviews}</span>
                    </div>
                    <button
                        className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md"
                        onClick={onbtnclick} >
                        {props.cartMessage}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Box;