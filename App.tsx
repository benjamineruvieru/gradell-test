import {Animated, StatusBar} from 'react-native';
import React, {useRef} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Notification from './source/components/Notification';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './source/navigation/StackNav';

StatusBar.setBarStyle('dark-content');
const App = () => {
  const transY = useRef(new Animated.Value(0)).current;
  const goDown = ({num = 128}) => {
    Animated.timing(transY, {
      useNativeDriver: true,
      toValue: num,
    }).start();
  };

  const goUp = () => {
    Animated.timing(transY, {
      useNativeDriver: true,
      toValue: 0,
    }).start();
  };
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <SafeAreaProvider>
        <Notification {...{goDown, goUp}} />
        <Animated.View
          style={{
            flex: 1,
            transform: [{translateY: transY}],
          }}>
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>
        </Animated.View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
