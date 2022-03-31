import React from 'react';
import {Container, IngredientName, IngredientQuantity} from './styles';

interface Props {
  ingredient: string;
  quantity: number;
  unity: string;
}

export const IngredientCard: React.FC<Props> = ({
  ingredient,
  quantity,
  unity,
}) => {
  return (
    <Container>
      <IngredientName>{ingredient}</IngredientName>
      <IngredientQuantity>
        {quantity}
        {unity}
      </IngredientQuantity>
    </Container>
  );
};
