import { product } from "../../types/types";
import {
  GET_PRODUCTS_ACTION_CREATOR,
  GET_PRODUCT_ACTION_CREATOR,
  PRODUCT,
  PRODUCTS,
} from "../constants/product.constants";
import { actionType } from "./action.type";

export interface productActionCreatorInterface extends actionType {
  payload: {
    product_id: number;
  };
}

export const productActionCreator = (
  product_id: number
): productActionCreatorInterface => {
  return {
    type: GET_PRODUCT_ACTION_CREATOR,
    payload: {
      product_id,
    },
  };
};

export const productRequest = (): actionType => {
  return {
    type: PRODUCT.REQUEST,
  };
};

export const productSuccess = (data: product): actionType => {
  return {
    type: PRODUCT.SUCCESS,
    payload: data,
  };
};

export const productFailure = (err: string): actionType => {
  return {
    type: PRODUCT.FAILURE,
    payload: err,
  };
};
// products

export const productsActionCreator = (): actionType => {
  return {
    type: GET_PRODUCTS_ACTION_CREATOR,
  };
};

export const productsRequest = (): actionType => {
  return {
    type: PRODUCTS.REQUEST,
  };
};

export const productsSuccess = (data: product[]): actionType => {
  return {
    type: PRODUCTS.SUCCESS,
    payload: data,
  };
};

export const productsFailure = (err: string): actionType => {
  return {
    type: PRODUCTS.FAILURE,
    payload: err,
  };
};
