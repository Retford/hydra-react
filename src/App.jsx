import { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { NavBar } from './components/NavBar';
import { Swipe } from './components/Swipe';
import { mainButtons } from './data/data';

function App() {
  const [menuSwipe, setMenuSwipe] = useState(null);

  return (
    <section className='bg-image bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center text-white !font-DMS gap-8'>
      <Header />
      <NavBar />
      <section className='flex flex-col items-center justify-center gap-4'>
        {mainButtons.map((mainButton, i) => (
          <Main
            key={i}
            {...mainButton}
            setMenuSwipe={setMenuSwipe}
            menuSwipe={menuSwipe}
          />
        ))}
      </section>
      {menuSwipe && (
        <Swipe
          name={menuSwipe.name}
          url={menuSwipe.url}
          image={menuSwipe.image}
          subTitle={menuSwipe.subTitle}
          text={menuSwipe.text}
          setMenuSwipe={setMenuSwipe}
          menuSwipe={menuSwipe}
        />
      )}
    </section>
  );
}

export default App;
