import { product } from "../../types/types";
import { RootStateType } from "../reducer";
import { productReducerStateType } from "../reducer/productReducer";

const selectProductReducer = (state: RootStateType): productReducerStateType =>
  state.productReducer;

export const selectProduct = (state: RootStateType): product | undefined =>
  selectProductReducer(state).data;

export const selectProductIsFetching = (state: RootStateType): boolean =>
  selectProductReducer(state).isFetching;
