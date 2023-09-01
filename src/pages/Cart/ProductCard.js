import { React, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ProductCard = (props) => {
  // props.product is the product we are selling

  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <article className=" rounded bg-white shadow-lg w-full p-3 m-20 ">
      <img src={product.image} alt="" />
      <article>
        <h3 className="font-extrabold p-2 text-center">{product.title}</h3>
        <h3 className="font-extrabold p-2 text-center">${product.price}</h3>
        {productQuantity > 0 ? (
          <>
            <div>
              <div className="flex justify-center p-2">
                <label className="m-2">In Cart: {productQuantity}</label>
                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="m-2 bg-primary text-white p-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="m-2 bg-primary text-white p-2 rounded "
                >
                  -
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => cart.deleteFromCart(product.id)}
                className="bg-red-700 text-center text-white p-2 rounded-lg border-2 border-gray-900 "
              >
                Remove from cart
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={() => cart.addOneToCart(product.id)}
              className="bg-primary text-white p-2 m-4 rounded"
            >
              Add To Cart
            </button>
          </div>
        )}
      </article>
    </article>
  );
};

export default ProductCard;
