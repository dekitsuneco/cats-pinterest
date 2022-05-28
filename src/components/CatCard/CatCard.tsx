import React, { ReactElement } from 'react';
import { CatModel } from '../../models/Cat';
import styles from './CatCard.module.css';

interface CatCardProps {
  data: CatModel;
  onHeartClick: (data: CatModel) => void;
}

const CatCard = ({
  data,
  onHeartClick: handleClick,
}: CatCardProps): ReactElement => {
  return (
    <div className={styles['cat-card']}>
      <div className={styles['cat-card__media']}>
        <img src={data.url} alt='A domestic cat' loading='lazy' />
        <div className={styles.overlay}>
          <a
            onClick={() => handleClick(data)}
            className={styles.overlay__icon}
          ></a>
        </div>
      </div>
    </div>
  );
};

export { CatCard };
