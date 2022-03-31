import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 22px 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: 700;
`;

export const Card = styled.TouchableOpacity`
  width: ${RFValue(250)}px;
  height: ${RFValue(200)}px;

  margin-right: 24px;
  border-radius: 10px;
  padding: 16px;
`;
export const Image = styled.Image`
  height: 100%;
  border-radius: 10px;
`;
export const Content = styled.View``;
export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;
export const Name = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: 700;
`;
export const CookTime = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: 700;

  margin-left: 8px;
`;
