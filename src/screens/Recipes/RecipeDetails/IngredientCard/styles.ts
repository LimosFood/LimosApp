import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80px;
  width: 130px;

  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: #fff;

  align-items: center;
  justify-content: center;

  border-radius: 10px;

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const IngredientName = styled.Text`
  font-size: 14px;
`;

export const IngredientQuantity = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;
