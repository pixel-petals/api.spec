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
  security?: HttpAsyncapiComDefinitions120SecurityRequirementJson[];
  externalDocs?: HttpAsyncapiComDefinitions120ExternalDocsJson;
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
} & {
  [k: string]: unknown;
};
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
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "operation".
 */
export type HttpAsyncapiComDefinitions120OperationJson =
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
      [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
export type HttpAsyncapiComDefinitions120SecuritySchemeJson =
  | HttpAsyncapiComDefinitions120UserPasswordJson
  | HttpAsyncapiComDefinitions120ApiKeyJson
  | HttpAsyncapiComDefinitions120X509Json
  | HttpAsyncapiComDefinitions120SymmetricEncryptionJson
  | HttpAsyncapiComDefinitions120AsymmetricEncryptionJson
  | HttpAsyncapiComDefinitions120HTTPSecuritySchemeJson;
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "HTTPSecurityScheme".
 */
export type HttpAsyncapiComDefinitions120HTTPSecuritySchemeJson =
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120ContactJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120LicenseJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120InfoJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120ServerVariableJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120ServerJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120TopicsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120ExternalDocsJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120SchemaJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120ParameterJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120TagJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120MessageJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `HttpAsyncapiComDefinitions120TopicItemJson`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `StreamObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "vendorExtension".
 *
 * This interface was referenced by `StreamObject1`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-".
 */
export interface HttpAsyncapiComDefinitions120VendorExtensionJson {
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  variables?: HttpAsyncapiComDefinitions120ServerVariablesJson;
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface HttpAsyncapiComDefinitions120ServerVariablesJson {
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * Relative paths to the individual topics. They must be relative to the 'baseTopic'.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "topics".
 */
export interface HttpAsyncapiComDefinitions120TopicsJson {}
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
  publish?: HttpAsyncapiComDefinitions120OperationJson;
  subscribe?: HttpAsyncapiComDefinitions120OperationJson;
  deprecated?: boolean;
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  additionalProperties?: HttpAsyncapiComDefinitions120SchemaJson | boolean;
  type?: HttpJsonSchemaOrgDraft04Schema;
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * Core schema meta-schema
 *
 * This interface was referenced by `undefined`'s JSON-Schema
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface HttpAsyncapiComDefinitions120TagJson {
  name: string;
  description?: string;
  externalDocs?: HttpAsyncapiComDefinitions120ExternalDocsJson;
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * The list of messages a consumer can read or write from/to a streaming API.
 */
export interface StreamObject {
  framing?: StreamFramingObject;
  read?: StreamReadObject;
  write?: StreamWriteObject;
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
/**
 * An object to hold a set of reusable objects for different aspects of the AsyncAPI Specification.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "components".
 */
export interface HttpAsyncapiComDefinitions120ComponentsJson {
  schemas?: HttpAsyncapiComDefinitions120SchemasJson;
  messages?: HttpAsyncapiComDefinitions120MessagesJson;
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: HttpAsyncapiComDefinitions120ReferenceJson | HttpAsyncapiComDefinitions120SecuritySchemeJson;
  };
  parameters?: HttpAsyncapiComDefinitions120ParametersJson;
}
/**
 * JSON objects describing schemas the API uses.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "schemas".
 */
export interface HttpAsyncapiComDefinitions120SchemasJson {
  [k: string]: HttpAsyncapiComDefinitions120SchemaJson;
}
/**
 * JSON objects describing the messages being consumed and produced by the API.
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface HttpAsyncapiComDefinitions120MessagesJson {
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
export interface HttpAsyncapiComDefinitions120ParametersJson {
  [k: string]: HttpAsyncapiComDefinitions120ParameterJson;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "SecurityRequirement".
 */
export interface HttpAsyncapiComDefinitions120SecurityRequirementJson {
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
  [k: string]: HttpAsyncapiComDefinitions120VendorExtensionJson;
}
