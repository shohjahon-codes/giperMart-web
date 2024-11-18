const FilterSidebar = ({ brands, onFilterChange }) => {
    return (
      <aside className="border p-4 w-64">
        <h3 className="font-bold mb-4">Filter by Brand</h3>
        {brands.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              id={brand}
              name={brand}
              onChange={(e) => onFilterChange(brand, e.target.checked)}
            />
            <label htmlFor={brand} className="ml-2">{brand}</label>
          </div>
        ))}
      </aside>
    );
  };
  
  export default FilterSidebar;
  