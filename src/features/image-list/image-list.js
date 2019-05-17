import React from 'react';
import ImageList from './components/image-list';
import { usePicSum } from '../../context/picsum-context';

function ImageListContainer(props) {
  const data = usePicSum();
  return <ImageList images={data} />
}

export default ImageListContainer;