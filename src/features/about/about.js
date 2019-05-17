import React from 'react';
import { usePicSum } from '../../context/picsum-context';
import About from './components/about';
import lodash from 'lodash';

lodash.map([], () => {});

function AboutContainer() {
  const data = usePicSum();
  return (
    <About image={data[0]} />
  )
}

export default AboutContainer;