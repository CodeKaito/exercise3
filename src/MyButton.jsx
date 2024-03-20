import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { ThemeContext } from './context/ThemeContextProvider';

function MyButton() {

    const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Cambia tema</Button>
    </div>
  )
}

export default MyButton
