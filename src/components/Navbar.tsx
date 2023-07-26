import Image from 'next/image';
import CartIcon from './CartIcon';
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
  const user = false;
  return (
    <div className="text-red-500 p-4 h-12 md:h-24 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      <div className="hidden md:flex flex-1 gap-4">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Caffino</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>

      <div className="hidden md:flex gap-4 items-center justify-end flex-1 ">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>987 564 3210</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
