import { NextPage } from 'next';
import React from 'react';
import CircularPercentage from '../../assets/icons/CircularPercentage';
import CardStyles from './card.module.scss';
import BigEyeIcon from '../../assets/icons/BigEyeIcon';
import SmallEyeIcon from '../../assets/icons/SmallEyeIcon';

const Card: NextPage<{
  type : 'main' | 'plan'
  title : string
  badge : string
  value : string
  interest? : string
  color : string
}> = (props) => {
  const {
    type, color, title, badge, value, interest,
  } = props;
  return (
    <div className={CardStyles.card} style={{ backgroundColor: color }}>
      <div
        className={CardStyles.cardHeader}
        style={{
          color: type === 'main' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(38, 50, 56, 0.5)',
        }}
      >
        <p className={CardStyles.cardTitle}>{title}</p>
        {type === 'main' ? (
          <p className={CardStyles.cardBadge}>{badge}</p>
        ) : (
          <p className={CardStyles.cardBadge2}>
            {badge}
            <CircularPercentage />
          </p>
        )}
      </div>
      <div
        className={CardStyles.cardBody}
        style={{
          color: type === 'main' ? '#FFFFFF' : '#263238',
        }}
      >
        <span className={CardStyles.cardUnit}>₦</span>
        <p
          className={CardStyles.cardValue}
        >
          {value}

        </p>
        <div className="">
          {type === 'main' ? (
            <BigEyeIcon />
          ) : (
            <SmallEyeIcon />
          )}
        </div>
      </div>
      {type === 'plan' && (
      <div className={CardStyles.cardFooter}>
        <p className={CardStyles.cardInterest}>
          {interest}
        </p>
      </div>
      )}
    </div>
  );
};

export default Card;
