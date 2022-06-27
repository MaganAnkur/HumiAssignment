import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/App/navigators/MainNavigator';
//Redux
import {store} from './src/App/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <MainNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
