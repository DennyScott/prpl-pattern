import { createContext, useContext } from 'react';

export const PicSumContext = createContext();

export function usePicSum() {
  return useContext(PicSumContext);
}