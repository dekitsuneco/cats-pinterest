import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Grid } from '../../components/Grid';
import { useFetch } from '../../hooks/useFetch';
import { CatModel } from '../../models/Cat';
import styles from './AllCatsPage.module.css';

const AllCatsPage = (): ReactElement => {
  const [cats, setCats] = useState<Array<CatModel>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(2);
  const [isFetching, setIsFetching] = useState(false);

  const scrollHandler = (e: Event) => {
    const doc = e.target as Document;
    if (
      doc.documentElement.scrollHeight -
        (doc.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
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
    currentPage,
    oldData: cats,
    setData: setCats,
    onLoadEnd: () => {
      setCurrentPage((prevPage) => prevPage + 1);
    },
    onFinally: () => setIsFetching(false),
    deps: [isFetching],
  });

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

  const scrollLoader: ReactNode = (
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
      {isLoading ? loader : <Grid items={cats} />}
      {isFetching ? scrollLoader : null}
    </div>
  );
};

export { AllCatsPage };
