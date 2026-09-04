/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * asyncapi 2.4.0
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
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schema".
 */
export type Schema = JsonSchemaDraft07Schema & {
  additionalProperties?: Schema | boolean;
  items?: Schema | [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  allOf?: [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  oneOf?: [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  anyOf?: [Schema, ...Schema[]];
  not?: Schema;
  properties?: {
    [k: string]: Schema;
  };
  patternProperties?: {
    [k: string]: Schema;
  };
  propertyNames?: Schema;
  contains?: Schema;
  discriminator?: string;
  externalDocs?: ExternalDocs;
  deprecated?: boolean;
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
};
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "json-schema-draft-07-schema".
 */
export type JsonSchemaDraft07Schema =
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema
       * via the `definition` "nonNegativeInteger".
       */
      maxLength?: number;
      minLength?: unknown;
      pattern?: string;
      additionalItems?: JsonSchemaDraft07Schema;
      items?: JsonSchemaDraft07Schema | SchemaArray;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema
       * via the `definition` "nonNegativeInteger".
       */
      maxItems?: number;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema
       * via the `definition` "nonNegativeIntegerDefault0".
       */
      minItems?: number & unknown;
      uniqueItems?: boolean;
      contains?: JsonSchemaDraft07Schema;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema
       * via the `definition` "nonNegativeInteger".
       */
      maxProperties?: number;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema
       * via the `definition` "nonNegativeIntegerDefault0".
       */
      minProperties?: number & unknown;
      required?: StringArray;
      additionalProperties?: JsonSchemaDraft07Schema;
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
      propertyNames?: JsonSchemaDraft07Schema;
      enum?: [true];
      type?:
        | ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")
        | [
            "array" | "boolean" | "integer" | "null" | "number" | "object" | "string",
            ...("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: JsonSchemaDraft07Schema;
      then?: JsonSchemaDraft07Schema;
      else?: JsonSchemaDraft07Schema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: JsonSchemaDraft07Schema;
    }
  | boolean;
/**
 * @minItems 1
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "schemaArray".
 */
export type SchemaArray = [JsonSchemaDraft07Schema, ...JsonSchemaDraft07Schema[]];
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "stringArray".
 */
export type StringArray = string[];
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "message".
 */
export type Message =
  | Reference
  | (
      | {
          oneOf: Message[];
        }
      | {
          [k: string]: unknown;
        }
    );
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
  | OpenIdConnect
  | SaslSecurityScheme;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HTTPSecurityScheme = NonBearerHTTPSecurityScheme | BearerHTTPSecurityScheme | APIKeyHTTPSecurityScheme;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslSecurityScheme".
 */
export type SaslSecurityScheme = SaslPlainSecurityScheme | SaslScramSecurityScheme | SaslGssapiSecurityScheme;
/**
 * Json-Schema definition for Avro AVSC files.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "avroSchema_v1".
 */
export type AvroSchemaV1 = AvroSchema;
/**
 * Root Schema
 */
export type AvroSchema = AvroTypes;
/**
 * Allowed Avro types
 */
export type AvroTypes =
  PrimitiveType | PrimitiveTypeWithMetadata | CustomType | Record | Enum | Array | Map | Fixed | Union;
/**
 * Basic type primitives.
 */
export type PrimitiveType = "null" | "boolean" | "int" | "long" | "float" | "double" | "bytes" | "string";
/**
 * Reference to a ComplexType
 */
export type CustomType = string;
/**
 * A Union of types
 *
 * @minItems 1
 */
export type Union = [AvroSchema, ...AvroSchema[]];

/**
 * !!Auto generated!!
 *  Do not manually edit.
 */
export interface AsyncApi {
  /**
   * The AsyncAPI specification version of this document.
   */
  asyncapi: "2.4.0";
  /**
   * A unique id representing the application.
   */
  id?: string;
  info: Info;
  servers?: Servers;
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
 * An object representing multiple servers.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "servers".
 */
export interface Servers {
  [k: string]: Reference | Server;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface Reference {
  $ref: ReferenceObject;
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
  security?: SecurityRequirement[];
  bindings?: BindingsObject;
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
 * via the `definition` "bindingsObject".
 */
export interface BindingsObject {
  http?: unknown;
  ws?: unknown;
  amqp?: unknown;
  amqp1?: unknown;
  mqtt?: unknown;
  mqtt5?: unknown;
  kafka?: unknown;
  anypointmq?: unknown;
  nats?: unknown;
  jms?: unknown;
  sns?: unknown;
  sqs?: unknown;
  stomp?: unknown;
  redis?: unknown;
  ibmmq?: unknown;
  solace?: unknown;
  [k: string]: unknown;
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
  /**
   * A description of the channel.
   */
  description?: string;
  /**
   * The names of the servers on which this channel is available. If absent or empty then this channel must be available on all servers.
   */
  servers?: string[];
  publish?: Operation;
  subscribe?: Operation;
  deprecated?: boolean;
  bindings?: BindingsObject;
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
 * via the `definition` "parameter".
 */
export interface Parameter {
  /**
   * A brief description of the parameter. This could contain examples of use. GitHub Flavored Markdown is allowed.
   */
  description?: string;
  schema?: Schema;
  /**
   * A runtime expression that specifies the location of the parameter value
   */
  location?: string;
  $ref?: ReferenceObject;
  /**
   * This interface was referenced by `Parameter`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
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
  security?: SecurityRequirement[];
  tags?: Tag[];
  externalDocs?: ExternalDocs;
  operationId?: string;
  bindings?: BindingsObject;
  message?: Message;
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
  security?: SecurityRequirement[];
  bindings?: BindingsObject;
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
 * An object to hold a set of reusable objects for different aspects of the AsyncAPI Specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "components".
 */
export interface Components {
  schemas?: Schemas;
  servers?: Servers;
  channels?: Channels;
  serverVariables?: ServerVariables;
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
  operationTraits?: {
    [k: string]: OperationTrait;
  };
  messageTraits?: {
    [k: string]: MessageTrait;
  };
  serverBindings?: {
    [k: string]: BindingsObject;
  };
  channelBindings?: {
    [k: string]: BindingsObject;
  };
  operationBindings?: {
    [k: string]: BindingsObject;
  };
  messageBindings?: {
    [k: string]: BindingsObject;
  };
  /**
   * This interface was referenced by `Components`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
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
 * via the `definition` "SaslPlainSecurityScheme".
 */
export interface SaslPlainSecurityScheme {
  type: "plain";
  description?: string;
  /**
   * This interface was referenced by `SaslPlainSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslScramSecurityScheme".
 */
export interface SaslScramSecurityScheme {
  type: "scramSha256" | "scramSha512";
  description?: string;
  /**
   * This interface was referenced by `SaslScramSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslGssapiSecurityScheme".
 */
export interface SaslGssapiSecurityScheme {
  type: "gssapi";
  description?: string;
  /**
   * This interface was referenced by `SaslGssapiSecurityScheme`'s JSON-Schema definition
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
  headers?: Schema & {
    type?: "object";
  };
  messageId?: string;
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
  bindings?: BindingsObject;
  /**
   * This interface was referenced by `MessageTrait`'s JSON-Schema definition
   * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
   */
  [k: string]: unknown;
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
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "openapiSchema_3_0".
 */
export interface OpenapiSchema_3_0 {
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  /**
   * @minItems 1
   */
  required?: [string, ...string[]];
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?: "array" | "boolean" | "integer" | "number" | "object" | "string";
  not?: OpenapiSchema_3_0 | Reference1;
  allOf?: (OpenapiSchema_3_0 | Reference1)[];
  oneOf?: (OpenapiSchema_3_0 | Reference1)[];
  anyOf?: (OpenapiSchema_3_0 | Reference1)[];
  items?: OpenapiSchema_3_0 | Reference1;
  properties?: {
    [k: string]: OpenapiSchema_3_0 | Reference1;
  };
  additionalProperties?: OpenapiSchema_3_0 | Reference1 | boolean;
  description?: string;
  format?: string;
  default?: unknown;
  nullable?: boolean;
  discriminator?: Discriminator;
  readOnly?: boolean;
  writeOnly?: boolean;
  example?: unknown;
  externalDocs?: ExternalDocumentation;
  deprecated?: boolean;
  xml?: XML;
  /**
   * This interface was referenced by `OpenapiSchema_3_0`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `OpenapiSchema_3_0`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface Reference1 {
  /**
   * This interface was referenced by `Reference1`'s JSON-Schema definition
   * via the `patternProperty` "^\$ref$".
   */
  [k: string]: string;
}
/**
 * This interface was referenced by `OpenapiSchema_3_0`'s JSON-Schema
 * via the `definition` "Discriminator".
 */
export interface Discriminator {
  propertyName: string;
  mapping?: {
    [k: string]: string;
  };
}
/**
 * This interface was referenced by `OpenapiSchema_3_0`'s JSON-Schema
 * via the `definition` "ExternalDocumentation".
 */
export interface ExternalDocumentation {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `ExternalDocumentation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `OpenapiSchema_3_0`'s JSON-Schema
 * via the `definition` "XML".
 */
export interface XML {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
  /**
   * This interface was referenced by `XML`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * A primitive type with metadata attached.
 */
export interface PrimitiveTypeWithMetadata {
  type: PrimitiveType;
}
/**
 * A Record
 */
export interface Record {
  type: "record";
  name: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  fields: Field[];
}
/**
 * A field within a Record
 */
export interface Field {
  name: string;
  type: AvroTypes;
  doc?: string;
  default?: unknown;
  order?: "ascending" | "descending" | "ignore";
  aliases?: string[];
}
/**
 * An enumeration
 */
export interface Enum {
  type: "enum";
  name: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  symbols: string[];
}
/**
 * An array
 */
export interface Array {
  type: "array";
  name?: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  items: AvroTypes;
}
/**
 * A map of values
 */
export interface Map {
  type: "map";
  name?: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  values: AvroTypes;
}
/**
 * A fixed sized array of bytes
 */
export interface Fixed {
  type: "fixed";
  name: string;
  namespace?: string;
  doc?: string;
  aliases?: string[];
  size: number;
}
