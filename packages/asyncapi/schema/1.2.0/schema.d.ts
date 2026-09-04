/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * http://asyncapi.com/definitions/1.2.0/asyncapi.json
 * Strategy: references kept.
 *
 * Do not edit by hand.
 */
/**
 * !!Auto generated!!
 *  Do not manually edit.
 */
export type AsyncApi = {
  /**
   * The AsyncAPI specification version of this document.
   */
  asyncapi: "1.0.0" | "1.1.0" | "1.2.0";
  info: HttpAsyncapiComDefinitions120InfoJson;
  /**
   * The base topic to the API. Example: 'hitch'.
   */
  baseTopic?: string;
  servers?: HttpAsyncapiComDefinitions120ServerJson[];
  topics?: HttpAsyncapiComDefinitions120TopicsJson;
  stream?: StreamObject;
  events?: EventsObject;
  components?: HttpAsyncapiComDefinitions120ComponentsJson;
  tags?: HttpAsyncapiComDefinitions120TagJson[];
  security?: SecurityRequirement[];
  externalDocs?: HttpAsyncapiComDefinitions120ExternalDocsJson;
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
} & {
  [k: string]: unknown;
};
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
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "operation".
 */
export type Operation =
  | HttpAsyncapiComDefinitions120MessageJson
  | {
      /**
       * @minItems 2
       */
      oneOf: [
        HttpAsyncapiComDefinitions120MessageJson,
        HttpAsyncapiComDefinitions120MessageJson,
        ...HttpAsyncapiComDefinitions120MessageJson[]
      ];
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
export type StreamFramingObject =
  | {
      type?: "chunked";
      delimiter?: "\\r\\n" | "\\n";
    }
  | {
      type?: "sse";
      delimiter?: "\\n\\n";
    };
/**
 * @minItems 1
 */
export type StreamReadObject = [
  HttpAsyncapiComDefinitions120MessageJson,
  ...HttpAsyncapiComDefinitions120MessageJson[]
];
/**
 * @minItems 1
 */
export type StreamWriteObject = [
  HttpAsyncapiComDefinitions120MessageJson,
  ...HttpAsyncapiComDefinitions120MessageJson[]
];
/**
 * The list of messages an events API sends and/or receives.
 */
export type EventsObject = {
  [k: string]: unknown;
} & {
  receive?: EventsReceiveObject;
  send?: EventsSendObject;
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
};
/**
 * @minItems 1
 */
export type EventsReceiveObject = [
  HttpAsyncapiComDefinitions120MessageJson,
  ...HttpAsyncapiComDefinitions120MessageJson[]
];
/**
 * @minItems 1
 */
export type EventsSendObject = [
  HttpAsyncapiComDefinitions120MessageJson,
  ...HttpAsyncapiComDefinitions120MessageJson[]
];
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "SecurityScheme".
 */
export type SecurityScheme =
  | HttpAsyncapiComDefinitions120UserPasswordJson
  | HttpAsyncapiComDefinitions120ApiKeyJson
  | HttpAsyncapiComDefinitions120X509Json
  | HttpAsyncapiComDefinitions120SymmetricEncryptionJson
  | HttpAsyncapiComDefinitions120AsymmetricEncryptionJson
  | HTTPSecurityScheme;
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HTTPSecurityScheme =
  | HttpAsyncapiComDefinitions120NonBearerHTTPSecuritySchemeJson
  | HttpAsyncapiComDefinitions120BearerHTTPSecuritySchemeJson
  | HttpAsyncapiComDefinitions120APIKeyHTTPSecuritySchemeJson;
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "events".
 */
export type EventsObject1 = Events & {
  receive?: EventsReceiveObject;
  send?: EventsSendObject;
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
};
export type Events = {
  [k: string]: unknown;
};

/**
 * General information about the API.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "info".
 */
export interface HttpAsyncapiComDefinitions120InfoJson {
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
  contact?: HttpAsyncapiComDefinitions120ContactJson;
  license?: HttpAsyncapiComDefinitions120LicenseJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120InfoJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Contact information for the owners of the API.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface HttpAsyncapiComDefinitions120ContactJson {
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
   * This interface was referenced by `HttpAsyncapiComDefinitions120ContactJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "license".
 */
export interface HttpAsyncapiComDefinitions120LicenseJson {
  /**
   * The name of the license type. It's encouraged to use an OSI compatible license.
   */
  name: string;
  /**
   * The URL pointing to the license.
   */
  url?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120LicenseJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * An object representing a Server.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "server".
 */
export interface HttpAsyncapiComDefinitions120ServerJson {
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
    | "jms"
    | "http"
    | "https";
  schemeVersion?: string;
  variables?: ServerVariables;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120ServerJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface ServerVariables {
  [k: string]: HttpAsyncapiComDefinitions120ServerVariableJson;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "serverVariable".
 */
export interface HttpAsyncapiComDefinitions120ServerVariableJson {
  enum?: string[];
  default?: string;
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120ServerVariableJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Relative paths to the individual topics. They must be relative to the 'baseTopic'.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "topics".
 */
export interface HttpAsyncapiComDefinitions120TopicsJson {}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "vendorExtension".
 */
export interface VendorExtension {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `HttpAsyncapiComDefinitions120TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^[^.]".
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "topicItem".
 */
export interface HttpAsyncapiComDefinitions120TopicItemJson {
  $ref?: string;
  /**
   * @minItems 1
   */
  parameters?: [HttpAsyncapiComDefinitions120ParameterJson, ...HttpAsyncapiComDefinitions120ParameterJson[]];
  publish?: Operation;
  subscribe?: Operation;
  deprecated?: boolean;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120TopicItemJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "parameter".
 */
export interface HttpAsyncapiComDefinitions120ParameterJson {
  /**
   * A brief description of the parameter. This could contain examples of use.  GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * The name of the parameter.
   */
  name?: string;
  schema?: HttpAsyncapiComDefinitions120SchemaJson;
  $ref?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120ParameterJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * A deterministic version of a JSON Schema object.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "schema".
 */
export interface HttpAsyncapiComDefinitions120SchemaJson {
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
  additionalProperties?: HttpAsyncapiComDefinitions120SchemaJson | boolean;
  type?: JsonSchemaDraft07Schema;
  items?:
    | HttpAsyncapiComDefinitions120SchemaJson
    | [HttpAsyncapiComDefinitions120SchemaJson, ...HttpAsyncapiComDefinitions120SchemaJson[]];
  /**
   * @minItems 1
   */
  allOf?: [HttpAsyncapiComDefinitions120SchemaJson, ...HttpAsyncapiComDefinitions120SchemaJson[]];
  /**
   * @minItems 2
   */
  oneOf?: [
    HttpAsyncapiComDefinitions120SchemaJson,
    HttpAsyncapiComDefinitions120SchemaJson,
    ...HttpAsyncapiComDefinitions120SchemaJson[]
  ];
  /**
   * @minItems 2
   */
  anyOf?: [
    HttpAsyncapiComDefinitions120SchemaJson,
    HttpAsyncapiComDefinitions120SchemaJson,
    ...HttpAsyncapiComDefinitions120SchemaJson[]
  ];
  not?: HttpAsyncapiComDefinitions120SchemaJson;
  properties?: {
    [k: string]: HttpAsyncapiComDefinitions120SchemaJson;
  };
  discriminator?: string;
  readOnly?: boolean;
  xml?: HttpAsyncapiComDefinitions120XmlJson;
  externalDocs?: HttpAsyncapiComDefinitions120ExternalDocsJson;
  example?: unknown;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120SchemaJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Core schema meta-schema
 *
 * This interface was referenced by `undefined`'s JSON-Schema
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
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "xml".
 */
export interface HttpAsyncapiComDefinitions120XmlJson {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}
/**
 * information about external documentation
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "externalDocs".
 */
export interface HttpAsyncapiComDefinitions120ExternalDocsJson {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120ExternalDocsJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "message".
 */
export interface HttpAsyncapiComDefinitions120MessageJson {
  $ref?: string;
  headers?: HttpAsyncapiComDefinitions120SchemaJson;
  payload?: HttpAsyncapiComDefinitions120SchemaJson;
  tags?: HttpAsyncapiComDefinitions120TagJson[];
  /**
   * A brief summary of the message.
   */
  summary?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions120ExternalDocsJson;
  deprecated?: boolean;
  example?: unknown;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120MessageJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface HttpAsyncapiComDefinitions120TagJson {
  name: string;
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions120ExternalDocsJson;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120TagJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * The list of messages a consumer can read or write from/to a streaming API.
 */
export interface StreamObject {
  framing?: StreamFramingObject;
  read?: StreamReadObject;
  write?: StreamWriteObject;
  /**
   * This interface was referenced by `StreamObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `StreamObject1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * An object to hold a set of reusable objects for different aspects of the AsyncAPI Specification.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "components".
 */
export interface HttpAsyncapiComDefinitions120ComponentsJson {
  schemas?: Schemas;
  messages?: Messages;
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: HttpAsyncapiComDefinitions120ReferenceJson | SecurityScheme;
  };
  parameters?: Parameters;
}
/**
 * JSON objects describing schemas the API uses.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "schemas".
 */
export interface Schemas {
  [k: string]: HttpAsyncapiComDefinitions120SchemaJson;
}
/**
 * JSON objects describing the messages being consumed and produced by the API.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Messages {
  [k: string]: HttpAsyncapiComDefinitions120MessageJson;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface HttpAsyncapiComDefinitions120ReferenceJson {
  $ref: string;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "userPassword".
 */
export interface HttpAsyncapiComDefinitions120UserPasswordJson {
  type: "userPassword";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120UserPasswordJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "apiKey".
 */
export interface HttpAsyncapiComDefinitions120ApiKeyJson {
  type: "apiKey";
  in: "user" | "password";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120ApiKeyJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "X509".
 */
export interface HttpAsyncapiComDefinitions120X509Json {
  type: "X509";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120X509Json`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "symmetricEncryption".
 */
export interface HttpAsyncapiComDefinitions120SymmetricEncryptionJson {
  type: "symmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120SymmetricEncryptionJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "asymmetricEncryption".
 */
export interface HttpAsyncapiComDefinitions120AsymmetricEncryptionJson {
  type: "asymmetricEncryption";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120AsymmetricEncryptionJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions120NonBearerHTTPSecuritySchemeJson {
  scheme: string;
  description?: string;
  type: "http";
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120NonBearerHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions120BearerHTTPSecuritySchemeJson {
  scheme: "bearer";
  bearerFormat?: string;
  type: "http";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120BearerHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "APIKeyHTTPSecurityScheme".
 */
export interface HttpAsyncapiComDefinitions120APIKeyHTTPSecuritySchemeJson {
  type: "httpApiKey";
  name: string;
  in: "header" | "query" | "cookie";
  description?: string;
  /**
   * This interface was referenced by `HttpAsyncapiComDefinitions120APIKeyHTTPSecuritySchemeJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * JSON objects describing re-usable topic parameters.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "parameters".
 */
export interface Parameters {
  [k: string]: HttpAsyncapiComDefinitions120ParameterJson;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "SecurityRequirement".
 */
export interface SecurityRequirement {
  [k: string]: string[];
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "stream".
 */
export interface StreamObject1 {
  framing?: StreamFramingObject;
  read?: StreamReadObject;
  write?: StreamWriteObject;
  /**
   * This interface was referenced by `StreamObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `StreamObject1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
