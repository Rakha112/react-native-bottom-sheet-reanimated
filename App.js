/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  SafeAreaView,
  Button,
  useWindowDimensions,
} from 'react-native';
import React, {useRef, useCallback} from 'react';
import BottomSheet from './src/components/BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const {height} = useWindowDimensions();
  const bottomSheetRef = useRef();
  const pressHandler = useCallback(() => {
    bottomSheetRef.current.expand();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Button title="Open Bottom Sheet" onPress={() => pressHandler()} />
        <BottomSheet activeHeight={height * 0.6} ref={bottomSheetRef} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
