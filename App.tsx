import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from '@rneui/base';

const App = () => {
  return (
    <SafeAreaProvider>
      <Text>App</Text>
      <Button title="Outline" type="outline" />
    </SafeAreaProvider>
  );
};

export default App;
