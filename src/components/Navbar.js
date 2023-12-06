import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/developers'>Developers</Link>
                </li>
                <li>
                    <Link to='/addDeveloper'>Add one</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;