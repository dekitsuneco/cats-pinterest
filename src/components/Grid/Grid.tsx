import React from 'react';
import { CatModel } from '../../models/Cat';
import { CatCard } from '../CatCard';
import styles from './Grid.module.css';

interface GridProps {
  items: Array<CatModel>;
}

const Grid = ({ items }: GridProps) => {
  return (
    <div className={`${styles.container} ${styles.gallery}`}>
      {items.map((CatData) => (
        <CatCard
          key={`${CatData.id}-${CatData.url}-${new Date().getTime()}`}
          data={CatData}
        />
      ))}
    </div>
  );
};

export { Grid };
