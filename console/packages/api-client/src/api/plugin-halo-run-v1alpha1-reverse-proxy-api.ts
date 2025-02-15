/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { ReverseProxy } from "../models";
// @ts-ignore
import { ReverseProxyList } from "../models";
/**
 * PluginHaloRunV1alpha1ReverseProxyApi - axios parameter creator
 * @export
 */
export const PluginHaloRunV1alpha1ReverseProxyApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create plugin.halo.run/v1alpha1/ReverseProxy
     * @param {ReverseProxy} [reverseProxy] Fresh reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createpluginHaloRunV1alpha1ReverseProxy: async (
      reverseProxy?: ReverseProxy,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        reverseProxy,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete plugin.halo.run/v1alpha1/ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletepluginHaloRunV1alpha1ReverseProxy: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists(
        "deletepluginHaloRunV1alpha1ReverseProxy",
        "name",
        name
      );
      const localVarPath =
        `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get plugin.halo.run/v1alpha1/ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getpluginHaloRunV1alpha1ReverseProxy: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getpluginHaloRunV1alpha1ReverseProxy", "name", name);
      const localVarPath =
        `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List plugin.halo.run/v1alpha1/ReverseProxy
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listpluginHaloRunV1alpha1ReverseProxy: async (
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/plugin.halo.run/v1alpha1/reverseproxies`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update plugin.halo.run/v1alpha1/ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {ReverseProxy} [reverseProxy] Updated reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatepluginHaloRunV1alpha1ReverseProxy: async (
      name: string,
      reverseProxy?: ReverseProxy,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists(
        "updatepluginHaloRunV1alpha1ReverseProxy",
        "name",
        name
      );
      const localVarPath =
        `/apis/plugin.halo.run/v1alpha1/reverseproxies/{name}`.replace(
          `{${"name"}}`,
          encodeURIComponent(String(name))
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        reverseProxy,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * PluginHaloRunV1alpha1ReverseProxyApi - functional programming interface
 * @export
 */
export const PluginHaloRunV1alpha1ReverseProxyApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    PluginHaloRunV1alpha1ReverseProxyApiAxiosParamCreator(configuration);
  return {
    /**
     * Create plugin.halo.run/v1alpha1/ReverseProxy
     * @param {ReverseProxy} [reverseProxy] Fresh reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createpluginHaloRunV1alpha1ReverseProxy(
      reverseProxy?: ReverseProxy,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createpluginHaloRunV1alpha1ReverseProxy(
          reverseProxy,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete plugin.halo.run/v1alpha1/ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletepluginHaloRunV1alpha1ReverseProxy(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletepluginHaloRunV1alpha1ReverseProxy(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get plugin.halo.run/v1alpha1/ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getpluginHaloRunV1alpha1ReverseProxy(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getpluginHaloRunV1alpha1ReverseProxy(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List plugin.halo.run/v1alpha1/ReverseProxy
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listpluginHaloRunV1alpha1ReverseProxy(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ReverseProxyList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listpluginHaloRunV1alpha1ReverseProxy(
          fieldSelector,
          labelSelector,
          page,
          size,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update plugin.halo.run/v1alpha1/ReverseProxy
     * @param {string} name Name of reverseproxy
     * @param {ReverseProxy} [reverseProxy] Updated reverseproxy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatepluginHaloRunV1alpha1ReverseProxy(
      name: string,
      reverseProxy?: ReverseProxy,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReverseProxy>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatepluginHaloRunV1alpha1ReverseProxy(
          name,
          reverseProxy,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * PluginHaloRunV1alpha1ReverseProxyApi - factory interface
 * @export
 */
export const PluginHaloRunV1alpha1ReverseProxyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = PluginHaloRunV1alpha1ReverseProxyApiFp(configuration);
  return {
    /**
     * Create plugin.halo.run/v1alpha1/ReverseProxy
     * @param {PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createpluginHaloRunV1alpha1ReverseProxy(
      requestParameters: PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxyRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ReverseProxy> {
      return localVarFp
        .createpluginHaloRunV1alpha1ReverseProxy(
          requestParameters.reverseProxy,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete plugin.halo.run/v1alpha1/ReverseProxy
     * @param {PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletepluginHaloRunV1alpha1ReverseProxy(
      requestParameters: PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletepluginHaloRunV1alpha1ReverseProxy(
          requestParameters.name,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Get plugin.halo.run/v1alpha1/ReverseProxy
     * @param {PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getpluginHaloRunV1alpha1ReverseProxy(
      requestParameters: PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ReverseProxy> {
      return localVarFp
        .getpluginHaloRunV1alpha1ReverseProxy(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List plugin.halo.run/v1alpha1/ReverseProxy
     * @param {PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listpluginHaloRunV1alpha1ReverseProxy(
      requestParameters: PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxyRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ReverseProxyList> {
      return localVarFp
        .listpluginHaloRunV1alpha1ReverseProxy(
          requestParameters.fieldSelector,
          requestParameters.labelSelector,
          requestParameters.page,
          requestParameters.size,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update plugin.halo.run/v1alpha1/ReverseProxy
     * @param {PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatepluginHaloRunV1alpha1ReverseProxy(
      requestParameters: PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxyRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ReverseProxy> {
      return localVarFp
        .updatepluginHaloRunV1alpha1ReverseProxy(
          requestParameters.name,
          requestParameters.reverseProxy,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createpluginHaloRunV1alpha1ReverseProxy operation in PluginHaloRunV1alpha1ReverseProxyApi.
 * @export
 * @interface PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxyRequest
 */
export interface PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxyRequest {
  /**
   * Fresh reverseproxy
   * @type {ReverseProxy}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxy
   */
  readonly reverseProxy?: ReverseProxy;
}

/**
 * Request parameters for deletepluginHaloRunV1alpha1ReverseProxy operation in PluginHaloRunV1alpha1ReverseProxyApi.
 * @export
 * @interface PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxyRequest
 */
export interface PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxyRequest {
  /**
   * Name of reverseproxy
   * @type {string}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxy
   */
  readonly name: string;
}

/**
 * Request parameters for getpluginHaloRunV1alpha1ReverseProxy operation in PluginHaloRunV1alpha1ReverseProxyApi.
 * @export
 * @interface PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxyRequest
 */
export interface PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxyRequest {
  /**
   * Name of reverseproxy
   * @type {string}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxy
   */
  readonly name: string;
}

/**
 * Request parameters for listpluginHaloRunV1alpha1ReverseProxy operation in PluginHaloRunV1alpha1ReverseProxyApi.
 * @export
 * @interface PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxyRequest
 */
export interface PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxyRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxy
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxy
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxy
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxy
   */
  readonly size?: number;
}

/**
 * Request parameters for updatepluginHaloRunV1alpha1ReverseProxy operation in PluginHaloRunV1alpha1ReverseProxyApi.
 * @export
 * @interface PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxyRequest
 */
export interface PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxyRequest {
  /**
   * Name of reverseproxy
   * @type {string}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxy
   */
  readonly name: string;

  /**
   * Updated reverseproxy
   * @type {ReverseProxy}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxy
   */
  readonly reverseProxy?: ReverseProxy;
}

/**
 * PluginHaloRunV1alpha1ReverseProxyApi - object-oriented interface
 * @export
 * @class PluginHaloRunV1alpha1ReverseProxyApi
 * @extends {BaseAPI}
 */
export class PluginHaloRunV1alpha1ReverseProxyApi extends BaseAPI {
  /**
   * Create plugin.halo.run/v1alpha1/ReverseProxy
   * @param {PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApi
   */
  public createpluginHaloRunV1alpha1ReverseProxy(
    requestParameters: PluginHaloRunV1alpha1ReverseProxyApiCreatepluginHaloRunV1alpha1ReverseProxyRequest = {},
    options?: AxiosRequestConfig
  ) {
    return PluginHaloRunV1alpha1ReverseProxyApiFp(this.configuration)
      .createpluginHaloRunV1alpha1ReverseProxy(
        requestParameters.reverseProxy,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete plugin.halo.run/v1alpha1/ReverseProxy
   * @param {PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApi
   */
  public deletepluginHaloRunV1alpha1ReverseProxy(
    requestParameters: PluginHaloRunV1alpha1ReverseProxyApiDeletepluginHaloRunV1alpha1ReverseProxyRequest,
    options?: AxiosRequestConfig
  ) {
    return PluginHaloRunV1alpha1ReverseProxyApiFp(this.configuration)
      .deletepluginHaloRunV1alpha1ReverseProxy(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get plugin.halo.run/v1alpha1/ReverseProxy
   * @param {PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApi
   */
  public getpluginHaloRunV1alpha1ReverseProxy(
    requestParameters: PluginHaloRunV1alpha1ReverseProxyApiGetpluginHaloRunV1alpha1ReverseProxyRequest,
    options?: AxiosRequestConfig
  ) {
    return PluginHaloRunV1alpha1ReverseProxyApiFp(this.configuration)
      .getpluginHaloRunV1alpha1ReverseProxy(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List plugin.halo.run/v1alpha1/ReverseProxy
   * @param {PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApi
   */
  public listpluginHaloRunV1alpha1ReverseProxy(
    requestParameters: PluginHaloRunV1alpha1ReverseProxyApiListpluginHaloRunV1alpha1ReverseProxyRequest = {},
    options?: AxiosRequestConfig
  ) {
    return PluginHaloRunV1alpha1ReverseProxyApiFp(this.configuration)
      .listpluginHaloRunV1alpha1ReverseProxy(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update plugin.halo.run/v1alpha1/ReverseProxy
   * @param {PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PluginHaloRunV1alpha1ReverseProxyApi
   */
  public updatepluginHaloRunV1alpha1ReverseProxy(
    requestParameters: PluginHaloRunV1alpha1ReverseProxyApiUpdatepluginHaloRunV1alpha1ReverseProxyRequest,
    options?: AxiosRequestConfig
  ) {
    return PluginHaloRunV1alpha1ReverseProxyApiFp(this.configuration)
      .updatepluginHaloRunV1alpha1ReverseProxy(
        requestParameters.name,
        requestParameters.reverseProxy,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
