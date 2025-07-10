function Cart({ selectedProducts }) {
  return (
    <>
      <div className="top-10 right-10 w-96 h-80">
        <div className="bg-indigo-200 p-6 rounded shadow-md h-full overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800">Cart List:</h2>
          <ul className="text-gray-700 mt-2">
            {selectedProducts.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center mb-4"
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cart;
