import { NextPage } from 'next';
import React from 'react';
import PropTypes from 'prop-types';
import CircularPercentage from '../../assets/icons/CircularPercentage';
import CardStyles from './card.module.scss';
import BigEyeIcon from '../../assets/icons/BigEyeIcon';

const Card: NextPage<{
  type : 'main' | 'plan'
}> = (props) => {
  const { type } = props;
  return (
    <div className={CardStyles.card}>
      <div className={CardStyles.cardHeader}>
        <p className={CardStyles.cardTitle}>Available Balance</p>
        {type === 'main' ? (
          <p className={CardStyles.cardBadge}>Tier1</p>
        ) : (
          <p className="">
            75% Achieved
            <CircularPercentage />
          </p>
        )}
      </div>
      <div className={CardStyles.cardBody}>
        <span className={CardStyles.cardUnit}>₦</span>
        <p className={CardStyles.cardValue}>6,390.68</p>
        <div className="">
          <BigEyeIcon />
        </div>
      </div>
      <div className={CardStyles.cardFooter}>
        <p className={CardStyles.cardInterest} />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string as any,
};

Card.defaultProps = {
  type: 'main',
};

export default Card;
