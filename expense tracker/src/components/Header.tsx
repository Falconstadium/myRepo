import trackerPic from '../img/hand-drawn-cartoon-money-illustration.png';
import { DropdownMenuRadioGroupDemo } from './LangToggle';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <>
      <header className="bg-white dark:bg-black flex justify-between items-center px-4 sm:px-12 lg:justify-around lg:px-0 border border-solid border-b-2 fixed top-0 left-0 w-full">
        <a href="/">
          <img className="w-[60px] h-[60px]" src={trackerPic} alt="tracker" />
        </a>
        <div className="flex gap-4 items-center">
          <DropdownMenuRadioGroupDemo />
          <ModeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;
