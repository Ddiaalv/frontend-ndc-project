import { useState } from 'react';
import {
  MonstersProps,
  MonsterProps,
} from '../../components/organisms/MonsterInformation/types';

export const GetFetchData = () => {
  const [objectData, setObjectData] = useState<MonsterProps>();
  const [arrayData, setArrayData] = useState<MonstersProps[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getObjectData = (URL: string) => {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setObjectData(result[0]);
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
  return { data: objectData, arrayData, isLoaded, error, getObjectData, getArrayData };
};
