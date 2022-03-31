import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

export const RecipeCard = styled.View`
  position: absolute;

  top: 230px;

  width: 86%;
  height: 150px;

  padding: 10px;

  background-color: #fff;

  border-radius: 16px;

  align-self: center;
  align-items: center;
  justify-content: space-between;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5; 

  z-index: 999;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Info = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 10px;
`;

export const Subtitle = styled.Text`
  margin-left: 10px;
`;

export const RecipeImage = styled.ImageBackground`
  height: ${Dimensions.get('window').height / 2.5}px;
  width: 100%;
`;
export const Back = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  border-radius: 80px;
  align-items: center;
  justify-content: center;
  background-color: #0000004d;

  margin-left: 20px;
  margin-top: 20px;
`;
export const BottomView = styled.View`
  margin-top: 150px;
  flex: 1.5;
  background-color: #fff;

  border-top-left-radius: 26px;
  border-top-right-radius: 26px;

  bottom: 50px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #000;

  margin-bottom: 6px;
`;
