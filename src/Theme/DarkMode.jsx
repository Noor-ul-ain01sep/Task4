import { useState, useEffect } from 'react';
import { Switch } from 'antd';
import PropTypes from 'prop-types';

const DarkMode = ({ onThemeChange }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const handleThemeChange = (checked) => {
    const newTheme = checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to local storage
    console.log(`Switched to ${newTheme} theme`);
    onThemeChange(newTheme);
  };

  // Set initial theme based on local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      onThemeChange(storedTheme);
    }
  }, [onThemeChange]);

  return (
    <Switch
      defaultChecked={theme === 'dark'}
      onChange={handleThemeChange}
    />
  );
};

export default DarkMode;
DarkMode.propTypes = {
    onThemeChange: PropTypes.func.isRequired,
  };
  