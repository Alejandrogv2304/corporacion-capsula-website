// import Navegacion from '@/app/_components/navegacion';
// import Logo from '@/app/_components/Logo';

// function Header() {
//   return (
//     <header className='border-b border-primary-900 px-8 py-5'>
//       <div className='flex justify-between items-center max-w-7xl mx-auto'>
//         <Logo />
//         <Navegacion />
//       </div>
//     </header>
//   );
// }

// export default Header;
import Navegacion from '@/app/_components/navegacion';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-y-4 md:gap-y-0">
        <Logo />
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;