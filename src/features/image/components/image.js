import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  margin-bottom: 1rem;
`;

const Img = styled.img`
width: 100%;
height: 500px;
`;

function Image(props) {
  return (
  <Container>
    {props.author}
    <Img src={props.src} />
  </Container>
  );
}

export default Image;