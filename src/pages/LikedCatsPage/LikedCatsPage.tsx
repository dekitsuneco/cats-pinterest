import React from 'react';
import { Grid } from '../../components/Grid';
import { useAppSelector } from '../../store/hooks/redux';
import styles from './LikedCatsPage.module.css';

const LikedCatsPage = () => {
  const { liked } = useAppSelector((state) => state.likedReducer);

  return (
    <div className={styles.page}>
      <Grid items={liked} />
    </div>
  );
};

export { LikedCatsPage };
