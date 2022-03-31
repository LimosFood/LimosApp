import React from 'react';

import {Container, Title, Logo} from './styles';

import LogoImage from '../../../../assets/images/logo.png';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Logo source={LogoImage} />
    </Container>
  );
};
