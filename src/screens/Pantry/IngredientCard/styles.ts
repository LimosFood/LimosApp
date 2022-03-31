import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 100px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  align-self: center;

  margin: 10px;
  padding: 10px;

  border-radius: 10px;

  background-color: #fff;

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const Content = styled.View``;

export const ImageIcon = styled.Image``;

export const Name = styled.Text``;

export const Quantity = styled.Text``;
