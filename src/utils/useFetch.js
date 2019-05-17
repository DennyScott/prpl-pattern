import { useState, useEffect } from 'react';
import { authGet } from './endpoints';

const AUTH_TOKEN = '';

function useFetch(url, setFetchData, defaultState = [], subscription = []) {
  const [data, setData] = useState(defaultState);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data } = await authGet(url, AUTH_TOKEN);
      setData(data);
      setFetchData(data);
      setLoading(false);
    } catch (e) {
      console.log('error');
      console.log(e);
    }
  }

  function addItem(item) {
    setData([item, ...data]);
  }

  useEffect(() => {
    getData();
  }, subscription);

  return { data, addItem, loading };
}

export { useFetch };
