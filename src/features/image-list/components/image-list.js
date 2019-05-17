import React from 'react';
import Image from '../../image';

function ImageList(props) {
  if(props.images) {
    return props.images.map((image) => <Image src={image.download_url} key={image.id} author={image.author} />);
  }
  return <div>Hello there from the image list</div>
}

export default ImageList;