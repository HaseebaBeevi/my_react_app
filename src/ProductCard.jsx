function ProductCard(props) {
  const product = props.product;
  function handleAddToCart() {
    props.addProductToCart(product);
  }
  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        id={props.id}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold text-indigo-700 mr-2">
              {product.discountAmount}
            </span>
            <span className="text-sm text-gray-500 line-through">
              {product.amount}
            </span>
          </div>
          <div className="flex items-center text-yellow-500 mb-4">
            <span className="ml-2 text-yellow-600 text-sm text-2xl">
              {product.rating}
            </span>
            <span className="ml-2 text-gray-600 text-sm">
              ("{product.reviews} reviews")
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
