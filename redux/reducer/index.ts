import { combineReducers } from "redux";
import productReducer from "./productReducer";

const RootReducer = combineReducers({
  productReducer,
});

export default RootReducer;

export type RootStateType = ReturnType<typeof RootReducer>;
