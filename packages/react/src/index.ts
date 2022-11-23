export { FaroErrorBoundary, faroErrorBoundaryInitialState, withFaroErrorBoundary } from './errorBoundary';
export type {
  FaroErrorBoundaryFallbackRender,
  FaroErrorBoundaryProps,
  FaroErrorBoundaryState,
  ReactNodeRender,
  ReactProps,
} from './errorBoundary';

export { ReactIntegration } from './instrumentation';

export { FaroProfiler, withFaroProfiler } from './profiler';
export type { FaroProfilerProps } from './profiler';

export {
  FaroRoute,
  FaroRoutes,
  NavigationType,
  ReactRouterVersion,
  setReactRouterV4V5SSRDependencies,
  setReactRouterV6SSRDependencies,
} from './router';
export type {
  ReactRouterHistory,
  ReactRouterLocation,
  ReactRouterV4V5ActiveEvent,
  ReactRouterV4V5Dependencies,
  ReactRouterV4V5RouteShape,
  ReactRouterV6CreateRoutesFromChildren,
  ReactRouterV6Dependencies,
  ReactRouterV6MatchRoutes,
  ReactRouterV6Params,
  ReactRouterV6RouteMatch,
  ReactRouterV6RouteObject,
  ReactRouterV6RoutesProps,
  ReactRouterV6RoutesShape,
  ReactRouterV6UseLocation,
  ReactRouterV6UseNavigationType,
} from './router';

export type { ReactIntegrationConfig, ReactRouterV4V5Config, ReactRouterV6Config } from './types';

export {
  getMajorReactVersion,
  isReactVersionAtLeast,
  isReactVersionAtLeast16,
  isReactVersionAtLeast17,
  isReactVersionAtLeast18,
  reactVersion,
  reactVersionMajor,
} from './utils';

export {
  faro,
  allLogLevels,
  BaseExtension,
  BaseInstrumentation,
  BaseTransport,
  browserMeta,
  buildStackFrame,
  ConsoleInstrumentation,
  ConsoleTransport,
  Conventions,
  createInternalLogger,
  createPromiseBuffer,
  createSession,
  deepEqual,
  defaultExceptionType,
  defaultEventDomain,
  defaultGlobalObjectKey,
  defaultInternalLoggerLevel,
  defaultLogLevel,
  defaultMetas,
  ErrorsInstrumentation,
  FetchTransport,
  getCurrentTimestamp,
  getDataFromSafariExtensions,
  getInternalFaroFromGlobalObject,
  getStackFramesFromError,
  getTransportBody,
  getWebInstrumentations,
  globalObject,
  initializeFaro,
  internalGlobalObjectKey,
  isArray,
  isBoolean,
  isDomError,
  isDomException,
  isElement,
  isElementDefined,
  isError,
  isErrorDefined,
  isErrorEvent,
  isEvent,
  isEventDefined,
  isFunction,
  isInstanceOf,
  isInt,
  isInternalFaroOnGlobalObject,
  isMap,
  isMapDefined,
  isNull,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isSyntheticEvent,
  isThenable,
  isToString,
  isTypeof,
  isUndefined,
  InternalLoggerLevel,
  LogLevel,
  makeCoreConfig,
  noop,
  pageMeta,
  parseStacktrace,
  setInternalFaroOnGlobalObject,
  TransportItemType,
  transportItemTypeToBodyKey,
  VERSION,
  WebVitalsInstrumentation,
} from '@grafana/faro-web-sdk';

export type {
  Faro,
  API,
  APIEvent,
  BaseObject,
  BaseObjectKey,
  BaseObjectPrimitiveValue,
  BaseObjectValue,
  BeforeSendHook,
  BrowserConfig,
  Config,
  ConsoleInstrumentationOptions,
  ConsoleTransportOptions,
  ErrorEvent,
  ExceptionEvent,
  ExceptionStackFrame,
  ExceptionsAPI,
  ExtendedError,
  ExtendedPromiseRejectionEvent,
  FetchTransportOptions,
  FetchTransportRequestOptions,
  GlobalObject,
  Instrumentation,
  Instrumentations,
  InternalLogger,
  LogContext,
  LogEvent,
  LogsAPI,
  MeasurementEvent,
  MeasurementsAPI,
  Meta,
  MetaAPI,
  MetaApp,
  MetaAttributes,
  MetaBrowser,
  MetaGetter,
  MetaItem,
  MetaPage,
  Metas,
  MetaSDK,
  MetaSDKIntegration,
  MetaSession,
  MetaUser,
  OTELApi,
  Patterns,
  PushErrorOptions,
  PushLogOptions,
  PushMeasurementOptions,
  Stacktrace,
  StacktraceParser,
  TraceContext,
  TraceEvent,
  TracesAPI,
  Transport,
  TransportBody,
  TransportItem,
  TransportItemPayload,
  Transports,
  UnpatchedConsole,
} from '@grafana/faro-web-sdk';