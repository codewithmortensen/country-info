import Link from 'next/link';
import CountryList from './components/CountryList';
import FilterAction from './components/FilterAction';
import { cn } from './lib/utils';
import { buttonVariants } from './components/ui/button';

const HomePage = () => {
  return (
    <div className='max-w-[450px] md:max-w-screen-lg mx-auto mt-10 px-5 md:px-1'>
      <Link href='/countries' className={`${cn(buttonVariants)}`}>
        All countries
      </Link>
    </div>
  );
};

export default HomePage;
