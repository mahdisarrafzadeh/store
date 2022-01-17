/**
 * maybe try setting token here?
 *
 * excuse the duplication of urls (damn ts)
 */

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

export default function XHRRequest(config_object: AxiosRequestConfig) {
  // return getAxiosInstance()..request(config_object);
  return getAxiosInstance.getInstance().request(config_object);
}

/**
 * notice the (function(){})()
 */
export const getAxiosInstance = (function () {
  class XHRService {
    xhr: AxiosInstance;
    interceptor_id!: number;
    constructor() {
      this.xhr = axios.create();
    }
    request(config_object: AxiosRequestConfig): AxiosPromise {
      return this.xhr(config_object);
    }
  }
  let instance: XHRService;
  return {
    getInstance: function () {
      if (!instance) {
        instance = new XHRService();
        // instance.constructor = null;
      }
      return instance;
    },
  };
})();
