import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 22px 16px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: 500;
`;
export const HeaderLogo = styled.Image``;

export const Card = styled.View`
  background: #fff;
  height: 80%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const CardContent = styled.View`
  flex: 1;
  padding: 32px 32px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 500;
`;
export const Subtitle = styled.Text`
  font-size: 20px;
  color: #000;
  margin-top: 18px;
`;
export const FoodContainer = styled.View``;
export const FoodCard = styled.TouchableOpacity`
  width: 200px;
  height: 120px;
  border-radius: 10px;
  margin-right: 12px;
`;
export const ImageFood = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;
export const FoodTitle = styled.Text`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
`;

export const DurationContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;
`;
export const Time = styled.Text`
  font-weight: 400;
  font-size: 14px;

  margin-left: 8px;
`;
