import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { removeFromLikedProducts } from "../features/likedProducts/likedProductsSlice";

const FavoritesCard = ({ id, img, title, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, img, title, price };
    dispatch(addToCart(product));
    dispatch(removeFromLikedProducts(id));
  };
  const handleRemove = () => {
    dispatch(removeFromLikedProducts(id));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow">
      <div className="flex items-center">
        <img
          src={img}
          alt={title}
          className="h-16 w-16 object-cover rounded mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-gray-600">${price}</p>
        </div>
      </div>
      <div>
      <button
        onClick={handleRemove}
        className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
      >
        Remove 
      </button>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        Add to Cart
      </button>

      </div>
    </div>
  );
};

export default FavoritesCard;
