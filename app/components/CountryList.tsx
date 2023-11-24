import axios from 'axios';
import CountryCard from './CountryCard';

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
  name: string;
  region: string;
}
const CountryList = async ({ name, region }: Props) => {
  const countries = await axios
    .get<Country[]>('https://restcountries.com/v3.1/all')
    .then((res) => res.data);

  const regionFilter = region
    ? await axios
        .get<Country[]>(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.data)
    : countries;

  const searchFilter = name
    ? regionFilter.filter((country) => country.name.common.includes(name))
    : regionFilter;

  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center'>
      {searchFilter.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name}
          region={country.region}
          capital={country.capital}
          population={country.population}
          flags={country.flags}
        ></CountryCard>
      ))}
    </div>
  );
};

export default CountryList;
