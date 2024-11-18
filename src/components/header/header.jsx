import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Phone } from "../../assets/icon/phone";
import logo from "../../assets/img/logo.png";
import { MyDropdown } from "./menu";
import { Search } from "../../assets/icon/search";
import { ProfileIcon } from "../../assets/icon/profile";
import { LikeIcon } from "../../assets/icon/like";
import { CartIcon } from "../../assets/icon/cartIcon";
import useDebounce from "../../hooks/useDebounce";
import { logout } from "../../features/authentication/authenticationSlice";
import LogoutModal from "../LogoutModal";
import { useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { SearchCard } from "../SearchCard";
import { SearchSkeleton } from "../../skeleton/SearchSkeleton";

export const Header = () => {
  const checker = true;
  const [value, setValue] = React.useState("");
  const search = useDebounce(value);
  const { data, isLoading } = useSearch(search);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const likedProducts = useSelector((state) => state.likedProducts.items);
  const cartItems = useSelector((state) => state.cart.items);

  const handleLogoutConfirm = () => {
    dispatch(logout());
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="nav_bar flex justify-end items-center gap-4 p-1">
          <Link to="/delivery-and-payment">Доставка и оплата</Link>
          <Link to="/pickup-points">Пункты выдачи</Link>
          <Link to="/support">Поддержка</Link>
          <Phone />
          <a href="tel:+998902537753">+998 90 253 77 53</a>
        </div>
        <div className="flex pt-5 justify-between items-center">
          <Link to="/">
            <img className="w-[200px] mr-10" src={logo} alt="Logo" />
          </Link>
          <MyDropdown />
          <div className="pl-8 relative w-full">
            <input
              className="border border-gray-600 h-10 w-full pl-2"
              placeholder="Поиск"
              onChange={(e) => setValue(e.target.value)}
              type="text"
            />
            <div className="absolute top-0 right-0 flex items-center justify-center w-7 h-full">
              <Search />
            </div>
            <div className="absolute z-10">
              {isLoading ? (
                <SearchSkeleton />
              ) : (
                value.length > 1 &&
                (data?.length > 0 ? (
                  data.map((item) => <SearchCard key={item.id} {...item} />)
                ) : (
                  <div>No results found.</div>
                ))
              )}
            </div>
          </div>
          <div className="flex gap-10 pl-10">
            <div className="flex flex-col items-center">
              <ProfileIcon />
              {isAuthenticated ? (
                <button onClick={() => setIsLogoutModalOpen(true)}>
                  Logout
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <LogoutModal
                isOpen={isLogoutModalOpen}
                onCancel={() => setIsLogoutModalOpen(false)}
                onConfirm={handleLogoutConfirm}
              />
            </div>
            <Link to="/favorites">
              <div className="flex flex-col items-center relative">
                <LikeIcon />
                {likedProducts.length > 0 && (
                  <span className="absolute -top-1 right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {likedProducts.length}
                  </span>
                )}
                Избранное
              </div>
            </Link>
            <Link to="/cart">
              <div className="flex flex-col items-center relative">
                <CartIcon />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 right-2 bg-red-500 text-white text-xs rounded-full px-2">
                    {cartItems.length}
                  </span>
                )}
                Корзина
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
