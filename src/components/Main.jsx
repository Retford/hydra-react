import { BsThreeDotsVertical } from 'react-icons/bs';

export const Main = ({
  name,
  url = '',
  image = '',
  subTitle = '',
  text = '',
  menuSwipe,
  setMenuSwipe,
}) => {
  const handleClick = () => {
    // setMenuSwipe(menuSwipe === name ? null : name);
    setMenuSwipe(
      menuSwipe && menuSwipe.name === name
        ? null
        : { name, url, image, subTitle, text }
    );
  };

  return (
    <section className='relative h-16 bg-white text-black text-base rounded-[30px] w-72 flex justify-center items-center border-2 border-white hover:border-white hover:bg-transparent hover:text-white '>
      <a href='#'>{name}</a>
      <button
        onClick={handleClick}
        className='absolute right-5 hover:bg-[#ffffff1a] rounded-full p-1'
      >
        <BsThreeDotsVertical />
      </button>
    </section>
  );
};
