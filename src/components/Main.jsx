import { BsThreeDotsVertical } from 'react-icons/bs';
import '@justinribeiro/lite-youtube';

export const Main = ({
  name,
  url,
  image,
  subTitle,
  text,
  videoId,
  menuSwipe,
  setMenuSwipe,
  movie,
  setMovie,
}) => {
  const handleNameClick = () => {
    setMovie((prev) =>
      prev && movie.name === name ? null : { name, videoId }
    );
  };

  const handleMenuClick = () => {
    setMenuSwipe(
      menuSwipe && menuSwipe.name === name
        ? null
        : { name, url, image, subTitle, text }
    );
  };

  return (
    <>
      <section
        className='relative bg-white text-black text-base rounded-[30px] w-72 flex justify-center items-center border-2 border-white hover:border-white hover:bg-transparent hover:text-white duration-700'
        style={{ height: movie && movie.name === name ? '170px' : '64px' }}
      >
        <a href='#' onClick={handleNameClick}>
          {name}
        </a>
        {movie && movie.name === name && (
          <lite-youtube
            videoid={movie.videoId}
            style={{
              position: 'absolute',
              padding: 0,
              borderRadius: '30px',
              inset: 0,
              height: '100%',
              zIndex: 1,
            }}
          />
        )}
        <button
          onClick={handleMenuClick}
          className='absolute right-5 hover:bg-[#ffffff1a] rounded-full p-1'
        >
          <BsThreeDotsVertical />
        </button>
      </section>
      {movie && movie.name === name && (
        <button
          onClick={handleNameClick}
          className='flex justify-center items-center px-4 py-2 rounded-full border-2 border-solid border-transparent bg-white opacity-75 text-black hover:opacity-100 hover:duration-1000 duration-1000'
        >
          x
        </button>
      )}
    </>
  );
};
