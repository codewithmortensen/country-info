import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

import image from '@/public/flg.svg';

import Image from 'next/image';
import Link from 'next/link';

interface Props {
  flags: { svg: string; alt: string };
  name: { common: string; official: string };
  region: string;
  capital: string[];
  population: number;
}

const CountryCard = ({ flags, name, region, capital, population }: Props) => {
  return (
    <Card>
      <CardHeader className=' p-2  mb-3 shadow-orange-50'>
        <Link href={`/countries/${name.common}`}>
          <Image
            src={flags.svg}
            alt={flags.alt ? flags.alt : `flag of ${name.common}`}
            width={400}
            height={200}
            className='rounded-sm w-full shadow-md mx-h-4 overflow-hidden'
          />
        </Link>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-lg mb-3'>{name.common}</CardTitle>
        <p className='text-xs'>Population: {population}</p>
        <p className='text-xs'>Region: {region}</p>
        <p className='text-xs'>Capital: {capital}</p>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
