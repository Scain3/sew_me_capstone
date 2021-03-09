import React from 'react';

const Member = ({ name, github, linkedin, angellist }) => {
  return (
    <div className='member__container'>
      <div className='member__name'>{name.toUpperCase()}</div>
      <div className='member__links'>
        <a
          className='member__link'
          href={github}
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-github member__link-icon' />
        </a>
        <a
          className='member__link'
          href={linkedin}
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-linkedin-in member__link-icon' />
        </a>
        <a
          className='member__link'
          href={angellist}
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-angellist member__link-icon' />
        </a>
      </div>
    </div>
  );
};

export default Member;
