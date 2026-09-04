/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * asyncapi 2.0.0-rc1
 * Strategy: references kept.
 *
 * Do not edit by hand.
 */
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "ReferenceObject".
 */
export type ReferenceObject = string;
/**
 * @minItems 1
 *
 * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
 * via the `definition` "schemaArray".
 */
export type SchemaArray = [JsonSchemaDraft07Schema, ...JsonSchemaDraft07Schema[]];
/**
 * @minItems 1
 *
 * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
 * via the `definition` "stringArray".
 */
export type StringArray = [string, ...string[]];
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SecurityScheme".
 */
export type SecurityScheme =
  | UserPassword
  | ApiKey
  | X509
  | SymmetricEncryption
  | AsymmetricEncryption
  | HTTPSecurityScheme
  | Oauth2Flows
  | OpenIdConnect;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HTTPSecurityScheme = NonBearerHTTPSecurityScheme | BearerHTTPSecurityScheme | APIKeyHTTPSecurityScheme;

/**
 * !!Auto generated!!
 *  Do not manually edit.
 */
export interface AsyncApi {
  /**
   * The AsyncAPI specification version of this document.
   */
  asyncapi: "2.0.0-rc1";
  /**
   * A unique id representing the application.
   */
  id: string;
  info: Info;
  servers?: Server[];
  defaultContentType?: string;
  channels: Channels;
  components?: Components;
  tags?: Tag[];
  externalDocs?: ExternalDocs;
  /**
   * This interface was referenced by `AsyncApi`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * General information about the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "info".
 */
export interface Info {
  /**
   * A unique and precise title of the API.
   */
  title: string;
  /**
   * A semantic version number of the API.
   */
  version: string;
  /**
   * A longer description of the API. Should be different from the title. CommonMark is allowed.
   */
  description?: string;
  /**
   * A URL to the Terms of Service for the API. MUST be in the format of a URL.
   */
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  /**
   * This interface was referenced by `Info`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * Contact information for the owners of the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface Contact {
  /**
   * The identifying name of the contact person/organization.
   */
  name?: string;
  /**
   * The URL pointing to the contact information.
   */
  url?: string;
  /**
   * The email address of the contact person/organization.
   */
  email?: string;
  /**
   * This interface was referenced by `Contact`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "license".
 */
export interface License {
  /**
   * The name of the license type. It's encouraged to use an OSI compatible license.
   */
  name: string;
  /**
   * The URL pointing to the license.
   */
  url?: string;
  /**
   * This interface was referenced by `License`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * An object representing a Server.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "server".
 */
export interface Server {
  url: string;
  description?: string;
  /**
   * The transfer protocol.
   */
  protocol: string;
  protocolVersion?: string;
  variables?: ServerVariables;
  baseChannel?: string;
  security?: SecurityRequirement[];
  /**
   * This interface was referenced by `Server`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface ServerVariables {
  [k: string]: ServerVariable;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariable".
 */
export interface ServerVariable {
  enum?: string[];
  default?: string;
  description?: string;
  examples?: string[];
  /**
   * This interface was referenced by `ServerVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SecurityRequirement".
 */
export interface SecurityRequirement {
  [k: string]: string[];
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channels".
 */
export interface Channels {
  [k: string]: ChannelItem;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channelItem".
 */
export interface ChannelItem {
  $ref?: ReferenceObject;
  parameters?: Parameters;
  publish?: Operation;
  subscribe?: Operation;
  deprecated?: boolean;
  protocolInfo?: {
    [k: string]: {};
  };
  /**
   * This interface was referenced by `ChannelItem`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * JSON objects describing re-usable channel parameters.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "parameters".
 */
export interface Parameters {
  [k: string]: Reference | Parameter;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface Reference {
  $ref: ReferenceObject;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "parameter".
 */
export interface Parameter {
  /**
   * A brief description of the parameter. This could contain examples of use. GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  schema?: Schema;
  $ref?: ReferenceObject;
  /**
   * This interface was referenced by `Parameter`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * A deterministic version of a JSON Schema object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schema".
 */
export interface Schema {
  $ref?: ReferenceObject;
  format?: string;
  title?: JsonSchemaDraft07Schema;
  description?: JsonSchemaDraft07Schema;
  default?: JsonSchemaDraft07Schema;
  multipleOf?: JsonSchemaDraft07Schema;
  maximum?: JsonSchemaDraft07Schema;
  exclusiveMaximum?: JsonSchemaDraft07Schema;
  minimum?: JsonSchemaDraft07Schema;
  exclusiveMinimum?: JsonSchemaDraft07Schema;
  maxLength?: JsonSchemaDraft07Schema;
  minLength?: JsonSchemaDraft07Schema;
  pattern?: JsonSchemaDraft07Schema;
  maxItems?: JsonSchemaDraft07Schema;
  minItems?: JsonSchemaDraft07Schema;
  uniqueItems?: JsonSchemaDraft07Schema;
  maxProperties?: JsonSchemaDraft07Schema;
  minProperties?: JsonSchemaDraft07Schema;
  required?: JsonSchemaDraft07Schema;
  enum?: JsonSchemaDraft07Schema;
  deprecated?: boolean;
  additionalProperties?: Schema | boolean;
  type?: JsonSchemaDraft07Schema;
  items?: Schema | [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  allOf?: [Schema, ...Schema[]];
  /**
   * @minItems 2
   */
  oneOf?: [Schema, Schema, ...Schema[]];
  /**
   * @minItems 2
   */
  anyOf?: [Schema, Schema, ...Schema[]];
  not?: Schema;
  properties?: {
    [k: string]: Schema;
  };
  discriminator?: string;
  readOnly?: boolean;
  xml?: Xml;
  externalDocs?: ExternalDocs;
  example?: unknown;
  examples?: unknown[];
  /**
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * Core schema meta-schema
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "json-schema-draft-07-schema".
 */
export interface JsonSchemaDraft07Schema {
  id?: string;
  $schema?: string;
  title?: string;
  description?: string;
  default?: unknown;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  /**
   * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
   * via the `definition` "positiveInteger".
   */
  maxLength?: number;
  minLength?: unknown;
  pattern?: string;
  additionalItems?: boolean | JsonSchemaDraft07Schema;
  items?: JsonSchemaDraft07Schema | SchemaArray;
  /**
   * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
   * via the `definition` "positiveInteger".
   */
  maxItems?: number;
  /**
   * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
   * via the `definition` "positiveIntegerDefault0".
   */
  minItems?: number & unknown;
  uniqueItems?: boolean;
  /**
   * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
   * via the `definition` "positiveInteger".
   */
  maxProperties?: number;
  /**
   * This interface was referenced by `JsonSchemaDraft07Schema`'s JSON-Schema
   * via the `definition` "positiveIntegerDefault0".
   */
  minProperties?: number & unknown;
  required?: StringArray;
  additionalProperties?: boolean | JsonSchemaDraft07Schema;
  definitions?: {
    [k: string]: JsonSchemaDraft07Schema;
  };
  properties?: {
    [k: string]: JsonSchemaDraft07Schema;
  };
  patternProperties?: {
    [k: string]: JsonSchemaDraft07Schema;
  };
  dependencies?: {
    [k: string]: JsonSchemaDraft07Schema | StringArray;
  };
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
    | [
        "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
        ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
      ];
  format?: string;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: JsonSchemaDraft07Schema;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "xml".
 */
export interface Xml {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}
/**
 * information about external documentation
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "externalDocs".
 */
export interface ExternalDocs {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `ExternalDocs`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operation".
 */
export interface Operation {
  traits?: (Reference | OperationTrait)[];
  summary?: string;
  description?: string;
  tags?: Tag[];
  externalDocs?: ExternalDocs;
  operationId?: string;
  protocolInfo?: {
    [k: string]: {};
  };
  message?:
    | Message
    | {
        /**
         * @minItems 2
         */
        oneOf: [Message, Message, ...Message[]];
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
         */
        [k: string]: unknown;
      };
  /**
   * This interface was referenced by `Operation`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operationTrait".
 */
export interface OperationTrait {
  summary?: string;
  description?: string;
  tags?: Tag[];
  externalDocs?: ExternalDocs;
  operationId?: string;
  protocolInfo?: {
    [k: string]: {};
  };
  /**
   * This interface was referenced by `OperationTrait`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface Tag {
  name: string;
  description?: string;
  externalDocs?: ExternalDocs;
  /**
   * This interface was referenced by `Tag`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "message".
 */
export interface Message {
  schemaFormat?: string;
  contentType?: string;
  headers?: {
    [k: string]: Reference | Schema;
  };
  payload?: unknown;
  correlationId?: Reference | CorrelationId;
  tags?: Tag[];
  /**
   * A brief summary of the message.
   */
  summary?: string;
  /**
   * Name of the message.
   */
  name?: string;
  /**
   * A human-friendly title for the message.
   */
  title?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  externalDocs?: ExternalDocs;
  deprecated?: boolean;
  examples?: {}[];
  protocolInfo?: {
    [k: string]: {};
  };
  traits?: (Reference | MessageTrait)[];
  /**
   * This interface was referenced by `Message`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "correlationId".
 */
export interface CorrelationId {
  /**
   * A optional description of the correlation ID. GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * A runtime expression that specifies the location of the correlation ID
   */
  location: string;
  /**
   * This interface was referenced by `CorrelationId`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messageTrait".
 */
export interface MessageTrait {
  schemaFormat?: string;
  contentType?: string;
  headers?: {
    [k: string]: Reference | Schema;
  };
  correlationId?: Reference | CorrelationId;
  tags?: Tag[];
  /**
   * A brief summary of the message.
   */
  summary?: string;
  /**
   * Name of the message.
   */
  name?: string;
  /**
   * A human-friendly title for the message.
   */
  title?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  externalDocs?: ExternalDocs;
  deprecated?: boolean;
  examples?: {}[];
  protocolInfo?: {
    [k: string]: {};
  };
  /**
   * This interface was referenced by `MessageTrait`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * An object to hold a set of reusable objects for different aspects of the AsyncAPI Specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "components".
 */
export interface Components {
  schemas?: Schemas;
  messages?: Messages;
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | SecurityScheme;
  };
  parameters?: Parameters;
  correlationIds?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | CorrelationId;
  };
  traits?: Traits;
}
/**
 * JSON objects describing schemas the API uses.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schemas".
 */
export interface Schemas {
  [k: string]: Schema;
}
/**
 * JSON objects describing the messages being consumed and produced by the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Messages {
  [k: string]: Message;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "userPassword".
 */
export interface UserPassword {
  type: "userPassword";
  description?: string;
  /**
   * This interface was referenced by `UserPassword`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "apiKey".
 */
export interface ApiKey {
  type: "apiKey";
  in: "user" | "password";
  description?: string;
  /**
   * This interface was referenced by `ApiKey`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "X509".
 */
export interface X509 {
  type: "X509";
  description?: string;
  /**
   * This interface was referenced by `X509`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "symmetricEncryption".
 */
export interface SymmetricEncryption {
  type: "symmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `SymmetricEncryption`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "asymmetricEncryption".
 */
export interface AsymmetricEncryption {
  type: "asymmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `AsymmetricEncryption`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
export interface NonBearerHTTPSecurityScheme {
  scheme: string;
  description?: string;
  type: "http";
  /**
   * This interface was referenced by `NonBearerHTTPSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
export interface BearerHTTPSecurityScheme {
  scheme: "bearer";
  bearerFormat?: string;
  type: "http";
  description?: string;
  /**
   * This interface was referenced by `BearerHTTPSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "APIKeyHTTPSecurityScheme".
 */
export interface APIKeyHTTPSecurityScheme {
  type: "httpApiKey";
  name: string;
  in: "header" | "query" | "cookie";
  description?: string;
  /**
   * This interface was referenced by `APIKeyHTTPSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Flows".
 */
export interface Oauth2Flows {
  type: "oauth2";
  description?: string;
  flows: {
    implicit?: Oauth2Flow & {
      [k: string]: unknown;
    };
    password?: Oauth2Flow & {
      [k: string]: unknown;
    };
    clientCredentials?: Oauth2Flow & {
      [k: string]: unknown;
    };
    authorizationCode?: Oauth2Flow & {
      [k: string]: unknown;
    };
  };
  /**
   * This interface was referenced by `Oauth2Flows`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Flow".
 */
export interface Oauth2Flow {
  authorizationUrl?: string;
  tokenUrl?: string;
  refreshUrl?: string;
  scopes?: Oauth2Scopes;
  /**
   * This interface was referenced by `Oauth2Flow`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Scopes".
 */
export interface Oauth2Scopes {
  [k: string]: string;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "openIdConnect".
 */
export interface OpenIdConnect {
  type: "openIdConnect";
  description?: string;
  openIdConnectUrl: string;
  /**
   * This interface was referenced by `OpenIdConnect`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "traits".
 */
export interface Traits {
  [k: string]: OperationTrait | MessageTrait;
}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "specificationExtension".
 */
export interface SpecificationExtension {
  [k: string]: unknown;
}
