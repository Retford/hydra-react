export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src='/hydra-react/hydra.webp' alt='hydra-logo' className='rounded-full' />
      <div className='flex justify-center items-center flex-col gap-2'>
        <h1 className='font-bold text-xl'>Hydra Juice</h1>
        <h4 className='font-normal text-sm'>Your daily dose of vitamin C</h4>
      </div>
    </div>
  );
};
