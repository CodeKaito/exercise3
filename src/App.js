import { useState } from 'react';
import './App.css';
import MyNavbar from './MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <>
      <MyNavbar theme={theme} onClick={setTheme} />
    </>
  );
}

export default App;
