import { RequestType } from "./constants";

export const GET_PRODUCT_ACTION_CREATOR: string = "GET_PRODUCT_ACTION_CREATOR";

export const PRODUCT: RequestType = {
  REQUEST: "@auth/product/request",
  FAILURE: "@auth/product/failure",
  SUCCESS: "@auth/product/success",
};

export const GET_PRODUCTS_ACTION_CREATOR: string = "GET_PRODUCT_ACTION_CREATOR";

export const PRODUCTS: RequestType = {
  REQUEST: "@auth/products/request",
  FAILURE: "@auth/products/failure",
  SUCCESS: "@auth/products/success",
};
