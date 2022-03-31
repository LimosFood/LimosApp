import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import {
  Card,
  Container,
  Content,
  CookTime,
  Image,
  Info,
  Name,
  Title,
} from './styles';

import {Header} from '../../components/commons/structure/Header';
import {Sheet} from '../../components/commons/structure/Sheet';
import CookTimeIcon from '../../assets/icons/clock';

import {IRecipe} from '../../services/types/IRecipe';

import api from '../../services/index';

export const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {
    const response = await api.get('/receitas');

    setRecipes(response.data);
  };

  const renderRecipes = (recipe: IRecipe) => {
    return (
      <Card
        onPress={() => navigation.navigate('RecipeDetails', {recipe: recipe})}>
        <Image
          source={{
            uri: 'https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg',
          }}
        />
        <Content>
          <Name>{recipe.descricao}</Name>
          <Info>
            <CookTimeIcon />
            <CookTime>{recipe.tempo} min</CookTime>
          </Info>
        </Content>
      </Card>
    );
  };

  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#00C2A8', '#78C6EF']}
        style={{flex: 1}}>
        <Container>
          <Header title="Bem-vindo" />
        </Container>
        <Sheet>
          <Title>Recomendações</Title>

          <FlatList
            style={{width: '100%'}}
            data={recipes}
            renderItem={({item}) => renderRecipes(item)}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Sheet>
      </LinearGradient>
    </>
  );
};
