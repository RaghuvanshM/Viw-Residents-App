import React, {useEffect} from 'react';
import AppContext from './context/AppContext';
import {Provider} from 'react-redux';
import {Store} from './module/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Router from './router';

const persistor = persistStore(Store);

const App = () => {
  useEffect(() => {
    return () => {
      persistor.flush();
    };
  }, []);

  return (
    <AppContext.Provider value={{}}>
      <Provider store={Store}>
        <PersistGate
          persistor={persistor}
          children={() => {
            return <Router />;
          }}
        />
      </Provider>
    </AppContext.Provider>
  );
};
export default App;
