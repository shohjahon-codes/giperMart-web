import React from "react";
import { useNavigate } from "react-router-dom";

export const SearchCard = ({ id, img, title }) => {
  const navigate = useNavigate();

  const navigateToProductDetail = () => {
    navigate(`/all/${id}`);
  };

  return (
    <div
      className="flex items-center p-2 bg-white shadow-md hover:bg-gray-100 cursor-pointer w-[705px]"
      onClick={navigateToProductDetail}
    >
      <div className="flex-shrink-0">
        <img src={img} alt={title} className="h-10 w-10 object-cover rounded-full" />
      </div>
      <div className="flex-grow">
        <h2 className="text-sm font-medium">{title}</h2>
      </div>
    </div>
  );
};
