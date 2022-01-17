import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../reducer";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(RootReducer);

sagaMiddleware.run(rootSaga);

export default store;
