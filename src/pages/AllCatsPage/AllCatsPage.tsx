import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { CatEntity } from '../../api';
import { Grid } from '../../components/Grid';
import { useFetch } from '../../hooks/useFetch';
import { useHandleLike } from '../../hooks/useHandleLike';
import { CatModel } from '../../models/Cat';
import styles from './AllCatsPage.module.css';

const AllCatsPage = (): ReactElement => {
  const [cats, setCats] = useState<Array<CatModel>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  const scrollHandler = (e: Event) => {
    const doc = e.target as Document;
    if (
      doc.documentElement.scrollHeight -
        (doc.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log('scroll');
      setIsFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useFetch({
    onLoadStart: () => setIsLoading(true),
    setData: setCats,
    onLoadEnd: () => setIsLoading(false),
  });

  useFetch({
    oldData: cats,
    setData: setCats,
    onLoadEnd: () => {
      setCurrentPage((prevPage) => prevPage + 1);
    },
    currentPage,
    onFinally: () => setIsFetching(false),
    deps: [isFetching],
  });

  const handleLike = useHandleLike();

  const loader: ReactNode = (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Загрузка...
    </div>
  );

  const scrollFetcherer: ReactNode = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      ...загружаем ещё котиков...
    </div>
  );

  return (
    <div className={styles.page}>
      {isLoading ? loader : <Grid items={cats} onCardLike={handleLike} />}
      {isFetching ? scrollFetcherer : null}
    </div>
  );
};

export { AllCatsPage };
