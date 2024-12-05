import React from 'react';
import st from './styles.module.css';
const Header = () => {
    return (
      <header className={st.header}>
        <div className={st.logo}>LOGO</div>
        <nav className={st.menu}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
export default Header;