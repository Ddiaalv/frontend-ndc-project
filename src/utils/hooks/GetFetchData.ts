import { useState } from 'react';
import { MonsterState } from '../../components/organisms/MonsterInformation/types';

export const GetFetchData = () => {
  const [data, setData] = useState<MonsterState | undefined>();
  const [arrayData, setArrayData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getObjectData = (URL: string) => {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result[0]);
        },
        (errorFetch) => {
          setIsLoaded(true);
          setError(errorFetch);
        },
      );
  };

  const getArrayData = (URL: string) => {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArrayData(result);
        },
        (errorFetch) => {
          setIsLoaded(true);
          setError(errorFetch);
        },
      );
  };
  return { data, arrayData, isLoaded, error, getObjectData, getArrayData };
};
