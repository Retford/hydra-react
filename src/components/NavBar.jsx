import { IoLogoInstagram } from 'react-icons/io5';
import { RiYoutubeLine, RiTiktokLine } from 'react-icons/ri';

export const NavBar = () => {
  return (
    <div className='flex justify-center gap-8 items-center'>
      <IoLogoInstagram size='32px' className='hover:scale-110'/>
      <RiTiktokLine size='32px' className='hover:scale-110'/>
      <RiYoutubeLine size='32px' className='hover:scale-110'/>
    </div>
  );
};
