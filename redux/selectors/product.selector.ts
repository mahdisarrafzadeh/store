import { product } from "../../types/types";
import { RootStateType } from "../reducer";
import { productReducerStateType } from "../reducer/productReducer";
import { productsReducerStateType } from "../reducer/productsReducer";

const selectProductReducer = (state: RootStateType): productReducerStateType =>
  state.productReducer;

export const selectProduct = (state: RootStateType): product | undefined =>
  selectProductReducer(state).data;

export const selectProductIsFetching = (state: RootStateType): boolean =>
  selectProductReducer(state).isFetching;

const selectProductsReducer = (
  state: RootStateType
): productsReducerStateType => state.productsReducer;

export const selectProducts = (state: RootStateType): product[] | undefined =>
  selectProductsReducer(state).data;

export const selectProductsIsFetching = (state: RootStateType): boolean =>
  selectProductsReducer(state).isFetching;
