import { BsThreeDotsVertical } from 'react-icons/bs';

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
  const handleClick = () => {
    // setMenuSwipe(menuSwipe === name ? null : name);
    setMenuSwipe(
      menuSwipe && menuSwipe.name === name
        ? null
        : { name, url, image, subTitle, text, videoId }
    );
  };

  const handleMovie = () => {
    setMovie(!movie);
  };

  return name !== 'Our recipes' ? (
    <section className='relative bg-white h-16 text-black text-base rounded-[30px] w-72 flex justify-center items-center border-2 border-white hover:border-white hover:bg-transparent hover:text-white'>
      <a href='#'>{name}</a>
      <button
        onClick={handleClick}
        className='absolute right-5 hover:bg-[#ffffff1a] rounded-full p-1'
      >
        <BsThreeDotsVertical />
      </button>
    </section>
  ) : (
    <>
      <section
        className='relative bg-white text-black text-base rounded-[30px] w-72 flex justify-center items-center border-2 border-white hover:border-white hover:bg-transparent hover:text-white duration-700'
        style={{ height: movie ? '170px' : '64px' }}
      >
        {name !== 'Our recipes' ? (
          <a href='#'>{name}</a>
        ) : (
          <a href='#' onClick={handleMovie}>
            {name}
          </a>
        )}
        {name === 'Our recipes' && movie === true && (
          <lite-youtube
            // className='aspect-video p-0 absolute rounded-[30px] top-0 left-0 right-0 bottom-0 h-full'
            videoid={videoId}
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
          onClick={handleClick}
          className='absolute right-5 hover:bg-[#ffffff1a] rounded-full p-1'
        >
          <BsThreeDotsVertical />
        </button>
      </section>
      {movie && (
        <button
          onClick={handleMovie}
          className='flex justify-center items-center px-4 py-2 rounded-full border-2 border-solid border-transparent bg-white opacity-75 text-black hover:opacity-100 hover:duration-1000 duration-1000'
        >
          x
        </button>
      )}
    </>
  );
};
