import React, { useState, useEffect } from 'react';
import './Nav.css';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import FeatherIcon from 'feather-icons-react';

// the limit of window.innerWidth that triggers the switch between NavDesktop and NavMobile.
const WIDTH_LIMIT = 705;

const tabsContent = [
  { icon: 'home', name: 'Home' },
  { icon: 'slack', name: 'Team' },
  { icon: 'github', name: 'Projects' }
];

const Tab = ({ display }) => {
  const [active, setActive] = useState('Home');
  return tabsContent.map((content, index) => (
    <li key={index} style={{ display: display }}>
      <a
        href={`#${content.name}`}
        onClick={() => {
          console.log(active);
          setActive(content.name);
        }}
        className={active === content.name ? 'active' : null}
      >
        <FeatherIcon icon={content.icon} size={32} />
        <span className='tab-name'>{content.name}</span>
      </a>
    </li>
  ));
};

const MobileMenuBtn = ({ isMobileMenuOpen, setMobileMenu }) => {
  const toggleMobileMenu = () => setMobileMenu(!isMobileMenuOpen);

  return (
    <div
      className={'mobile-menu-btn' + (isMobileMenuOpen ? ' change' : '')}
      onClick={toggleMobileMenu}
    >
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  );
};

const Nav = ({ windowWidth }) => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  useEffect(() => setMobileMenu(false), [windowWidth]);

  return (
    <div id='nav'>
      <div className='left-header'>
        <Logo style={{ width: '20%', height: '100%' }} />
      </div>
      {windowWidth >= WIDTH_LIMIT ? (
        <ul className='right-header-desktop'>
          <Tab />
        </ul>
      ) : (
        <ul className='right-header-mobile'>
          <MobileMenuBtn
            isMobileMenuOpen={isMobileMenuOpen}
            setMobileMenu={setMobileMenu}
          />
          <Tab display={isMobileMenuOpen ? 'initial' : 'none'} />
        </ul>
      )}
    </div>
  );
};

export default Nav;
