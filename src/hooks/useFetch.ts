import axios from 'axios';
import { useEffect } from 'react';
import { CatEntity, API_URL } from '../api';
import { CatModel } from '../models/Cat';
import { useAppSelector } from '../store/hooks/redux';

interface LoadDataProps {
  setData: React.Dispatch<React.SetStateAction<CatModel[]>>;
  oldData?: Array<CatModel>;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onFinally?: () => void;
  deps?: Array<any>;
  currentPage?: number;
  shouldFetch?: boolean;
}

const loadData = async ({
  setData,
  oldData = [],
  onLoadStart = () => {},
  onLoadEnd = () => {},
  onFinally = () => {},
  currentPage = 1,
}: Omit<LoadDataProps, 'deps' | 'shouldFetch'>): Promise<void> => {
  try {
    onLoadStart();
    const constructedURL = currentPage
      ? `${API_URL}&page=${currentPage}`
      : API_URL;
    const response = await axios.get(constructedURL);
    const alreadyShowedIDs = oldData.map((oldDataCat) => oldDataCat.id);
    const catsData = response.data
      .map((cat: CatEntity) => {
        return {
          id: cat.id,
          url: cat.url,
        };
      })
      .filter((cat: CatModel) => !alreadyShowedIDs.includes(cat.id));

    setData([...oldData, ...catsData]);
    onLoadEnd();
  } catch (error) {
    console.error(error);
  } finally {
    onFinally();
  }
};

const useFetch = ({
  deps = [],
  shouldFetch = true,
  ...requestParams
}: LoadDataProps) => {
  useEffect(() => {
    if (shouldFetch) {
      loadData(requestParams);
    }
  }, deps);
};

export { useFetch };
