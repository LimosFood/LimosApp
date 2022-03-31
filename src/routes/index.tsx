import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {RecipeDetails} from '../screens/Recipes/RecipeDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pantry} from '../screens/Pantry';

import HomeIcon from '../assets/icons/home';
import FridgeIcon from '../assets/icons/frigde';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused, size, color}) => {
          switch (route.name) {
            case 'Home':
              return focused ? (
                <HomeIcon fill="#16CEBE" stroke="#16CEBE" />
              ) : (
                <HomeIcon />
              );
            case 'Pantry':
              return focused ? <FridgeIcon stroke="#16CEBE" /> : <FridgeIcon />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Pantry"
        component={Pantry}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};
