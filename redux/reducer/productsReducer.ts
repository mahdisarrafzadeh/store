import { product } from "../../types/types";
import { actionType } from "../action/action.type";
import { PRODUCT, PRODUCTS } from "../constants/product.constants";

export type productsReducerStateType = {
  isFetching: boolean;
  data: product[] | undefined;
  error: string | undefined;
};

const initialState: productsReducerStateType = {
  isFetching: false,
  data: undefined,
  error: undefined,
};

export default function productReducer(
  state: productsReducerStateType = initialState,
  action: actionType
): productsReducerStateType {
  switch (action.type) {
    case PRODUCTS.REQUEST:
      return {
        ...state,
        isFetching: true,
        data: undefined,
        error: undefined,
      };
    case PRODUCTS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case PRODUCTS.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
