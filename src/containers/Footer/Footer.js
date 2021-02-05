import React from 'react';
import FeatherIcon from 'feather-icons-react';
import styles from './Footer.module.css';
import Logo from '../../assets/images/Logo.svg';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Made With <FeatherIcon icon='heart' fill='red' /> and{' '}
          <FeatherIcon icon='github' fill='#52C1EE' />.
        </h1>
      </div>
      <div className='mt-4 md-4'>
        <img className='w-50' src={Logo} alt='Minions going Bananas!' />
      </div>
    </div>
  );
};

export default Footer;
