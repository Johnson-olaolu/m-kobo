import React from 'react';
import Image from 'next/image';
import BellIcon from '../../../assets/icons/BellIcon';
import HeaderStyles from './header.module.scss';
import ProfileImage from '../../../assets/images/ProfileImage.png';
import ChevronDownIcon from '../../../assets/icons/ChevronDownIcon';

const Header = () => (
  <div className={HeaderStyles.container}>
    <h2 className={HeaderStyles.title}>My Dashboard</h2>
    <div className={HeaderStyles.profile}>
      <BellIcon />
      <div className={HeaderStyles.user}>
        <Image className="user-image" height={32} width={32} src={ProfileImage} />
        <span className={HeaderStyles.dropdown}>
          Benedict Ulinfo
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  </div>
);

export default Header;
