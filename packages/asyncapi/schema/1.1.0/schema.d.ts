/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * http://asyncapi.com/definitions/1.1.0/asyncapi.json
 * Strategy: references kept.
 *
 * Do not edit by hand.
 */
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
 * via the `definition` "operation".
 */
export type Operation =
  | Message
  | {
      /**
       * @minItems 2
       */
      oneOf: [Message, Message, ...Message[]];
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SecurityScheme".
 */
export type SecurityScheme =
  UserPassword | ApiKey | X509 | SymmetricEncryption | AsymmetricEncryption | HTTPSecurityScheme;
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
  asyncapi: "1.0.0" | "1.1.0";
  info: Info;
  /**
   * The base topic to the API. Example: 'hitch'.
   */
  baseTopic?: string;
  servers?: Server[];
  topics: Topics;
  components?: Components;
  tags?: Tag[];
  security?: SecurityRequirement[];
  externalDocs?: ExternalDocs;
  /**
   * This interface was referenced by `AsyncApi`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
  scheme:
    | "kafka"
    | "kafka-secure"
    | "amqp"
    | "amqps"
    | "mqtt"
    | "mqtts"
    | "secure-mqtt"
    | "ws"
    | "wss"
    | "stomp"
    | "stomps"
    | "jms";
  schemeVersion?: string;
  variables?: ServerVariables;
  /**
   * This interface was referenced by `Server`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
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
  /**
   * This interface was referenced by `ServerVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Relative paths to the individual topics. They must be relative to the 'baseTopic'.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "topics".
 */
export interface Topics {}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `Topics`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "vendorExtension".
 */
export interface VendorExtension {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `Topics`'s JSON-Schema definition
 * via the `patternProperty` "^[^.]".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "topicItem".
 */
export interface TopicItem {
  $ref?: string;
  /**
   * @minItems 1
   */
  parameters?: [Parameter, ...Parameter[]];
  publish?: Operation;
  subscribe?: Operation;
  deprecated?: boolean;
  /**
   * This interface was referenced by `TopicItem`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "parameter".
 */
export interface Parameter {
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  schema?: Schema;
  /**
   * This interface was referenced by `Parameter`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
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
  $ref?: string;
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
  /**
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "message".
 */
export interface Message {
  $ref?: string;
  headers?: Schema;
  payload?: Schema;
  tags?: Tag[];
  /**
   * A brief summary of the message.
   */
  summary?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  externalDocs?: ExternalDocs;
  deprecated?: boolean;
  example?: unknown;
  /**
   * This interface was referenced by `Message`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | SecurityScheme;
  };
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
 * via the `definition` "Reference".
 */
export interface Reference {
  $ref: string;
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
   * via the `patternProperty` "^x-".
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
