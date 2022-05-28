import React from 'react';
import { Grid } from '../../components/Grid';
import { useHandleLike } from '../../hooks/useHandleLike';
import { useAppSelector } from '../../store/hooks/redux';
import styles from './LikedCatsPage.module.css';

const LikedCatsPage = () => {
  const { liked } = useAppSelector((state) => state.likedReducer);

  const handleLike = useHandleLike();

  return (
    <div className={styles.page}>
      <Grid items={liked} onCardLike={handleLike} />
    </div>
  );
};

export { LikedCatsPage };
