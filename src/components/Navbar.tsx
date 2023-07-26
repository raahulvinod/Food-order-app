import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="text-red-500 p-4 h-12 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      <div className="text-lg">
        <Link href="/">Caffino</Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
