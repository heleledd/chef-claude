import chefImage from '../assets/chef-claude.png';
import '../styles/Header.css';

export default function Header() {
    return (
        <header>
            <img src={chefImage} alt="Chef Claude" className="headerImage" />
            <span>Chef Claude</span>
        </header>
    )
}