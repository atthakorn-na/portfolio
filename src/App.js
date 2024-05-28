import React from 'react';
import Landing from './features/landing';
import { ThemeProvider, useTheme } from '../src/features/ThemeContext';


import './App.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Landing />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
