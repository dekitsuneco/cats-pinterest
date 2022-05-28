import React, { ReactElement } from 'react';
import { useHandleLike } from '../../hooks/useHandleLike';
import { CatModel } from '../../models/Cat';
import styles from './CatCard.module.css';

interface CatCardProps {
  data: CatModel;
}

const CatCard = ({ data }: CatCardProps): ReactElement => {
  const handleLike = useHandleLike();
  return (
    <div className={styles['cat-card']}>
      <div className={styles['cat-card__media']}>
        <img src={data.url} alt='A domestic cat' loading='lazy' />
        <div className={styles.overlay}>
          <a
            onClick={() => handleLike(data)}
            className={styles.overlay__icon}
          ></a>
        </div>
      </div>
    </div>
  );
};

export { CatCard };
