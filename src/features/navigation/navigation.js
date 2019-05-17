import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  margin: 1rem;
`;

const NavWrapper = styled.div`
  margin-bottom: 1rem;
`;

function Navigation() {

  return(
  <NavWrapper>
    <Button to="images">Image Gallery</Button>
    <Button to="about">About Us</Button>
  </NavWrapper>
  );
}

export default Navigation;