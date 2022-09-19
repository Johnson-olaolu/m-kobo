import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import SidebarStyles from './sidebar.module.scss';
import Logo from '../../../assets/images/Logo.png';
import HomeIcon from '../../../assets/icons/HomeIcon';
import MkoloIcon from '../../../assets/icons/MkoloIcon';
import EarlyPayIcon from '../../../assets/icons/EarlyPayIcon';
import DebitCardIcon from '../../../assets/icons/DebitCardIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import SettingsIcon from '../../../assets/icons/SettingsIcon';
import FaqIcon from '../../../assets/icons/FaqIcon';
import TalkIcon from '../../../assets/icons/TalkIcon';

const Sidebar = () => {
  const menus : {
    name : string,
    icon: JSX.Element,
    link : string,
    isActive?: boolean
  }[] = [
    {
      name: 'Dashboard',
      icon: <HomeIcon />,
      link: '#',
      isActive: true,
    },
    {
      name: 'Mkolo',
      icon: <MkoloIcon />,
      link: '#',
    },
    {
      name: 'EarlyPay',
      icon: <EarlyPayIcon />,
      link: '#',
    },
    {
      name: 'Debit Cards',
      icon: <DebitCardIcon />,
      link: '#',
    },
    {
      name: 'Profile',
      icon: <ProfileIcon />,
      link: '#',
    },
    {
      name: 'Settings',
      icon: <SettingsIcon />,
      link: '#',
    },
  ];
  return (
    <div className={SidebarStyles.container}>
      <div className={SidebarStyles.logoDiv}>
        <Image src={Logo} height={80} width={98} />
      </div>
      <nav className={SidebarStyles.navbarContainer}>
        <ul className={SidebarStyles.navbar}>
          {menus.map((menuItem) => (
            <li className="" key={menuItem.name}>
              <Link href={menuItem.link}>
                <div className={
                    menuItem.isActive
                      ? SidebarStyles.navbarItemActive
                      : SidebarStyles.navbarItemNormal
                    }
                >
                  {menuItem.icon}
                  <span className="">{menuItem.name}</span>
                </div>
              </Link>
            </li>
          ))}

        </ul>
      </nav>
      <div className={SidebarStyles.help}>
        <h6 className={SidebarStyles.helpTitle}>Help & Support</h6>
        <p className={SidebarStyles.helpItem}>
          <FaqIcon />
          <span className="">FAQ`&apos;`s</span>
        </p>
        <p className={SidebarStyles.helpItem}>
          <TalkIcon />
          <span className="">Talk to someone</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
