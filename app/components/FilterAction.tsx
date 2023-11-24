import React from 'react';
import CountrySearch from './CountrySearch';
import RegionFilter from './RegionFilter';

const FilterAction = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row md:justify-between md:items-center px-2 sm:px-0'>
      <CountrySearch />
      <RegionFilter />
    </div>
  );
};

export default FilterAction;
