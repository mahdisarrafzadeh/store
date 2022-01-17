import { fork } from "child_process";
import { all } from "redux-saga/effects";
import productEffect from "./product.saga";
export default function* rootSaga() {
  yield all([productEffect()]);
}
