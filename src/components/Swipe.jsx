import { BsShare } from 'react-icons/bs';

import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoFlagOutline } from 'react-icons/io5';
import { iconsSocialNetworks } from '../data/data';
import { SocialNetworks } from './SocialNetworks';

export const Swipe = ({
  name,
  url = '',
  image = '',
  subTitle = '',
  text = '',
  menuSwipe,
  setMenuSwipe,
}) => {
  const [widthSection, setWidthSection] = useState(window.innerWidth - 56);

  useEffect(() => {
    const handleWidth = () => {
      setWidthSection(window.innerWidth - 56);
    };

    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  }, []);

  const handleClick = () => {
    setMenuSwipe(null);
  };

  return (
    <section className='w-full h-screen fixed bg-[#00000099]'>
      <section
        className='justify-center items-center flex-col gap-8 text-base text-black bg-white fixed bottom-0 w-full rounded-t-3xl pt-4'
        style={{ display: menuSwipe ? 'flex' : 'none' }}
      >
        <div className='relative w-full flex flex-col justify-center items-center'>
          <h3 className='font-bold'>Share link</h3>
          <div
            className='absolute right-4 rounded-lg hover:bg-[#f3f3f1] p-2'
            onClick={handleClick}
          >
            <IoMdClose />
          </div>
        </div>
        <section className='border-[1px] border-gray-[#ddd] w-3/4 min-h-24 flex flex-col justify-center items-center rounded-[30px] bg-[#dddddd73] hover:shadow-xl hover:scale-105 hover:duration-500 duration-500'>
          {image !== '' ? (
            <section className='flex justify-center flex-col gap-4 items-center p-5 bg-purple-950 text-white rounded-[30px] text-center'>
              <img
                src={image}
                alt='logo'
                className='object-cover w-28 h-28 p-2 rounded-2xl'
              />
              <h3 className='text-xl font-bold px-4'>{subTitle}</h3>
              <p className='text-xs px-6 font-semibold line-clamp-3 break-words text-start'>
                {text}
              </p>
              <button className='bg-[#FCFAF81A] py-1 px-3 rounded-xl text-xs hover:opacity-90'>
                More
              </button>
            </section>
          ) : (
            <></>
          )}
          {name === 'Our recipes' && (
            <h2 className='font-bold text-xl'>{name}</h2>
          )}
          {url !== '' && (
            <a
              href='#'
              className='text-ellipsis overflow-hidden w-1/2 whitespace-nowrap text-[13px] text-center'
            >
              {url}
            </a>
          )}
        </section>
        <section
          className='flex gap-4 items-center justify-start whitespace-nowrap overflow-y-hidden overflow-x-scroll pb-3 scroll__Styles md:justify-center'
          style={{ width: ` ${widthSection}px` }}
        >
          {iconsSocialNetworks.map((iconSocial, index) => (
            <SocialNetworks key={index} {...iconSocial} />
          ))}
        </section>
        <hr className='border-0 border-t-[1px] border-[#a8aaa2] w-full' />
        <section className='flex flex-col justify-center gap-5'>
          <div className='px-4'>
            <h4 className='font-bold'>Únete a artemistemplate en Linktree</h4>
            <p>
              Obtén tu propio Linktree gratis. El único enlace en bio en el que
              confían más de 50 millones de personas
            </p>
          </div>
          <div className='font-bold flex justify-around items-center flex-wrap gap-2 px-4'>
            <button className='bg-black text-white px-4 py-2 border-[1px] rounded-[30px]'>
              Regístrate gratis
            </button>
            <button className='bg-transparent border-[1px] border-gray-400 py-2 px-4 rounded-[30px] hover:border-transparent hover:bg-[#f6f7f5]'>
              Descubre más
            </button>
          </div>
        </section>
        <hr className='border-0 border-t-[1px] border-[#a8aaa2] w-full' />
        <section className='flex justify-start items-center w-full p-8 gap-3 text-[#676b5f] font-bold hover:bg-[#f6f7f5] -mt-8'>
          <IoFlagOutline />
          Report Linktree
        </section>
      </section>
    </section>
  );
};
