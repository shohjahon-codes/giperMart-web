import React from "react";
import Slider from "react-slick";
import { Card } from "../../components/card";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { useGetProductsByCategory } from "../../hooks/useGetProductsByCategory";
import { useFetchData } from "../../hooks/useFetchData";
import { Categories } from "../../components/categories";
import { Banner } from "../../components/slider/banner";
import { NextArrow } from "../../components/arrows";
import { PrevArrow } from "../../components/arrows";
import CardSkeleton from "../../components/cardSkeleton";


const HomePage = () => {
  const { data: categories, isLoading: isLoadingCategories } = useFetchData(
    "category",
    "category"
  );
  const { data: phones, isLoading: isLoadingPhones } =
    useGetProductsByCategory("tel");
  const { data: notebooks, isLoading: isLoadingNotebooks } =
    useGetProductsByCategory("notebook");

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Header />
      <Banner />
      <div className="container pt-10">
        {!isLoadingCategories && categories && categories.length > 0 ? (
          <Slider {...settings}>
            {categories?.map((item) => (
              <Categories key={item.id} {...item} />
            ))}
          </Slider>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>

      {/* Phones Section */}

      <div className="container pt-10">
        <h2>Phones</h2>
        {isLoadingPhones ? <CardSkeleton/> : ""}
        {!isLoadingPhones && Array.isArray(phones) ? (
          <Slider {...settings}>
            {phones.map((phone) => (
              <Card key={phone.id} {...phone} categoryKey="tel" />
            ))}
          </Slider>
        ) : (
          <h2>Loading phones...</h2>
        )}
      </div>
      {/* Notebooks Section */}
      <div className="container pt-10">
        <h2>Notebooks</h2>
        {!isLoadingNotebooks && Array.isArray(notebooks) ? (
          <Slider {...settings}>
            {notebooks.map((notebook) => (
              <Card key={notebook.id} {...notebook} categoryKey="notebook" />
            ))}
          </Slider>
        ) : (
          <h2>Loading notebooks...</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};


export default HomePage;