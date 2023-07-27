/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Home } from './components/home/Home';
import { PlayerScreen } from './components/player/PlayerScreen';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  navigatorContainer: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  content: {
    backgroundColor: '#161616',
  },
  header: {
    backgroundColor: '#18181b',
    boxShadow: 'rgba(0,0,0,.9) 0px 1px 2px 0px',
  },
  title: {
    color: 'white',
  },
});

const navOptions: NativeStackNavigationOptions = {
  headerStyle: styles.header,
  headerTitleStyle: styles.title,
  contentStyle: styles.content,
  headerTintColor: '#fff',
};

// docs: https://reactnavigation.org/docs/headers

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.darker} />
      <View style={styles.navigatorContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" options={navOptions} component={Home} />
            <Stack.Screen
              name="Player"
              options={navOptions}
              component={PlayerScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;
