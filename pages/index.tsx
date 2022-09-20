import type { NextPage } from 'next';
import React from 'react';
import Card from '../components/card';
import HomePageStyles from './HomePage.module.scss';

const Home: NextPage = () => {
  const cardDetails: {
    type: 'main' | 'plan';
    title: string;
    badge: string;
    value: string;
    interest?: string;
    color: string;
  }[] = [
    {
      title: 'Avalaible Balance',
      type: 'main',
      badge: 'Tier 1',
      value: '6,390.68',
      color: '#0047CC',
    },
    {
      title: 'Car Purchase Plan',
      type: 'plan',
      badge: '75% Achieved',
      value: '6,390.68',
      color: '#D4D4FF',
      interest: 'Interest as at today:  : ₦20,000',
    },
    {
      title: 'Car Purchase Plan',
      type: 'plan',
      badge: '75% Achieved',
      value: '6,390.68',
      color: '#FFD4DF',
      interest: 'Interest as at today:  : ₦20,000',
    },
  ];
  return (
    <div className={HomePageStyles.container}>
      <h1 className={HomePageStyles.header}>Hello Bennedict,</h1>
      <div className={HomePageStyles.cardHeader}>
        {cardDetails.map((card) => (
          <Card
            type={card.type}
            badge={card.badge}
            color={card.color}
            title={card.title}
            value={card.value}
            interest={card.interest}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
