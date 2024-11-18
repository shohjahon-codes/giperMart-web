import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import { useQuery } from '@tanstack/react-query';
import { Card } from '../components/card';
import Layout from '../components/layout/layout';


const fetchCategoryProducts = async ({ queryKey }) => {
  const [_key, datakey] = queryKey;
  const response = await fetch(`http://localhost:3000/${datakey}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const CategoryProductsPage = () => {
  const { datakey } = useParams();
  const [filteredBrands, setFilteredBrands] = useState(new Set());
  const [brandOptions, setBrandOptions] = useState([]);

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['categoryProducts', datakey],
    queryFn: fetchCategoryProducts
  });


  useEffect(() => {
    const brands = products ? Array.from(new Set(products.map(product => product.brand))) : [];
    setBrandOptions(brands);
  }, [products]);

  const handleFilterChange = (brand, isChecked) => {
    const newFilteredBrands = new Set(filteredBrands);
    isChecked ? newFilteredBrands.add(brand) : newFilteredBrands.delete(brand);
    setFilteredBrands(newFilteredBrands);
  };

  const filteredProducts = products?.filter(product =>
    filteredBrands.size > 0 ? filteredBrands.has(product.brand) : true
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <Layout> 
      <div className='container'>
    <div className="flex">
      <FilterSidebar brands={brandOptions} onFilterChange={handleFilterChange} />
      <div className="flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default CategoryProductsPage;