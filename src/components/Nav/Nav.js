import React from 'react';
import './Nav.css';
import {ReactComponent as Logo} from '../../assets/images/Logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faSlack, faGithub} from '@fortawesome/free-brands-svg-icons';

// the limit of window.innerWidth that triggers the switch between NavDesktop and NavMobile.
const WIDTH_LIMIT = 705;

const Tab = ({icon, name, key}) => {
    return (
        <li key={key}>
            <a>
                <FontAwesomeIcon icon={icon} size="2x"/>
                <p>{name}</p>
            </a>
        </li>
    );
}

const tabsContent = [
    { icon: faHome, name: 'Home' },
    { icon: faSlack, name: 'Team' },
    { icon: faGithub, name: 'Projects' }
];

const Nav = ({windowWidth}) => {

    return (
        <div id='nav'>
            <div className='left'>
                <Logo style={{width: "20%", height: "100%"}}/>
            </div>
            <ul className='right'>
                {tabsContent.map((content, index) => <Tab {...content} key={index}/>)}
            </ul>
        </div>
    );
};

export default Nav;