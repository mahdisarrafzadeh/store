import { product } from "../../../types/types";
import {
  GET_PRODUCT_ACTION_CREATOR,
  PRODUCT,
} from "../../constants/product.constants";
import {
  productActionCreator,
  productFailure,
  productRequest,
  productSuccess,
} from "../products.action";

describe("Product ACTIONS", () => {
  it("should create correct action", () => {
    expect(productActionCreator(123)).toEqual({
      type: GET_PRODUCT_ACTION_CREATOR,
      payload: {
        product_id: 123,
      },
    });
  });
  it("should create correct instrument request action", () => {
    expect(productRequest()).toEqual({
      type: PRODUCT.REQUEST,
    });
  });
  it("should create correct instrument success action", () => {
    const mock_product: product = {
      id: 12,
      category: "some",
      title: "this",
      description: "that",
      rating: {
        count: 150,
        rate: 5,
      },
      price: 12121,
      image: "coin",
    };
    expect(productSuccess(mock_product)).toEqual({
      type: PRODUCT.SUCCESS,
      payload: mock_product,
    });
  });
  it("should create correct instrument failure action", () => {
    expect(productFailure("error")).toEqual({
      type: PRODUCT.FAILURE,
      payload: "error",
    });
  });
});
