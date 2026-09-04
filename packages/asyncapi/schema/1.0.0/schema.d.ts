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
 * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
 * via the `definition` "schemaArray".
 */
export type SchemaArray = [HttpJsonSchemaOrgDraft04Schema, ...HttpJsonSchemaOrgDraft04Schema[]];
/**
 * @minItems 1
 *
 * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
 * via the `definition` "stringArray".
 */
export type StringArray = [string, ...string[]];
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SecurityScheme".
 */
export type HttpAsyncapiComDefinitions100SecuritySchemeJson =
  | HttpAsyncapiComDefinitions100UserPasswordJson
  | HttpAsyncapiComDefinitions100ApiKeyJson
  | HttpAsyncapiComDefinitions100X509Json
  | HttpAsyncapiComDefinitions100SymmetricEncryptionJson
  | HttpAsyncapiComDefinitions100AsymmetricEncryptionJson
  | HttpAsyncapiComDefinitions100HTTPSecuritySchemeJson;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HttpAsyncapiComDefinitions100HTTPSecuritySchemeJson =
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
  security?: HttpAsyncapiComDefinitions100SecurityRequirementJson[];
  externalDocs?: HttpAsyncapiComDefinitions100ExternalDocsJson;
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100ContactJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100LicenseJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100InfoJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100ServerVariableJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100ServerJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100ExternalDocsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100SchemaJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100TagJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100MessageJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions100TopicItemJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "vendorExtension".
 */
export interface HttpAsyncapiComDefinitions100VendorExtensionJson {
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
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
  variables?: HttpAsyncapiComDefinitions100ServerVariablesJson;
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface HttpAsyncapiComDefinitions100ServerVariablesJson {
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
}
/**
 * Relative paths to the individual topics. They must be relative to the 'baseTopic'.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "topics".
 */
export interface HttpAsyncapiComDefinitions100TopicsJson {}
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
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
  title?: HttpJsonSchemaOrgDraft04Schema;
  description?: HttpJsonSchemaOrgDraft04Schema;
  default?: HttpJsonSchemaOrgDraft04Schema;
  multipleOf?: HttpJsonSchemaOrgDraft04Schema;
  maximum?: HttpJsonSchemaOrgDraft04Schema;
  exclusiveMaximum?: HttpJsonSchemaOrgDraft04Schema;
  minimum?: HttpJsonSchemaOrgDraft04Schema;
  exclusiveMinimum?: HttpJsonSchemaOrgDraft04Schema;
  maxLength?: HttpJsonSchemaOrgDraft04Schema;
  minLength?: HttpJsonSchemaOrgDraft04Schema;
  pattern?: HttpJsonSchemaOrgDraft04Schema;
  maxItems?: HttpJsonSchemaOrgDraft04Schema;
  minItems?: HttpJsonSchemaOrgDraft04Schema;
  uniqueItems?: HttpJsonSchemaOrgDraft04Schema;
  maxProperties?: HttpJsonSchemaOrgDraft04Schema;
  minProperties?: HttpJsonSchemaOrgDraft04Schema;
  required?: HttpJsonSchemaOrgDraft04Schema;
  enum?: HttpJsonSchemaOrgDraft04Schema;
  additionalProperties?: HttpAsyncapiComDefinitions100SchemaJson | boolean;
  type?: HttpJsonSchemaOrgDraft04Schema;
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
}
/**
 * Core schema meta-schema
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "json-schema-draft-07-schema".
 */
export interface HttpJsonSchemaOrgDraft04Schema {
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
   * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
   * via the `definition` "positiveInteger".
   */
  maxLength?: number;
  minLength?: unknown;
  pattern?: string;
  additionalItems?: boolean | HttpJsonSchemaOrgDraft04Schema;
  items?: HttpJsonSchemaOrgDraft04Schema | SchemaArray;
  /**
   * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
   * via the `definition` "positiveInteger".
   */
  maxItems?: number;
  /**
   * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
   * via the `definition` "positiveIntegerDefault0".
   */
  minItems?: number & unknown;
  uniqueItems?: boolean;
  /**
   * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
   * via the `definition` "positiveInteger".
   */
  maxProperties?: number;
  /**
   * This interface was referenced by `HttpJsonSchemaOrgDraft04Schema`'s JSON-Schema
   * via the `definition` "positiveIntegerDefault0".
   */
  minProperties?: number & unknown;
  required?: StringArray;
  additionalProperties?: boolean | HttpJsonSchemaOrgDraft04Schema;
  definitions?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema;
  };
  properties?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema;
  };
  patternProperties?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema;
  };
  dependencies?: {
    [k: string]: HttpJsonSchemaOrgDraft04Schema | StringArray;
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
  not?: HttpJsonSchemaOrgDraft04Schema;
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
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface HttpAsyncapiComDefinitions100TagJson {
  name: string;
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions100ExternalDocsJson;
  [k: string]: HttpAsyncapiComDefinitions100VendorExtensionJson;
}
/**
 * An object to hold a set of reusable objects for different aspects of the AsyncAPI Specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "components".
 */
export interface HttpAsyncapiComDefinitions100ComponentsJson {
  schemas?: HttpAsyncapiComDefinitions100SchemasJson;
  messages?: HttpAsyncapiComDefinitions100MessagesJson;
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: HttpAsyncapiComDefinitions100ReferenceJson | HttpAsyncapiComDefinitions100SecuritySchemeJson;
  };
}
/**
 * JSON objects describing schemas the API uses.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schemas".
 */
export interface HttpAsyncapiComDefinitions100SchemasJson {
  [k: string]: HttpAsyncapiComDefinitions100SchemaJson;
}
/**
 * JSON objects describing the messages being consumed and produced by the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface HttpAsyncapiComDefinitions100MessagesJson {
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
export interface HttpAsyncapiComDefinitions100SecurityRequirementJson {
  [k: string]: string[];
}
