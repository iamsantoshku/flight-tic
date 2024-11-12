import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../helpers/planeCategory';

import { BACKENDURL } from '../Config/Config';

import FlightList from './flight/FlightList';

const SortCategory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll('category');

  // Create an object to track selected categories based on URL.
  const urlCategoryListObject = {};
  urlCategoryListinArray.forEach((el) => {
    urlCategoryListObject[el] = true;
  });

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
  const [filterCategoryList, setFilterCategoryList] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
        const filterfl = BACKENDURL + "/api/v1/flights/filter-flight";
      const response = await fetch(filterfl, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          category: filterCategoryList,
        }),
      });
      const dataResponse = await response.json();
      setData(dataResponse?.data || []);
    } catch (error) {
      console.error('Error fetching flight:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;

    setSelectCategory((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  // Update the filtered category list and navigate to the updated URL.
  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .filter((categoryKey) => selectCategory[categoryKey]);

    setFilterCategoryList(arrayOfCategory);

    // Format the query parameters for the URL.
    const queryString = arrayOfCategory.map((el) => `category=${el}`).join('&');
    navigate(`/search?${queryString}`);
  }, [selectCategory]);

  // Fetch data whenever the filtered category list updates.
  useEffect(() => {
    fetchData();
  }, [filterCategoryList]);

  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;
    setSortBy(value);

    if (value === 'asc') {
      setData((prev) => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
    }

    if (value === 'dsc') {
      setData((prev) => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
    }
  };

  return (
    <div className='container mx-auto p-4'>
      {/* Mobile and Desktop version */}
      <div className='grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-4'>
        {/* Left side (Filters)overflow-y-scroll  */ }
        <div className='bg-gray-100 rounded-lg p-2 w-[15vw] lg:min-h-[calc(50vh-120px)]'>
          {/* Sort by */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
              Sort by
            </h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='sortBy'
                  checked={sortBy === 'asc'}
                  onChange={handleOnChangeSortBy}
                  value='asc'
                />
                <label>Price - Low to High</label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='sortBy'
                  checked={sortBy === 'dsc'}
                  onChange={handleOnChangeSortBy}
                  value='dsc'
                />
                <label>Price - High to Low</label>
              </div>
            </form>
          </div>

          {/* Filter by */}
          <div className=''>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>
              Category
            </h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              {productCategory.map((categoryName, index) => (
                <div className='flex items-center gap-3' key={index}>
                  <input
                    type='checkbox'
                    name='category'
                    checked={selectCategory[categoryName?.value] || false}
                    value={categoryName?.value}
                    id={categoryName?.value}
                    onChange={handleSelectCategory}
                  />
                  <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                </div>
              ))}
            </form>
          </div>
        </div>

        
      <div className='ml-10'>
        <h1 className="text-2xl font-bold text-center mr-20">Flight Search Results</h1>
      <FlightList />
    </div>
      </div>
    </div>
  );
};

export default SortCategory;





