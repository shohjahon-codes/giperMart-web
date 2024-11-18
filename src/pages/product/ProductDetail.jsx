import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDetail } from "../../hooks/useFetchDetail";
import Layout from "../../components/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikedProducts } from "../../features/likedProducts/likedProductsSlice";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { categoryKey, id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useFetchDetail(categoryKey, id);

  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product?.id);
  

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details: {error.message}</div>;

  const handleCartClick = (event) => {
    event.stopPropagation();
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };
  console.log(cartItems);
  console.log(isInCart);
  console.log(product.id);
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.title}
              className="max-w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg mb-4">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-lg mb-4">
              <strong>Price:</strong> {product.price} Сум
            </p>
            <p className="text-gray-700 mb-4">
              {product.description || "No detailed description available."}
            </p>
            <button
              onClick={handleCartClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              {isInCart ? "Delete from Cart"  : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
