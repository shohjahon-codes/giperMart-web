import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../../components/cartItem";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/layout";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/cart-summary" } });
    } else {
      navigate("/cartsummary");
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("uz-UZ", {
      style: "currency",
      currency: "UZS",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price.replace(/\s+/g, ""));
    const quantity = Number(item.quantity);
    return acc + price * quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((acc, item) => {
    const quantity = Number(item.quantity);
    return acc + quantity;
  }, 0);

  const formattedTotalPrice = formatCurrency(totalPrice);

  return (
    <Layout>
      <div className="cart-page container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Корзина</h2>
        <div className="flex justify-between">
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div>
            <div className=" flex flex-col bg-[#F7F7F7] w-[240px]">
              <h2 className="pl-3 pt-2 text-2xl pb-2">В корзине</h2>
              <p className="pl-3">Товаров: {totalQuantity} </p>
              <input
                placeholder="Введите промокод"
                type="text"
                className="bg-[#F7F7F7] placeholder:text-red-600 border-none"
              />
              <span className="font-bold pl-3 pb-3">{formattedTotalPrice}</span>

              <button
                onClick={handleProceedToCheckout}
                className="bg-[#FEEE00] py-3"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
