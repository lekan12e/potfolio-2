import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='#home'>
    <div className='app__wrapper-info'>
      <SubHeading title = "Chase the flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:"2rem 0"}}>integration for the PHP language. The features are provided respecting conventions, stability, simple use, and performance. Please see the product page for more details on devsense.com.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper-img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
