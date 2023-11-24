'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from './ui/input';

const CountrySearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const url = new URLSearchParams();
  if (params.get('region')) url.append('region', params.get('region')!);
  return (
    <div className='w-[20rem] md:w-[30rem]'>
      <span className='flex items-center border rounded-md px-3'>
        <Search size={15} className='text-mute-foreground' />
        <Input
          placeholder='Search For Country'
          className='focus:outline-none border-none focus:border-0'
          onChange={(event) => {
            // router.push(`countries?name=${event.target.value}`);
            const name = event.target.value ? event.target.value : '';
            const query = event.target.value;
            console.log(url.toString());
          }}
        />
      </span>
    </div>
  );
};

export default CountrySearch;
