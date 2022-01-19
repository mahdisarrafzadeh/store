import { AxiosRequestConfig, AxiosResponse } from "axios";
import { all, call, put, select, takeLatest } from "redux-saga/effects";
import url from "../../config/url.json";
import {
  productActionCreatorInterface,
  productFailure,
  productRequest,
  productsFailure,
  productsRequest,
  productsSuccess,
  productSuccess,
} from "../action/products.action";
import { GET_PRODUCT_ACTION_CREATOR } from "../constants/product.constants";
import XHRRequest from "../services/axios";

function* getProductEffect(action: productActionCreatorInterface) {
  try {
    yield put(productRequest());
    const { product_id } = action.payload;

    const config: AxiosRequestConfig = {
      url: url.base + url.endpoint.products + "/" + product_id,
      method: "GET",
    };
    const data: AxiosResponse = yield call(XHRRequest, config);
    yield put(productSuccess(data.data));
  } catch (err: any) {
    yield put(productFailure(err.response?.data));
  }
}

function* getProductsEffect() {
  try {
    yield put(productsRequest());
    const config: AxiosRequestConfig = {
      url: url.base + url.endpoint.products,
      method: "GET",
    };
    const data: AxiosResponse = yield call(XHRRequest, config);
    yield put(productsSuccess(data.data));
  } catch (err: any) {
    yield put(productsFailure(err.response?.data));
  }
}

export default function* sagaWatcher() {
  yield all([
    takeLatest(GET_PRODUCT_ACTION_CREATOR, getProductEffect),
    takeLatest(GET_PRODUCT_ACTION_CREATOR, getProductsEffect),
  ]);
}
