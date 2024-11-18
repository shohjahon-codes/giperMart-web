
import React from "react";
import { Link } from "react-router-dom";

export const Categories = ({ id, title, img, datakey }) => {
  return (
    <Link to={`/category/${datakey}`} className="bg-[#F6F6F6] flex items-center mx-5">
      <img className="w-1/2" src={img} alt={title} />
      <h2 className="w-1/2">{title}</h2>
    </Link>
  );
};