import React, {useEffect, useState} from 'react';
import {FlatList, SectionList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import ClockIcon from '../../assets/icons/clock';

import {Container} from './styles';

import {IngredientCard} from './IngredientCard';
import {Sheet} from '../../components/commons/structure/Sheet';
import api from '../../services';
import {IPantry} from '../../services/types/IPantry';
import {Header} from '../../components/commons/structure/Header';

export const Pantry: React.FC = () => {
  const [pantry, setPantry] = useState<IPantry[]>([]);

  useEffect(() => {
    getPantry();
  }, []);

  const getPantry = async () => {
    const response = await api.get('/ingredientes');

    setPantry(response.data);
  };

  const renderPantryList = (data: IPantry) => {
    return (
      <IngredientCard
        name={data.descricao}
        quantity={data.id_ingrediente}
        measure=""
      />
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#00C2A8', '#78C6EF']}
      style={{flex: 1}}>
      <Container>
        <Header title="Despensa" />
      </Container>
      <Sheet>
        <FlatList
          style={{width: '100%'}}
          data={pantry}
          renderItem={({item}) => renderPantryList(item)}
          showsVerticalScrollIndicator={false}
        />
      </Sheet>
    </LinearGradient>
  );
};
