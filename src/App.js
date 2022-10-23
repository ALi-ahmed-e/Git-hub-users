import './App.css';
import Card from './Components/Card';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

function App() {
  const [theme, settheme] = useState(localStorage.getItem('theme'));
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.setItem('theme', 'dark')
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }

  const themeswitch = () => {
    if (localStorage.getItem('theme') == 'dark') {
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark')
      settheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
      settheme('dark')
    }
  }

  return (
    <div className="App bg-slate-200 dark:bg-slate-900 h-screen overflow-hidden flex flex-col items-center justify-center ">
      <div className=' w-[95%] max-w-[600px] my-4'><span onClick={themeswitch}>{theme === 'dark' ? <SunIcon className=' w-6 dark:text-white cursor-pointer' /> : <MoonIcon className=' w-6 dark:text-white cursor-pointer' />}</span></div>
      <Card />
    </div>
  );
}

export default App;
