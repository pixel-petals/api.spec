/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * http://asyncapi.com/definitions/1.0.0/asyncapi.json
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
 * via the `definition` "SecurityScheme".
 */
export type SecurityScheme =
  | HttpAsyncapiComDefinitions100UserPasswordJson
  | HttpAsyncapiComDefinitions100ApiKeyJson
  | HttpAsyncapiComDefinitions100X509Json
  | HttpAsyncapiComDefinitions100SymmetricEncryptionJson
  | HttpAsyncapiComDefinitions100AsymmetricEncryptionJson
  | HTTPSecurityScheme;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HTTPSecurityScheme =
  | HttpAsyncapiComDefinitions100NonBearerHTTPSecuritySchemeJson
  | HttpAsyncapiComDefinitions100BearerHTTPSecuritySchemeJson
  | HttpAsyncapiComDefinitions100APIKeyHTTPSecuritySchemeJson;

/**
 * !!Auto generated!!
 *  Do not manually edit.
 */
export interface AsyncApi {
  /**
   * The AsyncAPI specification version of this document.
   */
  asyncapi: "1.0.0";
  info: HttpAsyncapiComDefinitions100InfoJson;
  /**
   * The base topic to the API. Example: 'hitch'.
   */
  baseTopic?: string;
  servers?: HttpAsyncapiComDefinitions100ServerJson[];
  topics: HttpAsyncapiComDefinitions100TopicsJson;
  components?: HttpAsyncapiComDefinitions100ComponentsJson;
  tags?: HttpAsyncapiComDefinitions100TagJson[];
  security?: SecurityRequirement[];
  externalDocs?: HttpAsyncapiComDefinitions100ExternalDocsJson;
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
export interface HttpAsyncapiComDefinitions100InfoJson {
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
  contact?: HttpAsyncapiComDefinitions100ContactJson;
  license?: HttpAsyncapiComDefinitions100LicenseJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100InfoJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions100ContactJson {
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
   * This interface was referenced by `HttpAsyncapiComDefinitions100ContactJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "license".
 */
export interface HttpAsyncapiComDefinitions100LicenseJson {
  /**
   * The name of the license type. It's encouraged to use an OSI compatible license.
   */
  name: string;
  /**
   * The URL pointing to the license.
   */
  url?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100LicenseJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions100ServerJson {
  url: string;
  description?: string;
  /**
   * The transfer protocol.
   */
  scheme:
    "kafka" | "kafka-secure" | "amqp" | "amqps" | "mqtt" | "mqtts" | "secure-mqtt" | "ws" | "wss" | "stomp" | "stomps";
  schemeVersion?: string;
  variables?: ServerVariables;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100ServerJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface ServerVariables {
  [k: string]: HttpAsyncapiComDefinitions100ServerVariableJson;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariable".
 */
export interface HttpAsyncapiComDefinitions100ServerVariableJson {
  enum?: string[];
  default?: string;
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100ServerVariableJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions100TopicsJson {}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "vendorExtension".
 */
export interface VendorExtension {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `HttpAsyncapiComDefinitions100TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^[^.]".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "topicItem".
 */
export interface HttpAsyncapiComDefinitions100TopicItemJson {
  $ref?: string;
  publish?: HttpAsyncapiComDefinitions100MessageJson;
  subscribe?: HttpAsyncapiComDefinitions100MessageJson;
  deprecated?: boolean;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100TopicItemJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "message".
 */
export interface HttpAsyncapiComDefinitions100MessageJson {
  $ref?: string;
  headers?: HttpAsyncapiComDefinitions100SchemaJson;
  payload?: HttpAsyncapiComDefinitions100SchemaJson;
  tags?: HttpAsyncapiComDefinitions100TagJson[];
  /**
   * A brief summary of the message.
   */
  summary?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions100ExternalDocsJson;
  deprecated?: boolean;
  example?: unknown;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100MessageJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions100SchemaJson {
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
  additionalProperties?: HttpAsyncapiComDefinitions100SchemaJson | boolean;
  type?: JsonSchemaDraft07Schema;
  items?:
    | HttpAsyncapiComDefinitions100SchemaJson
    | [HttpAsyncapiComDefinitions100SchemaJson, ...HttpAsyncapiComDefinitions100SchemaJson[]];
  /**
   * @minItems 1
   */
  allOf?: [HttpAsyncapiComDefinitions100SchemaJson, ...HttpAsyncapiComDefinitions100SchemaJson[]];
  properties?: {
    [k: string]: HttpAsyncapiComDefinitions100SchemaJson;
  };
  discriminator?: string;
  readOnly?: boolean;
  xml?: HttpAsyncapiComDefinitions100XmlJson;
  externalDocs?: HttpAsyncapiComDefinitions100ExternalDocsJson;
  example?: unknown;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100SchemaJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions100XmlJson {
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
export interface HttpAsyncapiComDefinitions100ExternalDocsJson {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100ExternalDocsJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface HttpAsyncapiComDefinitions100TagJson {
  name: string;
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions100ExternalDocsJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100TagJson`'s JSON-Schema definition
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
export interface HttpAsyncapiComDefinitions100ComponentsJson {
  schemas?: Schemas;
  messages?: Messages;
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: HttpAsyncapiComDefinitions100ReferenceJson | SecurityScheme;
  };
}
/**
 * JSON objects describing schemas the API uses.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schemas".
 */
export interface Schemas {
  [k: string]: HttpAsyncapiComDefinitions100SchemaJson;
}
/**
 * JSON objects describing the messages being consumed and produced by the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Messages {
  [k: string]: HttpAsyncapiComDefinitions100MessageJson;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface HttpAsyncapiComDefinitions100ReferenceJson {
  $ref: string;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "userPassword".
 */
export interface HttpAsyncapiComDefinitions100UserPasswordJson {
  type: "userPassword";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100UserPasswordJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "apiKey".
 */
export interface HttpAsyncapiComDefinitions100ApiKeyJson {
  type: "apiKey";
  in: "user" | "password";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100ApiKeyJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "X509".
 */
export interface HttpAsyncapiComDefinitions100X509Json {
  type: "X509";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100X509Json`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "symmetricEncryption".
 */
export interface HttpAsyncapiComDefinitions100SymmetricEncryptionJson {
  type: "symmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100SymmetricEncryptionJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "asymmetricEncryption".
 */
export interface HttpAsyncapiComDefinitions100AsymmetricEncryptionJson {
  type: "asymmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100AsymmetricEncryptionJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions100NonBearerHTTPSecuritySchemeJson {
  scheme: string;
  description?: string;
  type: "http";
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100NonBearerHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions100BearerHTTPSecuritySchemeJson {
  scheme: "bearer";
  bearerFormat?: string;
  type: "http";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100BearerHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "APIKeyHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions100APIKeyHTTPSecuritySchemeJson {
  type: "httpApiKey";
  name: string;
  in: "header" | "query" | "cookie";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions100APIKeyHTTPSecuritySchemeJson`'s JSON-Schema definition
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
