import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from "redux";
=======
import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk';
>>>>>>> refacturing

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
<<<<<<< HEAD
const store = createStore(
  reducers, composeEnhancers(applyMiddleware())
  );
=======

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))
>>>>>>> refacturing

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);