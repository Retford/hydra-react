export const SocialNetworks = ({ IconComponent, label }) => {
  return (
    <section className='flex flex-col gap-2 items-center'>
      <div className='p-3 rounded-full border-[1px] border-gray-400'>
        <IconComponent size='24px' />
      </div>
      <p className='text-xs'>{label}</p>
    </section>
  );
};
