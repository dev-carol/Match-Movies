import {Link} from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { Nav, TitleMatch, Form, Input, Button } from './styles';

const Navbar = () => {
    return (
        <Nav id="navbar">
        <TitleMatch>
          <Link to="/"><BiCameraMovie/>Match Movies</Link>
        </TitleMatch>
        <Form>
            <Input type="text" placeholder="Busque um filme"/>
            <Button type='submit'>
                <BiSearchAlt2/>

            </Button>
        </Form>

      </Nav>
    )
}

export default Navbar;

