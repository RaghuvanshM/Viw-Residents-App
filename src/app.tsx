import React, {useEffect} from 'react';
import AppContext from './context/AppContext';
import {Provider} from 'react-redux';
import {Store} from './module/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Router from './router';
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {SplashScreen} from './screens/SplashScreen';
enableScreens();
const persistor = persistStore(Store);

const App = () => {
  useEffect(() => {
    return () => {
      persistor.flush();
    };
  }, []);

  return (
    <AppContext.Provider value={{}}>
      <StatusBar translucent backgroundColor="transparent" />
      <PaperProvider theme={DefaultTheme}>
        <Provider store={Store}>
          <PersistGate
            persistor={persistor}
            children={bootstrapped => {
              if (bootstrapped) {
                return <Router />;
              } else {
                return <SplashScreen />;
              }
            }}
          />
        </Provider>
      </PaperProvider>
    </AppContext.Provider>
  );
};
export default App;
