'use client';

import { sort } from 'fast-sort';
import { useRouter, useSearchParams } from 'next/navigation';
import { regions } from './regions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const RegionFilter = () => {
  const router = useRouter();

  const sortedRegions = sort(regions).asc((region) => region.label);
  const params = useSearchParams();

  return (
    <Select
      onValueChange={(region) => {
        const value = !region || region == 'all' ? '' : `?region=${region}`;
        router.push(`countries${value}`);
      }}
      defaultValue={params.get('region') ? params.get('region')! : 'all'}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Filter By Region' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='all'>All</SelectItem>
        {sortedRegions.sort().map((region) => (
          <SelectItem key={region.id} value={region.value}>
            {region.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RegionFilter;
