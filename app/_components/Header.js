import Navigation from '@/app/_components/navegacion';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;