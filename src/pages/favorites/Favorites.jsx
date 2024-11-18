import React from "react";
import { useSelector } from "react-redux";
import FavoritesCard from "../../components/favoritesCard";
import Layout from "../../components/layout/layout";

const LikedProductsPage = () => {
  const likedProducts = useSelector((state) => state.likedProducts.items);

  return (
    <Layout>
      <div className="favorites-page container mx-auto mt-10">
        <h2>Liked Products</h2>
        <div className="favorites-list">
          {likedProducts.length > 0 ? (
            likedProducts.map((product) => (
              <FavoritesCard key={product.id} {...product} />
            ))
          ) : (
            <p>No liked products yet.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LikedProductsPage;
