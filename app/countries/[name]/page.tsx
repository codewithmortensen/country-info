import { buttonVariants } from '@/app/components/ui/button';
import Link from 'next/link';

import axios from 'axios';
import Image from 'next/image';

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: { native: { official: string; common: string } };
  };
  independent: Boolean;
  capital: string[];
  region: string;
  subregion: string;
  languages: {};
  population: number;
  flags: { svg: string; alt: string };
  borders: string[];
  currencies: { currency: { name: string } };
  tld: string[];
}

interface Props {
  params: { name: string };
}

const CountryDetail = async ({ params }: Props) => {
  const country = await axios
    .get<Country[]>(`https://restcountries.com/v3.1/name/${params.name}`)
    .then((res) => res.data);

  return (
    <div className='max-w-screen-lg mx-auto mt-10'>
      <Link href='/countries' contextMenu={buttonVariants()}>
        Back
      </Link>
      <div className='mt-10'>
        {country.map((item) => (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10' key={1}>
            <div>
              <Image
                alt={item.flags.alt ? item.flags.alt : item.name.common}
                src={item.flags.svg}
                width={400}
                height={0}
              />
            </div>
            <div className='grid grid-cols-2 mt-10 gap-5'>
              <div>
                <article>
                  <p className='font-bold text-2xl mb-5'>{item.name.common}</p>
                  <p className='font-medium text-sm'>
                    native name:
                    <span className='text-xs font-light	'>
                      {item.name.official}
                    </span>
                  </p>
                  <p className='font-medium text-sm space-x-2'>
                    Population:
                    <span className='text-xs font-light	'>
                      {item.population}
                    </span>
                  </p>
                  <p className='font-medium text-sm'>
                    Region:{' '}
                    <span className='text-xs font-light	'>{item.region}</span>
                  </p>
                  <p className='font-medium text-sm'>
                    Sub Region:{' '}
                    <span className='text-xs font-light	'>{item.subregion}</span>{' '}
                  </p>
                  <p className='font-medium text-sm'>
                    Capital:{' '}
                    <span className='text-xs font-light	'>{item.capital}</span>{' '}
                  </p>
                </article>
              </div>
              <div>
                <p className='font-medium text-sm mt-12'>
                  Top Level Domain:{' '}
                  <span className='text-xs font-light	'>{item.tld}</span>{' '}
                </p>{' '}
                <p className='font-medium text-sm'>
                  Currencies:{' '}
                  <span className='text-xs font-light	'>
                    {/* {item.currencies.currency.name} */}
                  </span>{' '}
                </p>
                <p className='font-medium text-sm'>
                  Languages:{' '}
                  <span className='text-xs font-light	'>{item.capital}</span>{' '}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetail;
