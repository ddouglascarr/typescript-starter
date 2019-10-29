import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Hello} from 'helloWorld';
import {Provider} from 'react-redux';
import {configureStore, initialState} from './store';

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <Hello />
  </Provider>,
  document.getElementById('react-root'),
);
