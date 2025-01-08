import { useState, useEffect } from 'react';
import { Lightbulb, LightbulbOff } from 'lucide-react';

export default function ModeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <LightbulbOff size={10} color="black" className="w-6 h-6" />
        ) : (
          <Lightbulb size={10} color="yellow" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
