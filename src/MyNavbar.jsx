import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap';
import MyButton from './MyButton';
import { ThemeContext } from './context/ThemeContextProvider';

function MyNavbar() {
    const { theme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme} variant={theme}>
        <Container>
            <Navbar.Brand>
             <img src="https://epicode.com/wp-content/uploads/2022/06/EPICODE-2.0-LOGO-15.png" width={130} height={30} className='d-inline-block align-top' alt="" />
            </Navbar.Brand>
            <MyButton/>
        </Container>
    </Navbar>
  )
}

export default MyNavbar;
