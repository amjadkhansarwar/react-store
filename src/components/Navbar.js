import {Button, Container, Navbar, Model} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
function NavbarComponent(){

    return(
        <Navbar expand= "sm">
            <Navbar.Brand href='/'>Ecommere Store</Navbar.Brand>
            <Navbar.Toggle />
            <NavbarCollapse className='justify-content-end'>
            <Button>Cart 0 Item</Button>
        </NavbarCollapse>
        </Navbar>
        
    )
}
export default NavbarComponent