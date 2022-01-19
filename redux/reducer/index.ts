import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productsReducer from "./productsReducer";

const RootReducer = combineReducers({
  productReducer,
  productsReducer,
});

export default RootReducer;

export type RootStateType = ReturnType<typeof RootReducer>;
