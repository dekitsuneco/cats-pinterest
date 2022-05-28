import React from 'react';
import styles from './CatsCard.module.css';

const CatsCard = ({ isLiked = false }) => {
  return (
    <div className={styles['cat-card']}>
      <div className={styles['cat-card__media']}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/44/Cat_img.jpg'
          alt='Photo of a domestic cat'
        />
        <div className={styles['overlay']}>
          <div className={styles['overlay__icon']}>Yo</div>
        </div>
      </div>
    </div>
  );
};

export { CatsCard };
