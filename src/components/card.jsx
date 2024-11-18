import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLike } from "../features/likedProducts/likedProductsSlice";
import { LikeIcon } from "../assets/icon/like";
import FilledHeartIcon from "../assets/icon/filledheart";
import { CartLogo } from "../assets/icon/cartLogo";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { TrashIcon } from "../assets/icon/trash";

export const Card = ({ id, img, title, name, price, categoryKey }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const likedProducts = useSelector((state) => state.likedProducts.items);
  const cartItems = useSelector((state) => state.cart.items);
  const [isLiked, setIsLiked] = useState(false);
  const isInCart = cartItems.some((item) => item.id === id);

  useEffect(() => {
    setIsLiked(likedProducts.some((product) => product.id === id));
  }, [id, likedProducts]);

  const handleToggleLike = (event) => {
    event.stopPropagation();
    dispatch(toggleLike({ id, img, title, name, price }));
  };

  const handleCartClick = (event) => {
    event.stopPropagation();
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ id, img, title, name, price }));
    }
  };

  const navigateToProductDetail = () => {
    navigate(`/${categoryKey}/${id}`);
  };
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative bg-white cursor-pointer h-[300px]"
      onClick={navigateToProductDetail}
    >
      <span className="absolute top-0 left-0 bg-green-500 text-white text-xs py-1 px-3 rounded-br-full">
        New
      </span>
      <div className="absolute top-0 right-0 p-2">
        <button onClick={handleToggleLike} className="focus:outline-none">
          {isLiked ? <FilledHeartIcon /> : <LikeIcon />}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[165px] h-[165px]" src={img} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base truncate">{title}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className=" rounded-full px-3 py-1 text-sm font-semibold text-gray-900 text-nowrap">{`${price} Сум`}</span>
        <button
          onClick={handleCartClick}
          className=" bg-[#FEEE00] flex items-center px-3 py-1 text-sm font-semibold text-gray-900 focus:outline-none ml-2"
        >
          {isInCart ? <TrashIcon /> : <CartLogo />}
        </button>
      </div>
    </div>
  );
};
