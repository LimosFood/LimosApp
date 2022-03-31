import React from 'react';
import {Container, Title, Description} from './styles';

interface Props {
  title: number;
  description: string;
}
export const Steps: React.FC<Props> = ({title, description}) => {
  return (
    <Container>
      <Title>Passo {title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
