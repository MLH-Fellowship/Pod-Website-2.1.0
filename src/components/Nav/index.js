import React, { useState, useEffect } from 'react';
import './Nav.css';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSlack, faGithub } from '@fortawesome/free-brands-svg-icons';

// the limit of window.innerWidth that triggers the switch between NavDesktop and NavMobile.
const WIDTH_LIMIT = 705;

const tabsContent = [
  { icon: faHome, name: 'Home' },
  { icon: faSlack, name: 'Team' },
  { icon: faGithub, name: 'Projects' }
];

const Tab = ({ display }) => {
  return tabsContent.map((content, index) => (
    <li key={index} style={{ display: display }}>
      <a>
        <FontAwesomeIcon icon={content.icon} size="2x" />
        <p>{content.name}</p>
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
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

const Nav = ({ windowWidth }) => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  useEffect(() => setMobileMenu(false), [windowWidth]);

  return (
    <div id="nav">
      <div className="left-header">
        <Logo style={{ width: '20%', height: '100%' }} />
      </div>
      {windowWidth >= WIDTH_LIMIT ? (
        <ul className="right-header-desktop">
          <Tab />
        </ul>
      ) : (
        <ul className="right-header-mobile">
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
