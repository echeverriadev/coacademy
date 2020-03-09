import React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import makeStore from './store/makeStore'
import { PersistGate } from 'redux-persist/integration/react'
import MainLayoutContainer from './containers/MainLayoutContainer';
import './index.css';
import * as serviceWorker from './serviceWorker';

const { store, persistor } = makeStore();

const unsuscribe = store.subscribe(() => {
  console.log(store.getState())
})

render(
	<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainLayoutContainer/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
