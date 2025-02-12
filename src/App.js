import { useEffect, useState } from 'react';
import './App.css';
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';

function App() {
  const heroData = [
    {text1: "Live Life", text2: "With Desires"},
    {text1: "Drive to", text2: "Your Dreams"},
    {text1: "Feel Speed", text2: "Feel Life"}
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
      />
    </div>
  );
}



export default App;
