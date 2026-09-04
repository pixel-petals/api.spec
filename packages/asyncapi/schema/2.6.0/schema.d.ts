/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * asyncapi 2.6.0
 * Strategy: references kept.
 *
 * Do not edit by hand.
 */
/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "ReferenceObject".
 */
export type ReferenceObject = string;
/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schema".
 */
export type Schema = CoreSchemaMetaSchema & {
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
  /**
   * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema.
   */
  discriminator?: string;
  externalDocs?: ExternalDocs1;
  /**
   * Specifies that a schema is deprecated and SHOULD be transitioned out of usage
   */
  deprecated?: boolean;
  [k: string]: SpecificationExtension;
};
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "json-schema-draft-07-schema".
 */
export type CoreSchemaMetaSchema =
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
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
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
      contains?: CoreSchemaMetaSchema;
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
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: CoreSchemaMetaSchema | StringArray;
      };
      propertyNames?: CoreSchemaMetaSchema;
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
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      enum?: [true];
    }
  | boolean;
/**
 * @minItems 1
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "schemaArray".
 */
export type SchemaArray = [CoreSchemaMetaSchema, ...CoreSchemaMetaSchema[]];
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "stringArray".
 */
export type StringArray = string[];
/**
 * Describes a message received on a given channel and operation.
 *
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
 * Defines a security scheme that can be used by the operations.
 *
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
export type AvroSchemaDefinition = AvroSchema;
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
  asyncapi: "2.6.0";
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
  externalDocs?: ExternalDocs2;
  [k: string]: SpecificationExtension;
}
/**
 * The object provides metadata about the API. The metadata can be used by the clients if needed.
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
  [k: string]: SpecificationExtension;
}
/**
 * Contact information for the exposed API.
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
  [k: string]: SpecificationExtension;
}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `Contact`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `License`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Info`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerVariable`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ExternalDocs`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Tag`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Server`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ExternalDocs1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Parameter`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ExternalDocs2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationTrait`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Operation`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelItem`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `UserPassword`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ApiKey`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `X509`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SymmetricEncryption`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AsymmetricEncryption`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `NonBearerHTTPSecurityScheme`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `BearerHTTPSecurityScheme`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `APIKeyHTTPSecurityScheme`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Oauth2Flow`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Oauth2Flows`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OpenIdConnect`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SaslPlainSecurityScheme`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SaslScramSecurityScheme`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SaslGssapiSecurityScheme`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `CorrelationId`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageTrait`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Components`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "specificationExtension".
 */
export interface SpecificationExtension {
  [k: string]: unknown;
}
/**
 * License information for the exposed API.
 *
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
  [k: string]: SpecificationExtension;
}
/**
 * The Servers Object is a map of Server Objects.
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
 * An object representing a message broker, a server or any other kind of computer program capable of sending and/or receiving data
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "server".
 */
export interface Server {
  /**
   * A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the AsyncAPI document is being served.
   */
  url: string;
  /**
   * An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * The protocol this URL supports for connection. Supported protocol include, but are not limited to: amqp, amqps, http, https, ibmmq, jms, kafka, kafka-secure, anypointmq, mqtt, secure-mqtt, solace, stomp, stomps, ws, wss, mercure, googlepubsub.
   */
  protocol: string;
  /**
   * The version of the protocol used for connection. For instance: AMQP 0.9.1, HTTP 2.0, Kafka 1.0.0, etc.
   */
  protocolVersion?: string;
  variables?: ServerVariables;
  /**
   * A declaration of which security mechanisms can be used with this server. The list of values includes alternative security requirement objects that can be used.
   */
  security?: SecurityRequirement[];
  bindings?: BindingsObject;
  /**
   * A list of tags for logical grouping and categorization of servers.
   */
  tags?: Tag[];
  [k: string]: SpecificationExtension;
}
/**
 * A map between a variable name and its value. The value is used for substitution in the server's URL template.
 */
export interface ServerVariables {
  [k: string]: Reference | ServerVariable;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariable".
 */
export interface ServerVariable {
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   */
  enum?: string[];
  /**
   * The default value to use for substitution, and to send, if an alternate value is not supplied.
   */
  default?: string;
  /**
   * An optional description for the server variable.
   */
  description?: string;
  /**
   * An array of examples of the server variable.
   */
  examples?: string[];
  [k: string]: SpecificationExtension;
}
/**
 * Lists of the required security schemes that can be used to execute an operation
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SecurityRequirement".
 */
export interface SecurityRequirement {
  [k: string]: string[];
}
/**
 * A map where the keys describe the name of the protocol and the values describe protocol-specific definitions for the server.
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
  googlepubsub?: unknown;
  pulsar?: unknown;
  [k: string]: unknown;
}
/**
 * Allows adding meta data to a single tag.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface Tag {
  /**
   * The name of the tag.
   */
  name: string;
  /**
   * A short description for the tag.
   */
  description?: string;
  externalDocs?: ExternalDocs;
  [k: string]: SpecificationExtension;
}
/**
 * Additional external documentation for this tag.
 */
export interface ExternalDocs {
  /**
   * A short description of the target documentation.
   */
  description?: string;
  /**
   * The URL for the target documentation. This MUST be in the form of an absolute URL.
   */
  url: string;
  [k: string]: SpecificationExtension;
}
/**
 * Holds the relative paths to the individual channel and their operations. Channel paths are relative to servers.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channels".
 */
export interface Channels {
  [k: string]: ChannelItem;
}
/**
 * Describes the operations available on a single channel.
 *
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
  bindings?: BindingsObject1;
  [k: string]: SpecificationExtension;
}
/**
 * JSON objects describing reusable channel parameters.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "parameters".
 */
export interface Parameters {
  [k: string]: Reference | Parameter;
}
/**
 * Describes a parameter included in a channel name.
 *
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
  [k: string]: SpecificationExtension;
}
/**
 * Additional external documentation for this schema.
 */
export interface ExternalDocs1 {
  /**
   * A short description of the target documentation.
   */
  description?: string;
  /**
   * The URL for the target documentation. This MUST be in the form of an absolute URL.
   */
  url: string;
  [k: string]: SpecificationExtension;
}
/**
 * Describes a publish or a subscribe operation. This provides a place to document how and why messages are sent and received.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operation".
 */
export interface Operation {
  /**
   * A list of traits to apply to the operation object.
   */
  traits?: (Reference | OperationTrait)[];
  /**
   * A short summary of what the operation is about.
   */
  summary?: string;
  /**
   * A verbose explanation of the operation.
   */
  description?: string;
  /**
   * A declaration of which security mechanisms are associated with this operation.
   */
  security?: SecurityRequirement[];
  /**
   * A list of tags for logical grouping and categorization of operations.
   */
  tags?: Tag[];
  externalDocs?: ExternalDocs2;
  operationId?: string;
  bindings?: BindingsObject1;
  message?: Message;
  [k: string]: SpecificationExtension;
}
/**
 * Describes a trait that MAY be applied to an Operation Object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operationTrait".
 */
export interface OperationTrait {
  /**
   * A short summary of what the operation is about.
   */
  summary?: string;
  /**
   * A verbose explanation of the operation.
   */
  description?: string;
  /**
   * A list of tags for logical grouping and categorization of operations.
   */
  tags?: Tag[];
  externalDocs?: ExternalDocs2;
  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API.
   */
  operationId?: string;
  /**
   * A declaration of which security mechanisms are associated with this operation.
   */
  security?: SecurityRequirement[];
  bindings?: BindingsObject1;
  [k: string]: SpecificationExtension;
}
/**
 * Allows referencing an external resource for extended documentation.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "externalDocs".
 */
export interface ExternalDocs2 {
  /**
   * A short description of the target documentation.
   */
  description?: string;
  /**
   * The URL for the target documentation. This MUST be in the form of an absolute URL.
   */
  url: string;
  [k: string]: SpecificationExtension;
}
/**
 * Map describing protocol-specific definitions for a server.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindingsObject".
 */
export interface BindingsObject1 {
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
  googlepubsub?: unknown;
  pulsar?: unknown;
  [k: string]: unknown;
}
/**
 * Holds a set of reusable objects for different aspects of the AsyncAPI specification. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "components".
 */
export interface Components {
  schemas?: Schemas;
  servers?: Servers;
  channels?: Channels;
  serverVariables?: ServerVariables1;
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
    [k: string]: BindingsObject1;
  };
  channelBindings?: {
    [k: string]: BindingsObject1;
  };
  operationBindings?: {
    [k: string]: BindingsObject1;
  };
  messageBindings?: {
    [k: string]: BindingsObject1;
  };
  [k: string]: SpecificationExtension;
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
 * A map between a variable name and its value. The value is used for substitution in the server's URL template.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface ServerVariables1 {
  [k: string]: Reference | ServerVariable;
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
  /**
   * The type of the security scheme.
   */
  type: "userPassword";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "apiKey".
 */
export interface ApiKey {
  /**
   * The type of the security scheme.
   */
  type: "apiKey";
  /**
   * The location of the API key.
   */
  in: "user" | "password";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "X509".
 */
export interface X509 {
  /**
   * The type of the security scheme.
   */
  type: "X509";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "symmetricEncryption".
 */
export interface SymmetricEncryption {
  /**
   * The type of the security scheme.
   */
  type: "symmetricEncryption";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "asymmetricEncryption".
 */
export interface AsymmetricEncryption {
  /**
   * The type of the security scheme.
   */
  type: "asymmetricEncryption";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
export interface NonBearerHTTPSecurityScheme {
  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.
   */
  scheme: string;
  /**
   * A short description for security scheme.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "http";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
export interface BearerHTTPSecurityScheme {
  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.
   */
  scheme: "bearer";
  /**
   * A hint to the client to identify how the bearer token is formatted.
   */
  bearerFormat?: string;
  /**
   * The type of the security scheme.
   */
  type: "http";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "APIKeyHTTPSecurityScheme".
 */
export interface APIKeyHTTPSecurityScheme {
  /**
   * The type of the security scheme.
   */
  type: "httpApiKey";
  /**
   * The name of the header, query or cookie parameter to be used.
   */
  name: string;
  /**
   * The location of the API key.
   */
  in: "header" | "query" | "cookie";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * Allows configuration of the supported OAuth Flows.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Flows".
 */
export interface Oauth2Flows {
  /**
   * A short description for security scheme.
   */
  type: "oauth2";
  /**
   * A short description for security scheme.
   */
  description?: string;
  flows: {
    /**
     * Configuration for the OAuth Implicit flow.
     */
    implicit?: Oauth2Flow & {
      [k: string]: unknown;
    };
    /**
     * Configuration for the OAuth Resource Owner Protected Credentials flow.
     */
    password?: Oauth2Flow & {
      [k: string]: unknown;
    };
    /**
     * Configuration for the OAuth Client Credentials flow.
     */
    clientCredentials?: Oauth2Flow & {
      [k: string]: unknown;
    };
    /**
     * Configuration for the OAuth Authorization Code flow.
     */
    authorizationCode?: Oauth2Flow & {
      [k: string]: unknown;
    };
  };
  [k: string]: SpecificationExtension;
}
/**
 * Configuration details for a supported OAuth Flow
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Flow".
 */
export interface Oauth2Flow {
  /**
   * The authorization URL to be used for this flow. This MUST be in the form of an absolute URL.
   */
  authorizationUrl?: string;
  /**
   * The token URL to be used for this flow. This MUST be in the form of an absolute URL.
   */
  tokenUrl?: string;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of an absolute URL.
   */
  refreshUrl?: string;
  scopes?: Oauth2Scopes;
  [k: string]: SpecificationExtension;
}
/**
 * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.
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
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslPlainSecurityScheme".
 */
export interface SaslPlainSecurityScheme {
  /**
   * The type of the security scheme. Valid values
   */
  type: "plain";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslScramSecurityScheme".
 */
export interface SaslScramSecurityScheme {
  /**
   * The type of the security scheme.
   */
  type: "scramSha256" | "scramSha512";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslGssapiSecurityScheme".
 */
export interface SaslGssapiSecurityScheme {
  /**
   * The type of the security scheme.
   */
  type: "gssapi";
  /**
   * A short description for security scheme.
   */
  description?: string;
  [k: string]: SpecificationExtension;
}
/**
 * An object that specifies an identifier at design time that can used for message tracing and correlation.
 *
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
  [k: string]: SpecificationExtension;
}
/**
 * Describes a trait that MAY be applied to a Message Object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messageTrait".
 */
export interface MessageTrait {
  /**
   * A string containing the name of the schema format/language used to define the message payload.
   */
  schemaFormat?: string;
  /**
   * The content type to use when encoding/decoding a message's payload.
   */
  contentType?: string;
  /**
   * Schema definition of the application headers.
   */
  headers?: Schema & {
    type?: "object";
  };
  /**
   * Unique string used to identify the message. The id MUST be unique among all messages described in the API.
   */
  messageId?: string;
  /**
   * Definition of the correlation ID used for message tracing or matching.
   */
  correlationId?: Reference | CorrelationId;
  /**
   * A list of tags for logical grouping and categorization of messages.
   */
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
  externalDocs?: ExternalDocs2;
  deprecated?: boolean;
  /**
   * List of examples.
   */
  examples?: {
    [k: string]: unknown;
  }[];
  bindings?: BindingsObject1;
  [k: string]: SpecificationExtension;
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
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Scopes".
 */
export interface Oauth2Scopes1 {
  [k: string]: string;
}
