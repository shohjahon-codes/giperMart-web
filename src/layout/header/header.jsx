import React from "react";
import { PhoneIcon } from "../../assets/icon/phone-icon";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import { Catolog } from "./components/catolog/catolog";
import { Search } from "./components/search/search";
import { UserIcon } from "../../assets/icon/user-icon";
import { ShoppingCartIcon } from "../../assets/icon/shopping-cart-icon";
import { LikeIcon } from "../../assets/icon/like-icon";
import { MenuIcon } from "../../assets/icon/menu-icon";
import { useGetCatologQuery } from "../../redux/service/catolog-get";
import { CardModal } from "../../components/card-modal/card-modal";
import { XIcon } from "../../assets/icon/x-icon";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LikeRed } from "../../assets/icon/like-red";

export const Header = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  const like = useSelector((state) => state?.product?.like);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const counter = useSelector((state) => state.product.product);
  const length = counter.length;
  const { data, isLoading } = useGetCatologQuery();

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm shadow-basalt-grey">
      <div className="container flex hidden items-center justify-end gap-[24px] py-2 md:flex">
        <a
          className=" text-base font-normal text-sys-light-on-surface"
          href="#"
        >
          Доставка и оплата
        </a>
        <a
          className=" text-base font-normal text-sys-light-on-surface"
          href="#"
        >
          Пункты выдачи
        </a>
        <a
          className=" text-base font-normal text-sys-light-on-surface"
          href="#"
        >
          Поддержка
        </a>
        <a
          className="flex items-center gap-4 text-base font-normal text-sys-light-on-surface"
          href="tel:+998 90 253 77 53"
        >
          <PhoneIcon /> +998 90 253 77 53
        </a>
      </div>
      <div className="container flex gap-4 py-[18px]">
        <div className="flex items-center gap-[32px] ">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="hidden md:block">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center bg-aureolin py-[10px] pl-[12px] pr-[45px]"
            >
              {isOpen ? <XIcon /> : <MenuIcon />} Каталог
            </button>
            {!isLoading && (
              <Catolog isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-wrap items-center justify-center gap-[92px]">
                  {data?.map((item) => (
                    <CardModal key={item.id} {...item} setIsOpen={setIsOpen} />
                  ))}
                </div>
              </Catolog>
            )}
          </div>
        </div>
        <div className="hidden grow md:block">
          <Search />
        </div>
        <div className="flex hidden items-center gap-[20px] md:flex">
          <Link
            to={"/user"}
            className="flex flex-col items-center text-base font-normal text-sys-light-on-surface"
          >
            <UserIcon /> Профиль
          </Link>
          <Link
            to={"/likes"}
            className="flex flex-col items-center text-base font-normal text-sys-light-on-surface"
          >
            {like?.length ? <LikeRed /> : <LikeIcon />} Избранное
          </Link>
          <Link
            to={"/user/basket"}
            className="relative flex flex-col items-center text-base font-normal text-sys-light-on-surface"
          >
            <ShoppingCartIcon /> Корзина
            <span className="absolute right-[8px] top-[-13px] rounded-full bg-bloodthirsty-warlock px-[5px] py-[2px] text-xs font-medium text-white">
              {length}
            </span>
          </Link>
        </div>
        {/* Mobile version */}
        <div className="w-full  flex gap-4 md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center bg-aureolin  py-[10px] pl-[12px] pr-[45px]"
          >
            {isOpen ? <XIcon /> : <MenuIcon />} Каталог
          </button>
        </div>
      </div>
    </div>
  );
};
