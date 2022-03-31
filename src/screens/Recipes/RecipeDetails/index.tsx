import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import api from '../../../services';
import {
  IIngredients,
  IRecipeDetails,
  ISteps,
} from '../../../services/types/IRecipeDetails';
import {IngredientCard} from './IngredientCard';
import {Steps} from './Steps';

import ArrowLeft from '../../../assets/icons/arrowleft';
import Clock from '../../../assets/icons/clock';
import People from '../../../assets/icons/people';

import {
  Back,
  BottomView,
  Container,
  Content,
  Info,
  RecipeCard,
  RecipeImage,
  Row,
  Subtitle,
  Title,
} from './styles';

export const RecipeDetails: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const {recipe} = route.params;

  const [recipeDetails, setRecipeDetails] = useState<IRecipeDetails>();

  useEffect(() => {
    getRecipeDetails();
  }, [recipe]);

  const getRecipeDetails = async () => {
    if (recipe) {
      const response = await api.get(`/receita/${recipe.id_receita}`);

      setRecipeDetails(response.data);
    }
  };

  const renderIngredients = (item: IIngredients) => {
    return (
      <IngredientCard
        ingredient={item.descricao}
        quantity={item.quantidade}
        unity={item.simbolo_unidade}
      />
    );
  };
  return (
    <Container>
      <RecipeCard>
        <Title>{recipe.descricao}</Title>
        <Subtitle>{recipeDetails?.ingredientes.length} ingredientes</Subtitle>
        <Row>
          <Info>
            <Clock />
            <Subtitle>{recipe.tempo} min</Subtitle>
          </Info>
          <Info>
            <People />
            <Subtitle>{recipe.qtd_rendimento} pessoas</Subtitle>
          </Info>
        </Row>
      </RecipeCard>
      <RecipeImage
        source={{
          uri: 'https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg',
        }}>
        <Back onPress={() => navigation.goBack()}>
          <ArrowLeft stroke="#fff" />
        </Back>
      </RecipeImage>
      <BottomView>
        <Content>
          <Title>Ingredientes</Title>

          {
            <FlatList
              data={recipeDetails?.ingredientes}
              renderItem={({item}) => renderIngredients(item)}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          }

          <Title>Modo de Preparo</Title>
          {recipeDetails?.instrucoes.map((step: ISteps) => (
            <Steps title={step.ordem} description={step.instrucao} />
          ))}
        </Content>
      </BottomView>
    </Container>
  );
};
