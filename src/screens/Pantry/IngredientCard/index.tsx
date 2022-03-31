import React from 'react';

import {Container, Content, ImageIcon, Name, Quantity} from './styles';

interface Props {
  image?: string;
  name: string;
  quantity: number;
  measure: string;
}

export const IngredientCard: React.FC<Props> = ({
  image,
  name,
  quantity,
  measure,
}) => {
  return (
    <Container>
      <Content>
        <Name>{name}</Name>
      </Content>
      <Quantity>
        {quantity} {measure}
      </Quantity>
    </Container>
  );
};
