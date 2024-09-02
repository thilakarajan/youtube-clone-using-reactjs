import logo from './assets/Black-YouTube-logo.png'
import './navbar.css'
import { FaSearch } from 'react-icons/fa'


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="menu-btn">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <div className="icon">
            <FaSearch className='search-icon' />
          </div>
        </div>
      </div>
    )
}
 
export default Navbar;