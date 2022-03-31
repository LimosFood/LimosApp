import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default App;
