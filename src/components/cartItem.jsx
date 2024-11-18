import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import {
  incrementQuantity,
  decrementQuantity,
} from "../features/cart/cartSlice";
import { SaveMini } from "../assets/icon/saveMini";
import { DeleteMini } from "../assets/icon/DeleteMini";
import { toggleLike } from "../features/likedProducts/likedProductsSlice";

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const likedProducts = useSelector((state) => state.likedProducts.items);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(likedProducts.some((product) => product.id === id));
  }, [id, likedProducts]);

  const handleToggleLike = (event) => {
    event.stopPropagation();
    dispatch(toggleLike({ id, img, title, name, price }));
  };

  return (
    <div className="flex items-center w-[960px] justify-between p-4 border-b border-gray-200 ">
      <div className="flex-shrink-0 mr-4">
        <img
          src={img}
          alt={title}
          className="h-[140px] w-[140px] object-cover rounded"
        />
      </div>
      <div className="flex-grow">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="flex items-center">
          <button
            onClick={handleToggleLike}
            className=" text-[#999999] mr-6 flex items-center gap-1"
          >
            <SaveMini />
            {isLiked ? " Удалить из Избранного " : "В избранное"}
          </button>
          <button
            onClick={handleRemoveFromCart}
            className="text-[#999999] flex items-center gap-1 "
          >
            <DeleteMini />
            Удалить
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <h2 className="font-bold text-xl mb-8 text-nowrap">{price} Сум</h2>
          <div className="bg-[#EDEDED] flex items-center justify-between max-w-[140px] px-1">
            <button
              onClick={() => dispatch(decrementQuantity(id))}
              className="bg-white px-3 py-1"
            >
              <span className="text-[#C4C4C4] text-xl">-</span>
            </button>
            <span className="px-1">{quantity}</span>
            <button
              onClick={() => dispatch(incrementQuantity(id))}
              className="bg-white px-3 py-1"
            >
              <span className="text-[#C4C4C4] text-xl">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
