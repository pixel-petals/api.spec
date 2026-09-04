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
  | HttpAsyncapiComDefinitions110MessageJson
  | {
      /**
       * @minItems 2
       */
      oneOf: [
        HttpAsyncapiComDefinitions110MessageJson,
        HttpAsyncapiComDefinitions110MessageJson,
        ...HttpAsyncapiComDefinitions110MessageJson[]
      ];
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
  | HttpAsyncapiComDefinitions110UserPasswordJson
  | HttpAsyncapiComDefinitions110ApiKeyJson
  | HttpAsyncapiComDefinitions110X509Json
  | HttpAsyncapiComDefinitions110SymmetricEncryptionJson
  | HttpAsyncapiComDefinitions110AsymmetricEncryptionJson
  | HTTPSecurityScheme;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HTTPSecurityScheme =
  | HttpAsyncapiComDefinitions110NonBearerHTTPSecuritySchemeJson
  | HttpAsyncapiComDefinitions110BearerHTTPSecuritySchemeJson
  | HttpAsyncapiComDefinitions110APIKeyHTTPSecuritySchemeJson;

/**
 * !!Auto generated!!
 *  Do not manually edit.
 */
export interface AsyncApi {
  /**
   * The AsyncAPI specification version of this document.
   */
  asyncapi: "1.0.0" | "1.1.0";
  info: HttpAsyncapiComDefinitions110InfoJson;
  /**
   * The base topic to the API. Example: 'hitch'.
   */
  baseTopic?: string;
  servers?: HttpAsyncapiComDefinitions110ServerJson[];
  topics: HttpAsyncapiComDefinitions110TopicsJson;
  components?: HttpAsyncapiComDefinitions110ComponentsJson;
  tags?: HttpAsyncapiComDefinitions110TagJson[];
  security?: SecurityRequirement[];
  externalDocs?: HttpAsyncapiComDefinitions110ExternalDocsJson;
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
export interface HttpAsyncapiComDefinitions110InfoJson {
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
  contact?: HttpAsyncapiComDefinitions110ContactJson;
  license?: HttpAsyncapiComDefinitions110LicenseJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110InfoJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions110ContactJson {
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
   * This interface was referenced by `HttpAsyncapiComDefinitions110ContactJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "license".
 */
export interface HttpAsyncapiComDefinitions110LicenseJson {
  /**
   * The name of the license type. It's encouraged to use an OSI compatible license.
   */
  name: string;
  /**
   * The URL pointing to the license.
   */
  url?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110LicenseJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions110ServerJson {
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
   * This interface was referenced by `HttpAsyncapiComDefinitions110ServerJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface ServerVariables {
  [k: string]: HttpAsyncapiComDefinitions110ServerVariableJson;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariable".
 */
export interface HttpAsyncapiComDefinitions110ServerVariableJson {
  enum?: string[];
  default?: string;
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110ServerVariableJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions110TopicsJson {}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions110TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "vendorExtension".
 */
export interface VendorExtension {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `HttpAsyncapiComDefinitions110TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^[^.]".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "topicItem".
 */
export interface HttpAsyncapiComDefinitions110TopicItemJson {
  $ref?: string;
  /**
   * @minItems 1
   */
  parameters?: [HttpAsyncapiComDefinitions110ParameterJson, ...HttpAsyncapiComDefinitions110ParameterJson[]];
  publish?: Operation;
  subscribe?: Operation;
  deprecated?: boolean;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110TopicItemJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "parameter".
 */
export interface HttpAsyncapiComDefinitions110ParameterJson {
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  schema?: HttpAsyncapiComDefinitions110SchemaJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110ParameterJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions110SchemaJson {
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
  additionalProperties?: HttpAsyncapiComDefinitions110SchemaJson | boolean;
  type?: JsonSchemaDraft07Schema;
  items?:
    | HttpAsyncapiComDefinitions110SchemaJson
    | [HttpAsyncapiComDefinitions110SchemaJson, ...HttpAsyncapiComDefinitions110SchemaJson[]];
  /**
   * @minItems 1
   */
  allOf?: [HttpAsyncapiComDefinitions110SchemaJson, ...HttpAsyncapiComDefinitions110SchemaJson[]];
  /**
   * @minItems 2
   */
  oneOf?: [
    HttpAsyncapiComDefinitions110SchemaJson,
    HttpAsyncapiComDefinitions110SchemaJson,
    ...HttpAsyncapiComDefinitions110SchemaJson[]
  ];
  /**
   * @minItems 2
   */
  anyOf?: [
    HttpAsyncapiComDefinitions110SchemaJson,
    HttpAsyncapiComDefinitions110SchemaJson,
    ...HttpAsyncapiComDefinitions110SchemaJson[]
  ];
  not?: HttpAsyncapiComDefinitions110SchemaJson;
  properties?: {
    [k: string]: HttpAsyncapiComDefinitions110SchemaJson;
  };
  discriminator?: string;
  readOnly?: boolean;
  xml?: HttpAsyncapiComDefinitions110XmlJson;
  externalDocs?: HttpAsyncapiComDefinitions110ExternalDocsJson;
  example?: unknown;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110SchemaJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions110XmlJson {
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
export interface HttpAsyncapiComDefinitions110ExternalDocsJson {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110ExternalDocsJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "message".
 */
export interface HttpAsyncapiComDefinitions110MessageJson {
  $ref?: string;
  headers?: HttpAsyncapiComDefinitions110SchemaJson;
  payload?: HttpAsyncapiComDefinitions110SchemaJson;
  tags?: HttpAsyncapiComDefinitions110TagJson[];
  /**
   * A brief summary of the message.
   */
  summary?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions110ExternalDocsJson;
  deprecated?: boolean;
  example?: unknown;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110MessageJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface HttpAsyncapiComDefinitions110TagJson {
  name: string;
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions110ExternalDocsJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110TagJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions110ComponentsJson {
  schemas?: Schemas;
  messages?: Messages;
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: HttpAsyncapiComDefinitions110ReferenceJson | SecurityScheme;
  };
}
/**
 * JSON objects describing schemas the API uses.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schemas".
 */
export interface Schemas {
  [k: string]: HttpAsyncapiComDefinitions110SchemaJson;
}
/**
 * JSON objects describing the messages being consumed and produced by the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Messages {
  [k: string]: HttpAsyncapiComDefinitions110MessageJson;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface HttpAsyncapiComDefinitions110ReferenceJson {
  $ref: string;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "userPassword".
 */
export interface HttpAsyncapiComDefinitions110UserPasswordJson {
  type: "userPassword";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110UserPasswordJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "apiKey".
 */
export interface HttpAsyncapiComDefinitions110ApiKeyJson {
  type: "apiKey";
  in: "user" | "password";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110ApiKeyJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "X509".
 */
export interface HttpAsyncapiComDefinitions110X509Json {
  type: "X509";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110X509Json`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "symmetricEncryption".
 */
export interface HttpAsyncapiComDefinitions110SymmetricEncryptionJson {
  type: "symmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110SymmetricEncryptionJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "asymmetricEncryption".
 */
export interface HttpAsyncapiComDefinitions110AsymmetricEncryptionJson {
  type: "asymmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110AsymmetricEncryptionJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions110NonBearerHTTPSecuritySchemeJson {
  scheme: string;
  description?: string;
  type: "http";
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110NonBearerHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions110BearerHTTPSecuritySchemeJson {
  scheme: "bearer";
  bearerFormat?: string;
  type: "http";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110BearerHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "APIKeyHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions110APIKeyHTTPSecuritySchemeJson {
  type: "httpApiKey";
  name: string;
  in: "header" | "query" | "cookie";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions110APIKeyHTTPSecuritySchemeJson`'s JSON-Schema definition
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
