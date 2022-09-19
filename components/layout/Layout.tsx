import { NextPage } from 'next';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './header/Header';
import LayoutStyles from './layout.module.scss';
import Sidebar from './sidebar/Sidebar';

const Layout : NextPage<{
  children : React.ReactNode
}> = (props) => {
  const { children } = props;
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.sidebar}>
        <Sidebar />
      </div>
      <div className={LayoutStyles.main}>
        <div className={LayoutStyles.header}>
          <Header />
        </div>
        <div className={LayoutStyles.children}>
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
