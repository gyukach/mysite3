import { Link } from 'react-router-dom';
import '../../assets/style/common/Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="logo">MySite</Link>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-me">AboutMe</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/my-story">MyStory</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;