import type { NextPage } from 'next';
import React from 'react';
import Card from '../components/card';
import HomePageStyles from './HomePage.module.scss';

const Home: NextPage = () => (
  <div className={HomePageStyles.container}>
    <h1 className={HomePageStyles.header}>Hello Bennedict,</h1>
    <div className={HomePageStyles.cardHeader}>
      <Card type="main" />
      <Card type="plan" />
      <div className={HomePageStyles.profileCard}>
        Profile1
      </div>
    </div>
  </div>
);

export default Home;
