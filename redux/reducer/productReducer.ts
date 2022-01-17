import { product } from "../../types/types";
import { actionType } from "../action/action.type";
import { PRODUCT } from "../constants/product.constants";

export type productReducerStateType = {
  isFetching: boolean;
  data: product | undefined;
  error: string | undefined;
};

const initialState: productReducerStateType = {
  isFetching: false,
  data: undefined,
  error: undefined,
};

export default function productReducer(
  state: productReducerStateType = initialState,
  action: actionType
): productReducerStateType {
  switch (action.type) {
    case PRODUCT.REQUEST:
      return {
        ...state,
        isFetching: true,
        data: undefined,
        error: undefined,
      };
    case PRODUCT.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case PRODUCT.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
