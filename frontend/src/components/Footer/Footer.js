import React from 'react';
import Member from './Member';
import './Footer.css';

function Footer () {
  return (
    <div className='footer-container'>
      <div className='footer__left'>
        <div className='footer__about'>
          SEW ME IS AN E-COMMERCE APPLICATION
          FOR SEAMSTRESSES AND HOBBY/CRAFT SEWERS.
        </div>
        <div className='footer__copyright'>
          © 2021 SEW ME
        </div>
      </div>
      <div className='footer__team'>
        <div className='footer__team-col'>
          <Member
            name='Safiya Cain'
            github='https://github.com/Scain3'
            linkedin='https://www.linkedin.com/in/safiya-cain-25327356/'
            angellist='https://angel.co/u/safiya-cain'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
