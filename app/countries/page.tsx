'use client';

import FilterAction from '../components/FilterAction';
import CountryList from '../components/CountryList';
import { useSearchParams } from 'next/navigation';

const CountryPage = () => {
  const params = useSearchParams();
  const region = params.get('region') ? params.get('region') : '';
  const name = params.get('name') ? params.get('name') : '';

  return (
    <div className='max-w-[450px] md:max-w-screen-lg mx-auto mt-10 px-5 md:px-1'>
      <FilterAction />
      <CountryList name={name!} region={region!} />
    </div>
  );
};

export default CountryPage;
