/**
 * AsyncApi — generated from the vendored JSON Schema.
 *
 * asyncapi 3.1.0
 * Strategy: references kept.
 *
 * Do not edit by hand.
 */
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messageExampleObject".
 */
export type MessageExampleObject = MessageExampleObject1 & {
  /**
   * Example of the application headers. It can be of any type.
   */
  headers?: {};
  /**
   * Machine readable name of the message example.
   */
  name?: string;
  /**
   * Example of the message payload. It can be of any type.
   */
  payload?: {
    [k: string]: unknown;
  };
  /**
   * A brief summary of the message example.
   */
  summary?: string;
};
export type MessageExampleObject1 = {
  [k: string]: unknown;
};
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
 * A declaration of which security schemes are associated with this operation. Only one of the security scheme objects MUST be satisfied to authorize an operation. In cases where Server Security also applies, it MUST also be satisfied.
 */
export type Security = (Reference | SecurityScheme)[];
/**
 * A list of tags for logical grouping and categorization of operations.
 */
export type Tags = (Reference | Tag)[];
/**
 * An array representing security requirements.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "securityRequirements".
 */
export type SecurityRequirements = (Reference | SecurityScheme)[];
/**
 * The object provides metadata about the API. The metadata can be used by the clients if needed.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "info".
 */
export type Info = {
  /**
   * A unique and precise title of the API.
   */
  title: string;
  /**
   * A longer description of the API. Should be different from the title. CommonMark is allowed.
   */
  description?: string;
  contact?: Contact;
  externalDocs?: Reference | ExternalDocs;
  license?: License;
  /**
   * A list of tags for application API documentation control. Tags can be used for logical grouping of applications.
   */
  tags?: (Reference | Tag)[];
  /**
   * A URL to the Terms of Service for the API. MUST be in the format of a URL.
   */
  termsOfService?: string;
  /**
   * A semantic version number of the API.
   */
  version: string;
  [k: string]: SpecificationExtension;
} & InfoExtensions;
/**
 * This extension allows you to provide the Linkedin profile URL of the account representing the team/company of the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "extensions-linkedin-0.1.0-schema".
 */
export type ExtensionsLinkedin010Schema = string;
/**
 * This extension allows you to provide the Twitter username of the account representing the team/company of the API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "extensions-x-0.1.0-schema".
 */
export type ExtensionsX010Schema = string;
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "ReferenceObject".
 */
export type ReferenceObject = string;
/**
 * This object contains information about the channel representation in AMQP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-amqp-0.3.0-channel".
 */
export type AMQPChannelBindingsObject =
  | {
      is?: "routingKey";
    }
  | {
      is?: "queue";
    };
/**
 * This object contains information about the channel representation in IBM MQ. Each channel corresponds to a Queue or Topic within IBM MQ.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-ibmmq-0.1.0-channel".
 */
export type IBMMQChannelBindingsObject =
  | {
      destinationType?: "topic";
    }
  | {
      destinationType?: "queue";
    };
/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "schema".
 */
export type Schema = CoreSchemaMetaSchema & {
  /**
   * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
   */
  deprecated?: boolean;
  /**
   * @minItems 1
   */
  allOf?: [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  anyOf?: [Schema, ...Schema[]];
  /**
   * @minItems 1
   */
  oneOf?: [Schema, ...Schema[]];
  not?: Schema;
  contains?: Schema;
  items?: Schema | [Schema, ...Schema[]];
  propertyNames?: Schema;
  properties?: {
    [k: string]: Schema;
  };
  patternProperties?: {
    [k: string]: Schema;
  };
  additionalProperties?: Schema | boolean;
  /**
   * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
   */
  discriminator?: string;
  externalDocs?: Reference | ExternalDocs;
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
 * This object contains information about the message representation in IBM MQ.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-ibmmq-0.1.0-message".
 */
export type IBMMQMessageBindingsObject =
  | {
      type?: "binary";
    }
  | {
      type?: "jms";
    }
  | {
      type?: "string";
    };
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
   * A unique id representing the application.
   */
  id?: string;
  /**
   * The AsyncAPI specification version of this document.
   */
  asyncapi: "3.1.0";
  channels?: Channels;
  components?: Components;
  /**
   * Default content type to use when encoding/decoding a message's payload.
   */
  defaultContentType?: string;
  info: Info;
  operations?: Operations;
  servers?: Servers;
  [k: string]: SpecificationExtension;
}
/**
 * An object containing all the Channel Object definitions the Application MUST use during runtime.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channels".
 */
export interface Channels {
  [k: string]: Reference | Channel;
}
/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "Reference".
 */
export interface Reference {
  /**
   * The reference string.
   */
  $ref: string;
}
/**
 * Describes a shared communication channel.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channel".
 */
export interface Channel {
  /**
   * A human-friendly title for the channel.
   */
  title?: string;
  /**
   * A longer description of the channel. CommonMark is allowed.
   */
  description?: string;
  /**
   * An optional string representation of this channel's address. The address is typically the "topic name", "routing key", "event type", or "path". When `null` or absent, it MUST be interpreted as unknown. This is useful when the address is generated dynamically at runtime or can't be known upfront. It MAY contain Channel Address Expressions.
   */
  address?: string | null;
  bindings?: Reference | ChannelBindingsObject;
  externalDocs?: Reference | ExternalDocs;
  messages?: ChannelMessages;
  parameters?: Parameters;
  /**
   * The references of the servers on which this channel is available. If absent or empty then this channel must be available on all servers.
   */
  servers?: Reference[];
  /**
   * A brief summary of the channel.
   */
  summary?: string;
  /**
   * A list of tags for logical grouping of channels.
   */
  tags?: (Reference | Tag)[];
  [k: string]: SpecificationExtension;
}
/**
 * Map describing protocol-specific definitions for a channel.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channelBindingsObject".
 */
export interface ChannelBindingsObject {
  amqp?: {
    [k: string]: unknown;
  };
  amqp1?: unknown;
  anypointmq?: {
    [k: string]: unknown;
  };
  googlepubsub?: {
    [k: string]: unknown;
  };
  http?: unknown;
  ibmmq?: {
    [k: string]: unknown;
  };
  jms?: {
    [k: string]: unknown;
  };
  kafka?: {
    [k: string]: unknown;
  };
  mqtt?: unknown;
  nats?: unknown;
  pulsar?: {
    [k: string]: unknown;
  };
  redis?: unknown;
  sns?: {
    [k: string]: unknown;
  };
  solace?: unknown;
  sqs?: {
    [k: string]: unknown;
  };
  stomp?: unknown;
  ws?: {
    [k: string]: unknown;
  };
  [k: string]: SpecificationExtension;
}
/**
 * Any property starting with x- is valid.
 *
 * This interface was referenced by `ChannelBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ExternalDocs`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `CorrelationId`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Tag`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageTrait`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Parameter`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Channel`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationBindingsObject`'s JSON-Schema definition
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
 * This interface was referenced by `OperationTrait`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationReplyAddress`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationReply`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Operation`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerVariable`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Server`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Components`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Contact`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `License`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "specificationExtension".
 *
 * This interface was referenced by `AnypointMQChannelBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `CloudPubSubChannelSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema3`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema4`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Ordering`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Statement`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Policy`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema5`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Identifier`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `RedrivePolicy`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Statement1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Policy1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Queue`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Queue1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ChannelSchema6`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `WebSocketsChannelBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AMQPMessageBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AnypointMQMessageBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `CloudPubSubChannelSchema1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `HTTPMessageBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `HTTPMessageBindingsObject1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageSchema1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageSchema2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MessageSchema3`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MQTTMessageBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MultiFormatSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `AMQPOperationBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `HTTPOperationBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `HTTPOperationBindingsObject1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationSchema1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationSchema2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `MQTTOperationBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `NATSOperationBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `BindingsRos201`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Identifier1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Identifier2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Identifier3`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `RedrivePolicy1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `DeliveryPolicy`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Consumer`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `DeliveryPolicy1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationSchema3`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Identifier4`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `RedrivePolicy2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Statement2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Policy2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `Queue2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `OperationSchema4`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `IBMMQServerBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerSchema`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerSchema1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerSchema2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerSchema3`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerSchema4`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `ServerSchema5`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `BindingsRos2011`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SolaceServerBindingsObject`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SolaceServerBindingsObject1`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 *
 * This interface was referenced by `SolaceServerBindingsObject2`'s JSON-Schema definition
 * via the `patternProperty` "^x-[\w\d\.\x2d_]+$".
 */
export interface SpecificationExtension {
  [k: string]: unknown;
}
/**
 * Allows referencing an external resource for extended documentation.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "externalDocs".
 */
export interface ExternalDocs {
  /**
   * A short description of the target documentation. CommonMark syntax can be used for rich text representation.
   */
  description?: string;
  /**
   * The URL for the target documentation. This MUST be in the form of an absolute URL.
   */
  url: string;
  [k: string]: SpecificationExtension;
}
/**
 * A map of the messages that will be sent to this channel by any application at any time. **Every message sent to this channel MUST be valid against one, and only one, of the message objects defined in this map.**
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "channelMessages".
 */
export interface ChannelMessages {
  [k: string]: Reference | MessageObject;
}
/**
 * Describes a message received on a given channel and operation.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messageObject".
 */
export interface MessageObject {
  /**
   * A human-friendly title for the message.
   */
  title?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  /**
   * List of examples.
   */
  examples?: MessageExampleObject[];
  deprecated?: boolean;
  bindings?: Reference | MessageBindingsObject;
  /**
   * The content type to use when encoding/decoding a message's payload. The value MUST be a specific media type (e.g. application/json). When omitted, the value MUST be the one specified on the defaultContentType field.
   */
  contentType?: string;
  correlationId?: Reference | CorrelationId;
  externalDocs?: Reference | ExternalDocs;
  headers?: AnySchema;
  /**
   * Name of the message.
   */
  name?: string;
  payload?: AnySchema;
  /**
   * A brief summary of the message.
   */
  summary?: string;
  tags?: (Reference | Tag)[];
  /**
   * A list of traits to apply to the message object. Traits MUST be merged using traits merge mechanism. The resulting object MUST be a valid Message Object.
   */
  traits?: (Reference | MessageTrait | [] | [Reference | MessageTrait] | [Reference | MessageTrait, {}])[];
  [k: string]: SpecificationExtension;
}
/**
 * Map describing protocol-specific definitions for a message.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messageBindingsObject".
 */
export interface MessageBindingsObject {
  amqp?: {
    [k: string]: unknown;
  };
  amqp1?: unknown;
  anypointmq?: {
    [k: string]: unknown;
  };
  googlepubsub?: {
    [k: string]: unknown;
  };
  http?: {
    [k: string]: unknown;
  };
  ibmmq?: {
    [k: string]: unknown;
  };
  jms?: {
    [k: string]: unknown;
  };
  kafka?: {
    [k: string]: unknown;
  };
  mqtt?: {
    [k: string]: unknown;
  };
  nats?: unknown;
  redis?: unknown;
  sns?: unknown;
  solace?: unknown;
  sqs?: unknown;
  stomp?: unknown;
  ws?: unknown;
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
 * An object representing either a schema or a multiFormatSchema based on the existence of the 'schema' property. If the property 'schema' is present, use the multi-format schema. Use the default AsyncAPI Schema otherwise.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[\w\d\.\-_]+$".
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "anySchema".
 */
export interface AnySchema {
  [k: string]: unknown;
}
/**
 * Allows adding metadata to a single tag.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface Tag {
  /**
   * A short description for the tag. CommonMark syntax can be used for rich text representation.
   */
  description?: string;
  externalDocs?: Reference | ExternalDocs;
  /**
   * The name of the tag.
   */
  name: string;
  [k: string]: SpecificationExtension;
}
/**
 * Describes a trait that MAY be applied to a Message Object. This object MAY contain any property from the Message Object, except payload and traits.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "messageTrait".
 */
export interface MessageTrait {
  /**
   * A human-friendly title for the message.
   */
  title?: string;
  /**
   * A longer description of the message. CommonMark is allowed.
   */
  description?: string;
  /**
   * List of examples.
   */
  examples?: MessageExampleObject[];
  deprecated?: boolean;
  bindings?: Reference | MessageBindingsObject;
  /**
   * The content type to use when encoding/decoding a message's payload. The value MUST be a specific media type (e.g. application/json). When omitted, the value MUST be the one specified on the defaultContentType field.
   */
  contentType?: string;
  correlationId?: Reference | CorrelationId;
  externalDocs?: Reference | ExternalDocs;
  headers?: AnySchema;
  /**
   * Name of the message.
   */
  name?: string;
  /**
   * A brief summary of the message.
   */
  summary?: string;
  tags?: (Reference | Tag)[];
  [k: string]: SpecificationExtension;
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
 * Describes a parameter included in a channel address.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "parameter".
 */
export interface Parameter {
  /**
   * A brief description of the parameter. This could contain examples of use. GitHub Flavored Markdown is allowed.
   */
  description?: string;
  /**
   * An array of examples of the parameter value.
   */
  examples?: string[];
  /**
   * The default value to use for substitution, and to send, if an alternate value is not supplied.
   */
  default?: string;
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   */
  enum?: string[];
  /**
   * A runtime expression that specifies the location of the parameter value
   */
  location?: string;
  [k: string]: SpecificationExtension;
}
/**
 * An object to hold a set of reusable objects for different aspects of the AsyncAPI specification. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "components".
 */
export interface Components {
  /**
   * An object to hold reusable Channel Bindings Objects.
   */
  channelBindings?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | ChannelBindingsObject;
  };
  /**
   * An object to hold reusable Channel Objects.
   */
  channels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | Channel;
  };
  /**
   * An object to hold reusable Correlation ID Objects.
   */
  correlationIds?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | CorrelationId;
  };
  /**
   * An object to hold reusable External Documentation Objects.
   */
  externalDocs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | ExternalDocs;
  };
  /**
   * An object to hold reusable Message Bindings Objects.
   */
  messageBindings?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | MessageBindingsObject;
  };
  /**
   * An object to hold reusable Message Trait Objects.
   */
  messageTraits?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | MessageTrait;
  };
  /**
   * An object to hold reusable Message Objects.
   */
  messages?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | MessageObject;
  };
  /**
   * An object to hold reusable Operation Bindings Objects.
   */
  operationBindings?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | OperationBindingsObject;
  };
  /**
   * An object to hold reusable Operation Trait Objects.
   */
  operationTraits?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | OperationTrait;
  };
  operations?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | Operation;
  };
  /**
   * An object to hold reusable Parameter Objects.
   */
  parameters?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | Parameter;
  };
  /**
   * An object to hold reusable Operation Reply Objects.
   */
  replies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | OperationReply;
  };
  /**
   * An object to hold reusable Operation Reply Address Objects.
   */
  replyAddresses?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | OperationReplyAddress;
  };
  /**
   * An object to hold reusable Schema Object. If this is a Schema Object, then the schemaFormat will be assumed to be 'application/vnd.aai.asyncapi+json;version=asyncapi' where the version is equal to the AsyncAPI Version String.
   */
  schemas?: {
    [k: string]: AnySchema;
  };
  /**
   * An object to hold reusable Security Scheme Objects.
   */
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | SecurityScheme;
  };
  /**
   * An object to hold reusable Server Bindings Objects.
   */
  serverBindings?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | ServerBindingsObject;
  };
  /**
   * An object to hold reusable Server Variable Objects.
   */
  serverVariables?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | ServerVariable;
  };
  /**
   * An object to hold reusable Server Objects.
   */
  servers?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | Server;
  };
  /**
   * An object to hold reusable Tag Objects.
   */
  tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[\w\d\.\-_]+$".
     */
    [k: string]: Reference | Tag;
  };
  [k: string]: SpecificationExtension;
}
/**
 * Map describing protocol-specific definitions for an operation.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operationBindingsObject".
 */
export interface OperationBindingsObject {
  amqp?: {
    [k: string]: unknown;
  };
  amqp1?: unknown;
  anypointmq?: unknown;
  googlepubsub?: unknown;
  http?: {
    [k: string]: unknown;
  };
  ibmmq?: unknown;
  jms?: unknown;
  kafka?: {
    [k: string]: unknown;
  };
  mqtt?: {
    [k: string]: unknown;
  };
  nats?: {
    [k: string]: unknown;
  };
  redis?: unknown;
  ros2?: {
    [k: string]: unknown;
  };
  sns?: {
    [k: string]: unknown;
  };
  solace?: {
    [k: string]: unknown;
  };
  sqs?: {
    [k: string]: unknown;
  };
  stomp?: unknown;
  ws?: unknown;
  [k: string]: SpecificationExtension;
}
/**
 * Describes a trait that MAY be applied to an Operation Object. This object MAY contain any property from the Operation Object, except the action, channel and traits ones.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operationTrait".
 */
export interface OperationTrait {
  /**
   * A human-friendly title for the operation.
   */
  title?: string;
  /**
   * A verbose explanation of the operation. CommonMark syntax can be used for rich text representation.
   */
  description?: string;
  /**
   * A map where the keys describe the name of the protocol and the values describe protocol-specific definitions for the operation.
   */
  bindings?: Reference | OperationBindingsObject;
  /**
   * Additional external documentation for this operation.
   */
  externalDocs?: Reference | ExternalDocs;
  security?: Security;
  /**
   * A short summary of what the operation is about.
   */
  summary?: string;
  tags?: Tags;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "userPassword".
 */
export interface UserPassword {
  description?: string;
  type: "userPassword";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "apiKey".
 */
export interface ApiKey {
  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * The type of the security scheme
   */
  type: "apiKey";
  /**
   *  The location of the API key.
   */
  in: "user" | "password";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "X509".
 */
export interface X509 {
  description?: string;
  type: "X509";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "symmetricEncryption".
 */
export interface SymmetricEncryption {
  description?: string;
  type: "symmetricEncryption";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "asymmetricEncryption".
 */
export interface AsymmetricEncryption {
  /**
   * A short description for security scheme.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "asymmetricEncryption";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
export interface NonBearerHTTPSecurityScheme {
  /**
   * A short description for security scheme.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "http";
  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.
   */
  scheme: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
export interface BearerHTTPSecurityScheme {
  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "http";
  /**
   * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
   */
  bearerFormat?: string;
  /**
   * The name of the HTTP Authorization scheme to be used in the Authorization header as defined in RFC7235.
   */
  scheme: "bearer";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "APIKeyHTTPSecurityScheme".
 */
export interface APIKeyHTTPSecurityScheme {
  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "httpApiKey";
  /**
   * The location of the API key
   */
  in: "header" | "query" | "cookie";
  /**
   * The name of the header, query or cookie parameter to be used.
   */
  name: string;
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
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "oauth2";
  flows: {
    /**
     * Configuration for the OAuth Authorization Code flow.
     */
    authorizationCode?: Oauth2Flow & {
      [k: string]: unknown;
    };
    /**
     * Configuration for the OAuth Client Credentials flow.
     */
    clientCredentials?: Oauth2Flow & {
      [k: string]: unknown;
    };
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
  };
  /**
   * List of the needed scope names.
   */
  scopes?: string[];
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
  availableScopes?: Oauth2Scopes;
  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of an absolute URL.
   */
  refreshUrl?: string;
  /**
   * The token URL to be used for this flow. This MUST be in the form of an absolute URL.
   */
  tokenUrl?: string;
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
  /**
   * A short description for security scheme. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "openIdConnect";
  /**
   * OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of an absolute URL.
   */
  openIdConnectUrl: string;
  /**
   * List of the needed scope names. An empty array means no scopes are needed.
   */
  scopes?: string[];
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslPlainSecurityScheme".
 */
export interface SaslPlainSecurityScheme {
  /**
   * A short description for security scheme.
   */
  description?: string;
  /**
   * The type of the security scheme. Valid values
   */
  type: "plain";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslScramSecurityScheme".
 */
export interface SaslScramSecurityScheme {
  /**
   * A short description for security scheme.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "scramSha256" | "scramSha512";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "SaslGssapiSecurityScheme".
 */
export interface SaslGssapiSecurityScheme {
  /**
   * A short description for security scheme.
   */
  description?: string;
  /**
   * The type of the security scheme.
   */
  type: "gssapi";
  [k: string]: SpecificationExtension;
}
/**
 * Describes a specific operation.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operation".
 */
export interface Operation {
  /**
   * A human-friendly title for the operation.
   */
  title?: string;
  /**
   * A longer description of the operation. CommonMark is allowed.
   */
  description?: string;
  /**
   * Allowed values are send and receive. Use send when it's expected that the application will send a message to the given channel, and receive when the application should expect receiving messages from the given channel.
   */
  action: "send" | "receive";
  bindings?: Reference | OperationBindingsObject;
  channel: Reference;
  externalDocs?: Reference | ExternalDocs;
  /**
   * A list of $ref pointers pointing to the supported Message Objects that can be processed by this operation. It MUST contain a subset of the messages defined in the channel referenced in this operation. Every message processed by this operation MUST be valid against one, and only one, of the message objects referenced in this list. Please note the messages property value MUST be a list of Reference Objects and, therefore, MUST NOT contain Message Objects. However, it is RECOMMENDED that parsers (or other software) dereference this property for a better development experience.
   */
  messages?: Reference[];
  reply?: Reference | OperationReply;
  security?: SecurityRequirements;
  /**
   * A brief summary of the operation.
   */
  summary?: string;
  /**
   * A list of tags for logical grouping and categorization of operations.
   */
  tags?: (Reference | Tag)[];
  /**
   * A list of traits to apply to the operation object. Traits MUST be merged using traits merge mechanism. The resulting object MUST be a valid Operation Object.
   */
  traits?: (Reference | OperationTrait)[];
  [k: string]: SpecificationExtension;
}
/**
 * Describes the reply part that MAY be applied to an Operation Object. If an operation implements the request/reply pattern, the reply object represents the response message.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operationReply".
 */
export interface OperationReply {
  address?: Reference | OperationReplyAddress;
  channel?: Reference;
  /**
   * A list of $ref pointers pointing to the supported Message Objects that can be processed by this operation as reply. It MUST contain a subset of the messages defined in the channel referenced in this operation reply. Every message processed by this operation MUST be valid against one, and only one, of the message objects referenced in this list. Please note the messages property value MUST be a list of Reference Objects and, therefore, MUST NOT contain Message Objects. However, it is RECOMMENDED that parsers (or other software) dereference this property for a better development experience.
   */
  messages?: Reference[];
  [k: string]: SpecificationExtension;
}
/**
 * An object that specifies where an operation has to send the reply
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operationReplyAddress".
 */
export interface OperationReplyAddress {
  /**
   * An optional description of the address. CommonMark is allowed.
   */
  description?: string;
  /**
   * A runtime expression that specifies the location of the reply address.
   */
  location: string;
  [k: string]: SpecificationExtension;
}
/**
 * Map describing protocol-specific definitions for a server.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverBindingsObject".
 */
export interface ServerBindingsObject {
  amqp?: unknown;
  amqp1?: unknown;
  anypointmq?: unknown;
  googlepubsub?: unknown;
  http?: unknown;
  ibmmq?: {
    [k: string]: unknown;
  };
  jms?: {
    [k: string]: unknown;
  };
  kafka?: {
    [k: string]: unknown;
  };
  mqtt?: {
    [k: string]: unknown;
  };
  nats?: unknown;
  pulsar?: {
    [k: string]: unknown;
  };
  redis?: unknown;
  ros2?: {
    [k: string]: unknown;
  };
  sns?: unknown;
  solace?: {
    [k: string]: unknown;
  };
  sqs?: unknown;
  stomp?: unknown;
  ws?: unknown;
  [k: string]: SpecificationExtension;
}
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariable".
 */
export interface ServerVariable {
  /**
   * An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * An array of examples of the server variable.
   */
  examples?: string[];
  /**
   * The default value to use for substitution, and to send, if an alternate value is not supplied.
   */
  default?: string;
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set.
   */
  enum?: string[];
  [k: string]: SpecificationExtension;
}
/**
 * An object representing a message broker, a server or any other kind of computer program capable of sending and/or receiving data.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "server".
 */
export interface Server {
  /**
   * A human-friendly title for the server.
   */
  title?: string;
  /**
   * A longer description of the server. CommonMark is allowed.
   */
  description?: string;
  bindings?: Reference | ServerBindingsObject;
  externalDocs?: Reference | ExternalDocs;
  /**
   * The server host name. It MAY include the port. This field supports Server Variables. Variable substitutions will be made when a variable is named in {braces}.
   */
  host: string;
  /**
   * The path to a resource in the host. This field supports Server Variables. Variable substitutions will be made when a variable is named in {braces}.
   */
  pathname?: string;
  /**
   * The protocol this server supports for connection.
   */
  protocol: string;
  /**
   * An optional string describing the server. CommonMark syntax MAY be used for rich text representation.
   */
  protocolVersion?: string;
  security?: SecurityRequirements;
  /**
   * A brief summary of the server.
   */
  summary?: string;
  tags?: (Reference | Tag)[];
  variables?: ServerVariables;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "serverVariables".
 */
export interface ServerVariables {
  [k: string]: Reference | ServerVariable;
}
/**
 * Contact information for the exposed API.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface Contact {
  /**
   * The email address of the contact person/organization.
   */
  email?: string;
  /**
   * The identifying name of the contact person/organization.
   */
  name?: string;
  /**
   * The URL pointing to the contact information.
   */
  url?: string;
  [k: string]: SpecificationExtension;
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
  [k: string]: SpecificationExtension;
}
/**
 * The object that lists all the extensions of Info
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "infoExtensions".
 */
export interface InfoExtensions {
  "x-linkedin"?: ExtensionsLinkedin010Schema;
  "x-x"?: ExtensionsX010Schema;
}
/**
 * Holds a dictionary with all the operations this application MUST implement.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "operations".
 */
export interface Operations {
  [k: string]: Reference | Operation;
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
 * This object contains configuration for describing an Anypoint MQ exchange, queue, or FIFO queue as an AsyncAPI channel. This objects only contains configuration that can not be provided in the AsyncAPI standard channel object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-anypointmq-0.0.1-channel".
 */
export interface AnypointMQChannelBindingsObject {
  /**
   * The destination (queue or exchange) name for this channel. SHOULD only be specified if the channel name differs from the actual destination name, such as when the channel name is not a valid destination name in Anypoint MQ. Defaults to the channel name.
   */
  destination?: string;
  /**
   * The type of destination. SHOULD be specified to document the messaging model (publish/subscribe, point-to-point, strict message ordering) supported by this channel.
   */
  destinationType?: "exchange" | "queue" | "fifo-queue";
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.0.1";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation for Google Cloud Pub/Sub.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-googlepubsub-0.2.0-channel".
 */
export interface CloudPubSubChannelSchema {
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.2.0";
  labels?: {};
  messageRetentionDuration?: string;
  messageStoragePolicy?: {
    allowedPersistenceRegions?: string[];
  };
  schemaSettings: {
    encoding: string;
    firstRevisionId?: string;
    lastRevisionId?: string;
    name: string;
  };
  [k: string]: SpecificationExtension;
}
/**
 * This object contains configuration for describing a JMS queue, or FIFO queue as an AsyncAPI channel. This objects only contains configuration that can not be provided in the AsyncAPI standard channel object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-jms-0.0.1-channel".
 */
export interface ChannelSchema {
  /**
   * The destination (queue) name for this channel. SHOULD only be specified if the channel name differs from the actual destination name, such as when the channel name is not a valid destination name according to the JMS Provider. Defaults to the channel name.
   */
  destination?: string;
  /**
   * The type of destination. SHOULD be specified to document the messaging model (point-to-point, or strict message ordering) supported by this channel.
   */
  destinationType?: "queue" | "fifo-queue";
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.0.1";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation in Kafka.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.5.0-channel".
 */
export interface ChannelSchema1 {
  /**
   * Kafka topic name if different from channel name.
   */
  topic?: string;
  /**
   * Number of partitions configured on this topic.
   */
  partitions?: number;
  /**
   * Number of replicas configured on this topic.
   */
  replicas?: number;
  /**
   * Topic configuration properties that are relevant for the API.
   */
  topicConfiguration?: {
    /**
     * The [`cleanup.policy`](https://kafka.apache.org/documentation/#topicconfigs_cleanup.policy) configuration option.
     */
    "cleanup.policy"?: ("compact" | "delete")[];
    /**
     * The [`retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_retention.ms) configuration option.
     */
    "retention.ms"?: number;
    /**
     * The [`retention.bytes`](https://kafka.apache.org/documentation/#topicconfigs_retention.bytes) configuration option.
     */
    "retention.bytes"?: number;
    /**
     * The [`delete.retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_delete.retention.ms) configuration option.
     */
    "delete.retention.ms"?: number;
    /**
     * The [`max.message.bytes`](https://kafka.apache.org/documentation/#topicconfigs_max.message.bytes) configuration option.
     */
    "max.message.bytes"?: number;
    /**
     * It shows whether the schema validation for the message key is enabled. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-key-schema-validation)
     */
    "confluent.key.schema.validation"?: boolean;
    /**
     * The name of the schema lookup strategy for the message key. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-key-subject-name-strategy)
     */
    "confluent.key.subject.name.strategy"?: string;
    /**
     * It shows whether the schema validation for the message value is enabled. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-value-schema-validation)
     */
    "confluent.value.schema.validation"?: boolean;
    /**
     * The name of the schema lookup strategy for the message value. Vendor specific config. For more details: (https://docs.confluent.io/platform/current/installation/configuration/topic-configs.html#confluent-value-subject-name-strategy)
     */
    "confluent.value.subject.name.strategy"?: string;
    [k: string]: unknown;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.5.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation in Kafka.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.4.0-channel".
 */
export interface ChannelSchema2 {
  /**
   * Kafka topic name if different from channel name.
   */
  topic?: string;
  /**
   * Number of partitions configured on this topic.
   */
  partitions?: number;
  /**
   * Number of replicas configured on this topic.
   */
  replicas?: number;
  /**
   * Topic configuration properties that are relevant for the API.
   */
  topicConfiguration?: {
    /**
     * The [`cleanup.policy`](https://kafka.apache.org/documentation/#topicconfigs_cleanup.policy) configuration option.
     */
    "cleanup.policy"?: ("compact" | "delete")[];
    /**
     * The [`retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_retention.ms) configuration option.
     */
    "retention.ms"?: number;
    /**
     * The [`retention.bytes`](https://kafka.apache.org/documentation/#topicconfigs_retention.bytes) configuration option.
     */
    "retention.bytes"?: number;
    /**
     * The [`delete.retention.ms`](https://kafka.apache.org/documentation/#topicconfigs_delete.retention.ms) configuration option.
     */
    "delete.retention.ms"?: number;
    /**
     * The [`max.message.bytes`](https://kafka.apache.org/documentation/#topicconfigs_max.message.bytes) configuration option.
     */
    "max.message.bytes"?: number;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.4.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation in Kafka.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.3.0-channel".
 */
export interface ChannelSchema3 {
  /**
   * Kafka topic name if different from channel name.
   */
  topic?: string;
  /**
   * Number of partitions configured on this topic.
   */
  partitions?: number;
  /**
   * Number of replicas configured on this topic.
   */
  replicas?: number;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation in Pulsar, which covers namespace and topic level admin configuration. This object contains additional information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-pulsar-0.1.0-channel".
 */
export interface ChannelSchema4 {
  /**
   * The namespace, the channel is associated with.
   */
  namespace: string;
  /**
   * persistence of the topic in Pulsar.
   */
  persistence: "persistent" | "non-persistent";
  /**
   * Topic compaction threshold given in MB
   */
  compaction?: number;
  /**
   * A list of clusters the topic is replicated to.
   */
  "geo-replication"?: string[];
  retention?: {
    /**
     * Time given in Minutes. `0` = Disable message retention.
     */
    time?: number;
    /**
     * Size given in MegaBytes. `0` = Disable message retention.
     */
    size?: number;
  };
  /**
   * TTL in seconds for the specified topic
   */
  ttl?: number;
  /**
   * Whether deduplication of events is enabled or not.
   */
  deduplication?: boolean;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation in SNS.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-sns-0.1.0-channel".
 */
export interface ChannelSchema5 {
  /**
   * The name of the topic. Can be different from the channel name to allow flexibility around AWS resource naming limitations.
   */
  name: string;
  ordering?: Ordering;
  policy?: Policy;
  /**
   * Key-value pairs that represent AWS tags on the topic.
   */
  tags?: {};
  /**
   * The version of this binding.
   */
  bindingVersion?: string;
  [k: string]: SpecificationExtension;
}
/**
 * By default, we assume an unordered SNS topic. This field allows configuration of a FIFO SNS Topic.
 *
 * This interface was referenced by `ChannelSchema5`'s JSON-Schema
 * via the `definition` "ordering".
 */
export interface Ordering {
  /**
   * Defines the type of SNS Topic.
   */
  type: "standard" | "FIFO";
  /**
   * True to turn on de-duplication of messages for a channel.
   */
  contentBasedDeduplication?: boolean;
  [k: string]: SpecificationExtension;
}
/**
 * The security policy for the SNS Topic.
 *
 * This interface was referenced by `ChannelSchema5`'s JSON-Schema
 * via the `definition` "policy".
 */
export interface Policy {
  /**
   * An array of statement objects, each of which controls a permission for this topic
   */
  statements: Statement[];
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `ChannelSchema5`'s JSON-Schema
 * via the `definition` "statement".
 */
export interface Statement {
  effect: "Allow" | "Deny";
  /**
   * The AWS account or resource ARN that this statement applies to.
   */
  principal: string | string[];
  /**
   * The SNS permission being allowed or denied e.g. sns:Publish
   */
  action: string | string[];
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the channel representation in SQS.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-sqs-0.2.0-channel".
 */
export interface ChannelSchema6 {
  queue: Queue;
  deadLetterQueue?: Queue1;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0" | "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * A definition of the queue that will be used as the channel.
 */
export interface Queue {
  /**
   * The name of the queue. When an SNS Operation Binding Object references an SQS queue by name, the identifier should be the one in this field.
   */
  name: string;
  /**
   * Is this a FIFO queue?
   */
  fifoQueue: boolean;
  /**
   * Specifies whether message deduplication occurs at the message group or queue level. Valid values are messageGroup and queue (default).
   */
  deduplicationScope?: "queue" | "messageGroup";
  /**
   * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are perQueue (default) and perMessageGroupId.
   */
  fifoThroughputLimit?: "perQueue" | "perMessageGroupId";
  /**
   * The number of seconds to delay before a message sent to the queue can be received. used to create a delay queue.
   */
  deliveryDelay?: number;
  /**
   * The length of time, in seconds, that a consumer locks a message - hiding it from reads - before it is unlocked and can be read again.
   */
  visibilityTimeout?: number;
  /**
   * Determines if the queue uses short polling or long polling. Set to zero the queue reads available messages and returns immediately. Set to a non-zero integer, long polling waits the specified number of seconds for messages to arrive before returning.
   */
  receiveMessageWaitTime?: number;
  /**
   * How long to retain a message on the queue in seconds, unless deleted.
   */
  messageRetentionPeriod?: number;
  redrivePolicy?: RedrivePolicy;
  policy?: Policy1;
  /**
   * Key-value pairs that represent AWS tags on the queue.
   */
  tags?: {};
  [k: string]: SpecificationExtension;
}
/**
 * Prevent poison pill messages by moving un-processable messages to an SQS dead letter queue.
 *
 * This interface was referenced by `ChannelSchema6`'s JSON-Schema
 * via the `definition` "redrivePolicy".
 */
export interface RedrivePolicy {
  deadLetterQueue: Identifier;
  /**
   * The number of times a message is delivered to the source queue before being moved to the dead-letter queue.
   */
  maxReceiveCount?: number;
  [k: string]: SpecificationExtension;
}
/**
 * The SQS queue to use as a dead letter queue (DLQ).
 *
 * This interface was referenced by `ChannelSchema6`'s JSON-Schema
 * via the `definition` "identifier".
 */
export interface Identifier {
  /**
   * The target is an ARN. For example, for SQS, the identifier may be an ARN, which will be of the form: arn:aws:sqs:{region}:{account-id}:{queueName}
   */
  arn?: string;
  /**
   * The endpoint is identified by a name, which corresponds to an identifying field called 'name' of a binding for that protocol on this publish Operation Object. For example, if the protocol is 'sqs' then the name refers to the name field sqs binding.
   */
  name?: string;
  [k: string]: SpecificationExtension;
}
/**
 * The security policy for the SQS Queue
 *
 * This interface was referenced by `ChannelSchema6`'s JSON-Schema
 * via the `definition` "policy".
 */
export interface Policy1 {
  /**
   * An array of statement objects, each of which controls a permission for this queue.
   */
  statements: Statement1[];
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `ChannelSchema6`'s JSON-Schema
 * via the `definition` "statement".
 */
export interface Statement1 {
  effect: "Allow" | "Deny";
  /**
   * The AWS account or resource ARN that this statement applies to.
   */
  principal: string | string[];
  /**
   * The SQS permission being allowed or denied e.g. sqs:ReceiveMessage
   */
  action: string | string[];
  [k: string]: SpecificationExtension;
}
/**
 * A definition of the queue that will be used for un-processable messages.
 */
export interface Queue1 {
  /**
   * The name of the queue. When an SNS Operation Binding Object references an SQS queue by name, the identifier should be the one in this field.
   */
  name: string;
  /**
   * Is this a FIFO queue?
   */
  fifoQueue: boolean;
  /**
   * Specifies whether message deduplication occurs at the message group or queue level. Valid values are messageGroup and queue (default).
   */
  deduplicationScope?: "queue" | "messageGroup";
  /**
   * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are perQueue (default) and perMessageGroupId.
   */
  fifoThroughputLimit?: "perQueue" | "perMessageGroupId";
  /**
   * The number of seconds to delay before a message sent to the queue can be received. used to create a delay queue.
   */
  deliveryDelay?: number;
  /**
   * The length of time, in seconds, that a consumer locks a message - hiding it from reads - before it is unlocked and can be read again.
   */
  visibilityTimeout?: number;
  /**
   * Determines if the queue uses short polling or long polling. Set to zero the queue reads available messages and returns immediately. Set to a non-zero integer, long polling waits the specified number of seconds for messages to arrive before returning.
   */
  receiveMessageWaitTime?: number;
  /**
   * How long to retain a message on the queue in seconds, unless deleted.
   */
  messageRetentionPeriod?: number;
  redrivePolicy?: RedrivePolicy;
  policy?: Policy1;
  /**
   * Key-value pairs that represent AWS tags on the queue.
   */
  tags?: {};
  [k: string]: SpecificationExtension;
}
/**
 * When using WebSockets, the channel represents the connection. Unlike other protocols that support multiple virtual channels (topics, routing keys, etc.) per connection, WebSockets doesn't support virtual channels or, put it another way, there's only one channel and its characteristics are strongly related to the protocol used for the handshake, i.e., HTTP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-websockets-0.1.0-channel".
 */
export interface WebSocketsChannelBindingsObject {
  /**
   * The HTTP method to use when establishing the connection. Its value MUST be either 'GET' or 'POST'.
   */
  method?: "GET" | "POST";
  /**
   * A Schema object containing the definitions for each query parameter. This schema MUST be of type 'object' and have a 'properties' key.
   */
  query?: Schema | Reference;
  /**
   * A Schema object containing the definitions of the HTTP headers to use when establishing the connection. This schema MUST be of type 'object' and have a 'properties' key.
   */
  headers?: Schema | Reference;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the message representation in AMQP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-amqp-0.3.0-message".
 */
export interface AMQPMessageBindingsObject {
  /**
   * A MIME encoding for the message content.
   */
  contentEncoding?: string;
  /**
   * Application-specific message type.
   */
  messageType?: string;
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains configuration for describing an Anypoint MQ message as an AsyncAPI message. This objects only contains configuration that can not be provided in the AsyncAPI standard message object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-anypointmq-0.0.1-message".
 */
export interface AnypointMQMessageBindingsObject {
  /**
   * A Schema object containing the definitions for Anypoint MQ-specific headers (protocol headers). This schema MUST be of type 'object' and have a 'properties' key. Examples of Anypoint MQ protocol headers are 'messageId' and 'messageGroupId'.
   */
  headers?: Schema | Reference;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.0.1";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the message representation for Google Cloud Pub/Sub.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-googlepubsub-0.2.0-message".
 */
export interface CloudPubSubChannelSchema1 {
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.2.0";
  attributes?: {};
  orderingKey?: string;
  schema?: {
    name: string;
  };
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the message representation in HTTP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-http-0.3.0-message".
 */
export interface HTTPMessageBindingsObject {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  headers?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The HTTP response status code according to [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes). `statusCode` is only relevant for messages referenced by the [Operation Reply Object](https://www.asyncapi.com/docs/reference/specification/v3.0.0#operationReplyObject), as it defines the status code for the response. In all other cases, this value can be safely ignored.
   */
  statusCode?: number;
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the message representation in HTTP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-http-0.2.0-message".
 */
export interface HTTPMessageBindingsObject1 {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  headers?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains configuration for describing a JMS message as an AsyncAPI message. This objects only contains configuration that can not be provided in the AsyncAPI standard message object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-jms-0.0.1-message".
 */
export interface MessageSchema {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  headers?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.0.1";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.5.0-message".
 */
export interface MessageSchema1 {
  /**
   * The message key.
   */
  key?: Reference | Schema;
  /**
   * If a Schema Registry is used when performing this operation, tells where the id of schema is stored.
   */
  schemaIdLocation?: "header" | "payload";
  /**
   * Number of bytes or vendor specific values when schema id is encoded in payload.
   */
  schemaIdPayloadEncoding?: string;
  /**
   * Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied.
   */
  schemaLookupStrategy?: string;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.5.0";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.4.0-message".
 */
export interface MessageSchema2 {
  /**
   * The message key.
   */
  key?: Reference | Schema | AvroSchemaDefinition;
  /**
   * If a Schema Registry is used when performing this operation, tells where the id of schema is stored.
   */
  schemaIdLocation?: "header" | "payload";
  /**
   * Number of bytes or vendor specific values when schema id is encoded in payload.
   */
  schemaIdPayloadEncoding?: string;
  /**
   * Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied.
   */
  schemaLookupStrategy?: string;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.4.0";
  [k: string]: SpecificationExtension;
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
 * via the `definition` "bindings-kafka-0.3.0-message".
 */
export interface MessageSchema3 {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  key?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * If a Schema Registry is used when performing this operation, tells where the id of schema is stored.
   */
  schemaIdLocation?: "header" | "payload";
  /**
   * Number of bytes or vendor specific values when schema id is encoded in payload.
   */
  schemaIdPayloadEncoding?: string;
  /**
   * Freeform string for any naming strategy class to use. Clients should default to the vendor default if not supplied.
   */
  schemaLookupStrategy?: string;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the message representation in MQTT.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-mqtt-0.2.0-message".
 */
export interface MQTTMessageBindingsObject {
  /**
   * 1 indicates that the payload is UTF-8 encoded character data.  0 indicates that the payload format is unspecified.
   */
  payloadFormatIndicator?: 0 | 1;
  /**
   * Correlation Data is used by the sender of the request message to identify which request the response message is for when it is received.
   */
  correlationData?: Schema | Reference;
  /**
   * String describing the content type of the message payload. This should not conflict with the contentType field of the associated AsyncAPI Message object.
   */
  contentType?: string;
  /**
   * The topic (channel URI) to be used for a response message.
   */
  responseTopic?: string | Schema | Reference;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * The Multi Format Schema Object represents a schema definition. It differs from the Schema Object in that it supports multiple schema formats or languages (e.g., JSON Schema, Avro, etc.).
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "multiFormatSchema".
 */
export interface MultiFormatSchema {
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
 * This object contains information about the operation representation in AMQP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-amqp-0.3.0-operation".
 */
export interface AMQPOperationBindingsObject {
  /**
   * TTL (Time-To-Live) for the message. It MUST be greater than or equal to zero.
   */
  expiration?: number;
  /**
   * Identifies the user who has sent the message.
   */
  userId?: string;
  /**
   * The routing keys the message should be routed to at the time of publishing.
   */
  cc?: string[];
  /**
   * A priority for the message.
   */
  priority?: number;
  /**
   * Delivery mode of the message. Its value MUST be either 1 (transient) or 2 (persistent).
   */
  deliveryMode?: 1 | 2;
  /**
   * Whether the message is mandatory or not.
   */
  mandatory?: boolean;
  /**
   * Like cc but consumers will not receive this information.
   */
  bcc?: string[];
  /**
   * Whether the message should include a timestamp or not.
   */
  timestamp?: boolean;
  /**
   * Whether the consumer should ack the message or not.
   */
  ack?: boolean;
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in HTTP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-http-0.3.0-operation".
 */
export interface HTTPOperationBindingsObject {
  /**
   * When 'type' is 'request', this is the HTTP method, otherwise it MUST be ignored. Its value MUST be one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'CONNECT', and 'TRACE'.
   */
  method?: "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE";
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  query?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in HTTP.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-http-0.2.0-operation".
 */
export interface HTTPOperationBindingsObject1 {
  /**
   * When 'type' is 'request', this is the HTTP method, otherwise it MUST be ignored. Its value MUST be one of 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'CONNECT', and 'TRACE'.
   */
  method?: "GET" | "PUT" | "POST" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE";
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  query?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in Kafka.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.5.0-operation".
 */
export interface OperationSchema {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  groupId?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  clientId?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.5.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in Kafka.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.4.0-operation".
 */
export interface OperationSchema1 {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  groupId?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  clientId?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.4.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in Kafka.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.3.0-operation".
 */
export interface OperationSchema2 {
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  groupId?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is a superset of the JSON Schema Specification Draft 07. The empty schema (which allows any instance to validate) MAY be represented by the boolean value true and a schema which allows no instance to validate MAY be represented by the boolean value false.
   */
  clientId?: CoreSchemaMetaSchema & {
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned out of usage. Default value is false.
     */
    deprecated?: boolean;
    /**
     * @minItems 1
     */
    allOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    anyOf?: [Schema, ...Schema[]];
    /**
     * @minItems 1
     */
    oneOf?: [Schema, ...Schema[]];
    not?: Schema;
    contains?: Schema;
    items?: Schema | [Schema, ...Schema[]];
    propertyNames?: Schema;
    properties?: {
      [k: string]: Schema;
    };
    patternProperties?: {
      [k: string]: Schema;
    };
    additionalProperties?: Schema | boolean;
    /**
     * Adds support for polymorphism. The discriminator is the schema property name that is used to differentiate between other schema that inherit this schema. The property name used MUST be defined at this schema and it MUST be in the required property list. When used, the value MUST be the name of this schema or any schema that inherits it. See Composition and Inheritance for more details.
     */
    discriminator?: string;
    externalDocs?: Reference | ExternalDocs;
    [k: string]: SpecificationExtension;
  };
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in MQTT.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-mqtt-0.2.0-operation".
 */
export interface MQTTOperationBindingsObject {
  /**
   * Defines the Quality of Service (QoS) levels for the message flow between client and server. Its value MUST be either 0 (At most once delivery), 1 (At least once delivery), or 2 (Exactly once delivery).
   */
  qos?: 0 | 1 | 2;
  /**
   * Whether the broker should retain the message or not.
   */
  retain?: boolean;
  /**
   * Lifetime of the message in seconds
   */
  messageExpiryInterval?: number | Schema | Reference;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in NATS.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-nats-0.1.0-operation".
 */
export interface NATSOperationBindingsObject {
  /**
   * Defines the name of the queue to use. It MUST NOT exceed 255 characters.
   */
  queue?: string;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in ROS 2.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-ros2-0.1.0-operation".
 */
export interface BindingsRos201 {
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0";
  /**
   * The name of the ROS 2 node that implements this operation.
   */
  node: string;
  qosPolicies?: {
    /**
     * The expected maximum amount of time between subsequent messages being published to a topic. -1 means infinite.
     */
    deadline?: number;
    /**
     * Persistence specification that determines message availability for late-joining subscribers
     */
    durability?: "transient_local" | "volatile";
    /**
     * Policy parameter that defines the maximum number of samples maintained in the middleware queue
     */
    history?: "keep_last" | "keep_all" | "unknown";
    /**
     * The maximum period of time a publisher has to indicate that it is alive before the system considers it to have lost liveliness. -1 means infinite.
     */
    leaseDuration?: number;
    /**
     * The maximum amount of time between the publishing and the reception of a message without the message being considered stale or expired. -1 means infinite.
     */
    lifespan?: number;
    /**
     * Defines the mechanism by which the system monitors and determines the operational status of communication entities within the network.
     */
    liveliness?: "automatic" | "manual";
    /**
     * Specifies the communication guarantee model that determines whether message delivery confirmation between publisher and subscriber is required.
     */
    reliability?: "best_effort" | "realiable";
  };
  /**
   * Specifies the ROS 2 type of the node for this operation.
   */
  role: "publisher" | "action_client" | "service_client" | "subscriber" | "action_server" | "service_server";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in SNS.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-sns-0.1.0-operation".
 */
export interface OperationSchema3 {
  topic?: Identifier1;
  /**
   * The protocols that listen to this topic and their endpoints.
   *
   * @minItems 1
   */
  consumers: [Consumer, ...Consumer[]];
  deliveryPolicy?: DeliveryPolicy1;
  /**
   * The version of this binding.
   */
  bindingVersion?: string;
  [k: string]: SpecificationExtension;
}
/**
 * Often we can assume that the SNS Topic is the channel name-we provide this field in case the you need to supply the ARN, or the Topic name is not the channel name in the AsyncAPI document.
 */
export interface Identifier1 {
  /**
   * The endpoint is a URL.
   */
  url?: string;
  /**
   * The endpoint is an email address.
   */
  email?: string;
  /**
   * The endpoint is a phone number.
   */
  phone?: string;
  /**
   * The target is an ARN. For example, for SQS, the identifier may be an ARN, which will be of the form: arn:aws:sqs:{region}:{account-id}:{queueName}
   */
  arn?: string;
  /**
   * The endpoint is identified by a name, which corresponds to an identifying field called 'name' of a binding for that protocol on this publish Operation Object. For example, if the protocol is 'sqs' then the name refers to the name field sqs binding. We don't use $ref because we are referring, not including.
   */
  name?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `OperationSchema3`'s JSON-Schema
 * via the `definition` "consumer".
 */
export interface Consumer {
  /**
   * The protocol that this endpoint receives messages by.
   */
  protocol: "http" | "https" | "email" | "email-json" | "sms" | "sqs" | "application" | "lambda" | "firehose";
  endpoint: Identifier2;
  /**
   * Only receive a subset of messages from the channel, determined by this policy. Depending on the FilterPolicyScope, a map of either a message attribute or message body to an array of possible matches. The match may be a simple string for an exact match, but it may also be an object that represents a constraint and values for that constraint.
   */
  filterPolicy?: {
    [k: string]: string[] | string | {};
  };
  /**
   * Determines whether the FilterPolicy applies to MessageAttributes or MessageBody.
   */
  filterPolicyScope?: "MessageAttributes" | "MessageBody";
  /**
   * If true AWS SNS attributes are removed from the body, and for SQS, SNS message attributes are copied to SQS message attributes. If false the SNS attributes are included in the body.
   */
  rawMessageDelivery: boolean;
  redrivePolicy?: RedrivePolicy1;
  deliveryPolicy?: DeliveryPolicy;
  /**
   * The display name to use with an SNS subscription
   */
  displayName?: string;
  [k: string]: SpecificationExtension;
}
/**
 * The endpoint messages are delivered to.
 */
export interface Identifier2 {
  /**
   * The endpoint is a URL.
   */
  url?: string;
  /**
   * The endpoint is an email address.
   */
  email?: string;
  /**
   * The endpoint is a phone number.
   */
  phone?: string;
  /**
   * The target is an ARN. For example, for SQS, the identifier may be an ARN, which will be of the form: arn:aws:sqs:{region}:{account-id}:{queueName}
   */
  arn?: string;
  /**
   * The endpoint is identified by a name, which corresponds to an identifying field called 'name' of a binding for that protocol on this publish Operation Object. For example, if the protocol is 'sqs' then the name refers to the name field sqs binding. We don't use $ref because we are referring, not including.
   */
  name?: string;
  [k: string]: SpecificationExtension;
}
/**
 * Prevent poison pill messages by moving un-processable messages to an SQS dead letter queue.
 *
 * This interface was referenced by `OperationSchema3`'s JSON-Schema
 * via the `definition` "redrivePolicy".
 */
export interface RedrivePolicy1 {
  deadLetterQueue: Identifier3;
  /**
   * The number of times a message is delivered to the source queue before being moved to the dead-letter queue.
   */
  maxReceiveCount?: number;
  [k: string]: SpecificationExtension;
}
/**
 * The SQS queue to use as a dead letter queue (DLQ).
 */
export interface Identifier3 {
  /**
   * The endpoint is a URL.
   */
  url?: string;
  /**
   * The endpoint is an email address.
   */
  email?: string;
  /**
   * The endpoint is a phone number.
   */
  phone?: string;
  /**
   * The target is an ARN. For example, for SQS, the identifier may be an ARN, which will be of the form: arn:aws:sqs:{region}:{account-id}:{queueName}
   */
  arn?: string;
  /**
   * The endpoint is identified by a name, which corresponds to an identifying field called 'name' of a binding for that protocol on this publish Operation Object. For example, if the protocol is 'sqs' then the name refers to the name field sqs binding. We don't use $ref because we are referring, not including.
   */
  name?: string;
  [k: string]: SpecificationExtension;
}
/**
 * Policy for retries to HTTP. The parameter is for that SNS Subscription and overrides any policy on the SNS Topic.
 */
export interface DeliveryPolicy {
  /**
   * The minimum delay for a retry in seconds.
   */
  minDelayTarget?: number;
  /**
   * The maximum delay for a retry in seconds.
   */
  maxDelayTarget?: number;
  /**
   * The total number of retries, including immediate, pre-backoff, backoff, and post-backoff retries.
   */
  numRetries?: number;
  /**
   * The number of immediate retries (with no delay).
   */
  numNoDelayRetries?: number;
  /**
   * The number of immediate retries (with delay).
   */
  numMinDelayRetries?: number;
  /**
   * The number of post-backoff phase retries, with the maximum delay between retries.
   */
  numMaxDelayRetries?: number;
  /**
   * The algorithm for backoff between retries.
   */
  backoffFunction?: "arithmetic" | "exponential" | "geometric" | "linear";
  /**
   * The maximum number of deliveries per second, per subscription.
   */
  maxReceivesPerSecond?: number;
  [k: string]: SpecificationExtension;
}
/**
 * Policy for retries to HTTP. The field is the default for HTTP receivers of the SNS Topic which may be overridden by a specific consumer.
 */
export interface DeliveryPolicy1 {
  /**
   * The minimum delay for a retry in seconds.
   */
  minDelayTarget?: number;
  /**
   * The maximum delay for a retry in seconds.
   */
  maxDelayTarget?: number;
  /**
   * The total number of retries, including immediate, pre-backoff, backoff, and post-backoff retries.
   */
  numRetries?: number;
  /**
   * The number of immediate retries (with no delay).
   */
  numNoDelayRetries?: number;
  /**
   * The number of immediate retries (with delay).
   */
  numMinDelayRetries?: number;
  /**
   * The number of post-backoff phase retries, with the maximum delay between retries.
   */
  numMaxDelayRetries?: number;
  /**
   * The algorithm for backoff between retries.
   */
  backoffFunction?: "arithmetic" | "exponential" | "geometric" | "linear";
  /**
   * The maximum number of deliveries per second, per subscription.
   */
  maxReceivesPerSecond?: number;
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the operation representation in Solace.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-solace-0.4.0-operation".
 */
export interface SolaceOperationBindingsObject {
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.4.0";
  /**
   * The list of Solace destinations referenced in the operation.
   */
  destinations?: (
    | {
        /**
         * If the type is queue, then the subscriber can bind to the queue. The queue subscribes to the given topicSubscriptions. If no topicSubscriptions are provied, the queue will subscribe to the topic as represented by the channel name.
         */
        destinationType?: "queue";
        queue?: {
          /**
           * The name of the queue
           */
          name?: string;
          /**
           * The list of topics that the queue subscribes to.
           */
          topicSubscriptions?: string[];
          accessType?: "exclusive" | "nonexclusive";
          /**
           * The maximum TTL to apply to messages to be spooled.
           */
          maxTtl?: string;
          /**
           * The maximum amount of message spool that the given queue may use
           */
          maxMsgSpoolUsage?: string;
        };
      }
    | {
        /**
         * If the type is topic, then the subscriber subscribes to the given topicSubscriptions. If no topicSubscriptions are provided, the client will subscribe to the topic as represented by the channel name.
         */
        destinationType?: "topic";
        /**
         * The list of topics that the client subscribes to.
         */
        topicSubscriptions?: string[];
      }
  )[];
  /**
   * Interval in milliseconds or a Schema Object containing the definition of the lifetime of the message.
   */
  timeToLive?: number;
  /**
   * The valid priority value range is 0-255 with 0 as the lowest priority and 255 as the highest or a Schema Object containing the definition of the priority.
   */
  priority?: number;
  /**
   * Set the message to be eligible to be moved to a Dead Message Queue. The default value is false.
   */
  dmqEligible?: boolean;
}
/**
 * This object contains information about the operation representation in Solace.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-solace-0.3.0-operation".
 */
export interface SolaceOperationBindingsObject1 {
  /**
   * The list of Solace destinations referenced in the operation.
   */
  destinations?: (
    | {
        /**
         * If the type is queue, then the subscriber can bind to the queue. The queue subscribes to the given topicSubscriptions. If no topicSubscriptions are provied, the queue will subscribe to the topic as represented by the channel name.
         */
        destinationType?: "queue";
        queue?: {
          /**
           * The name of the queue
           */
          name?: string;
          /**
           * The list of topics that the queue subscribes to.
           */
          topicSubscriptions?: string[];
          accessType?: "exclusive" | "nonexclusive";
          /**
           * The maximum TTL to apply to messages to be spooled.
           */
          maxTtl?: string;
          /**
           * The maximum amount of message spool that the given queue may use
           */
          maxMsgSpoolUsage?: string;
        };
      }
    | {
        /**
         * If the type is topic, then the subscriber subscribes to the given topicSubscriptions. If no topicSubscriptions are provided, the client will subscribe to the topic as represented by the channel name.
         */
        destinationType?: "topic";
        /**
         * The list of topics that the client subscribes to.
         */
        topicSubscriptions?: string[];
      }
  )[];
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.3.0";
}
/**
 * This object contains information about the operation representation in Solace.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-solace-0.2.0-operation".
 */
export interface SolaceOperationBindingsObject2 {
  /**
   * The list of Solace destinations referenced in the operation.
   */
  destinations?: (
    | {
        /**
         * If the type is queue, then the subscriber can bind to the queue. The queue subscribes to the given topicSubscriptions. If no topicSubscriptions are provied, the queue will subscribe to the topic as represented by the channel name.
         */
        destinationType?: "queue";
        queue?: {
          /**
           * The name of the queue
           */
          name?: string;
          /**
           * The list of topics that the queue subscribes to.
           */
          topicSubscriptions?: string[];
          accessType?: "exclusive" | "nonexclusive";
        };
      }
    | {
        /**
         * If the type is topic, then the subscriber subscribes to the given topicSubscriptions. If no topicSubscriptions are provided, the client will subscribe to the topic as represented by the channel name.
         */
        destinationType?: "topic";
        /**
         * The list of topics that the client subscribes to.
         */
        topicSubscriptions?: string[];
      }
  )[];
  /**
   * The version of this binding. If omitted, "latest" MUST be assumed.
   */
  bindingVersion?: "0.2.0";
}
/**
 * This object contains information about the operation representation in SQS.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-sqs-0.2.0-operation".
 */
export interface OperationSchema4 {
  /**
   * Queue objects that are either the endpoint for an SNS Operation Binding Object, or the deadLetterQueue of the SQS Operation Binding Object.
   */
  queues: Queue2[];
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0" | "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * A definition of a queue.
 *
 * This interface was referenced by `OperationSchema4`'s JSON-Schema
 * via the `definition` "queue".
 */
export interface Queue2 {
  /**
   * Allows for an external definition of a queue. The referenced structure MUST be in the format of a Queue. If there are conflicts between the referenced definition and this Queue's definition, the behavior is undefined.
   */
  $ref?: string;
  /**
   * The name of the queue. When an SNS Operation Binding Object references an SQS queue by name, the identifier should be the one in this field.
   */
  name: string;
  /**
   * Is this a FIFO queue?
   */
  fifoQueue?: boolean;
  /**
   * Specifies whether message deduplication occurs at the message group or queue level. Valid values are messageGroup and queue (default).
   */
  deduplicationScope?: "queue" | "messageGroup";
  /**
   * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are perQueue (default) and perMessageGroupId.
   */
  fifoThroughputLimit?: "perQueue" | "perMessageGroupId";
  /**
   * The number of seconds to delay before a message sent to the queue can be received. Used to create a delay queue.
   */
  deliveryDelay?: number;
  /**
   * The length of time, in seconds, that a consumer locks a message - hiding it from reads - before it is unlocked and can be read again.
   */
  visibilityTimeout?: number;
  /**
   * Determines if the queue uses short polling or long polling. Set to zero the queue reads available messages and returns immediately. Set to a non-zero integer, long polling waits the specified number of seconds for messages to arrive before returning.
   */
  receiveMessageWaitTime?: number;
  /**
   * How long to retain a message on the queue in seconds, unless deleted.
   */
  messageRetentionPeriod?: number;
  redrivePolicy?: RedrivePolicy2;
  policy?: Policy2;
  /**
   * Key-value pairs that represent AWS tags on the queue.
   */
  tags?: {};
  [k: string]: SpecificationExtension;
}
/**
 * Prevent poison pill messages by moving un-processable messages to an SQS dead letter queue.
 *
 * This interface was referenced by `OperationSchema4`'s JSON-Schema
 * via the `definition` "redrivePolicy".
 */
export interface RedrivePolicy2 {
  deadLetterQueue: Identifier4;
  /**
   * The number of times a message is delivered to the source queue before being moved to the dead-letter queue.
   */
  maxReceiveCount?: number;
  [k: string]: SpecificationExtension;
}
/**
 * The SQS queue to use as a dead letter queue (DLQ).
 *
 * This interface was referenced by `OperationSchema4`'s JSON-Schema
 * via the `definition` "identifier".
 */
export interface Identifier4 {
  /**
   * The target is an ARN. For example, for SQS, the identifier may be an ARN, which will be of the form: arn:aws:sqs:{region}:{account-id}:{queueName}
   */
  arn?: string;
  /**
   * The endpoint is identified by a name, which corresponds to an identifying field called 'name' of a binding for that protocol on this publish Operation Object. For example, if the protocol is 'sqs' then the name refers to the name field sqs binding.
   */
  name?: string;
  [k: string]: SpecificationExtension;
}
/**
 * The security policy for the SQS Queue
 *
 * This interface was referenced by `OperationSchema4`'s JSON-Schema
 * via the `definition` "policy".
 */
export interface Policy2 {
  /**
   * An array of statement objects, each of which controls a permission for this queue.
   */
  statements: Statement2[];
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `OperationSchema4`'s JSON-Schema
 * via the `definition` "statement".
 */
export interface Statement2 {
  effect: "Allow" | "Deny";
  /**
   * The AWS account or resource ARN that this statement applies to.
   */
  principal: string | string[];
  /**
   * The SQS permission being allowed or denied e.g. sqs:ReceiveMessage
   */
  action: string | string[];
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "oauth2Scopes".
 */
export interface Oauth2Scopes1 {
  [k: string]: string;
}
/**
 * This object contains server connection information about the IBM MQ server, referred to as an IBM MQ queue manager. This object contains additional connectivity information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-ibmmq-0.1.0-server".
 */
export interface IBMMQServerBindingsObject {
  /**
   * Defines a logical group of IBM MQ server objects. This is necessary to specify multi-endpoint configurations used in high availability deployments. If omitted, the server object is not part of a group.
   */
  groupId?: string;
  /**
   * The name of the IBM MQ queue manager to bind to in the CCDT file.
   */
  ccdtQueueManagerName?: string;
  /**
   * The recommended cipher specification used to establish a TLS connection between the client and the IBM MQ queue manager. More information on SSL/TLS cipher specifications supported by IBM MQ can be found on this page in the IBM MQ Knowledge Center.
   */
  cipherSpec?: string;
  /**
   * If 'multiEndpointServer' is 'true' then multiple connections can be workload balanced and applications should not make assumptions as to where messages are processed. Where message ordering, or affinity to specific message resources is necessary, a single endpoint ('multiEndpointServer' = 'false') may be required.
   */
  multiEndpointServer?: boolean;
  /**
   * The recommended value (in seconds) for the heartbeat sent to the queue manager during periods of inactivity. A value of zero means that no heart beats are sent. A value of 1 means that the client will use the value defined by the queue manager. More information on heart beat interval can be found on this page in the IBM MQ Knowledge Center.
   */
  heartBeatInterval?: number;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.1.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains configuration for describing a JMS broker as an AsyncAPI server. This objects only contains configuration that can not be provided in the AsyncAPI standard server object.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-jms-0.0.1-server".
 */
export interface ServerSchema {
  /**
   * The classname of the ConnectionFactory implementation for the JMS Provider.
   */
  jmsConnectionFactory: string;
  /**
   * Additional properties to set on the JMS ConnectionFactory implementation for the JMS Provider.
   */
  properties?: Property[];
  /**
   * A client identifier for applications that use this JMS connection factory. If the Client ID Policy is set to 'Restricted' (the default), then configuring a Client ID on the ConnectionFactory prevents more than one JMS client from using a connection from this factory.
   */
  clientID?: string;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.0.1";
  [k: string]: SpecificationExtension;
}
/**
 * This interface was referenced by `ServerSchema`'s JSON-Schema
 * via the `definition` "property".
 */
export interface Property {
  /**
   * The name of a property
   */
  name: string;
  /**
   * The name of a property
   */
  value: string | boolean | number | null;
}
/**
 * This object contains server connection information to a Kafka broker. This object contains additional information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.5.0-server".
 */
export interface ServerSchema1 {
  /**
   * API URL for the Schema Registry used when producing Kafka messages (if a Schema Registry was used).
   */
  schemaRegistryUrl?: string;
  /**
   * The vendor of the Schema Registry and Kafka serdes library that should be used.
   */
  schemaRegistryVendor?: string;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.5.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains server connection information to a Kafka broker. This object contains additional information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.4.0-server".
 */
export interface ServerSchema2 {
  /**
   * API URL for the Schema Registry used when producing Kafka messages (if a Schema Registry was used).
   */
  schemaRegistryUrl?: string;
  /**
   * The vendor of the Schema Registry and Kafka serdes library that should be used.
   */
  schemaRegistryVendor?: string;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.4.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains server connection information to a Kafka broker. This object contains additional information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-kafka-0.3.0-server".
 */
export interface ServerSchema3 {
  /**
   * API URL for the Schema Registry used when producing Kafka messages (if a Schema Registry was used).
   */
  schemaRegistryUrl?: string;
  /**
   * The vendor of the Schema Registry and Kafka serdes library that should be used.
   */
  schemaRegistryVendor?: string;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the server representation in MQTT.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-mqtt-0.2.0-server".
 */
export interface ServerSchema4 {
  /**
   * The client identifier.
   */
  clientId?: string;
  /**
   * Whether to create a persistent connection or not. When 'false', the connection will be persistent. This is called clean start in MQTTv5.
   */
  cleanSession?: boolean;
  /**
   * Last Will and Testament configuration.
   */
  lastWill?: {
    /**
     * The topic where the Last Will and Testament message will be sent.
     */
    topic?: string;
    /**
     * Defines how hard the broker/client will try to ensure that the Last Will and Testament message is received. Its value MUST be either 0, 1 or 2.
     */
    qos?: 0 | 1 | 2;
    /**
     * Last Will message.
     */
    message?: string;
    /**
     * Whether the broker should retain the Last Will and Testament message or not.
     */
    retain?: boolean;
  };
  /**
   * Interval in seconds of the longest period of time the broker and the client can endure without sending a message.
   */
  keepAlive?: number;
  /**
   * Interval time in seconds or a Schema Object containing the definition of the interval.  The broker maintains a session for a disconnected client until this interval expires.
   */
  sessionExpiryInterval?: number | Schema | Reference;
  /**
   * Number of bytes or a Schema Object representing the Maximum Packet Size the Client is willing to accept.
   */
  maximumPacketSize?: number | Schema | Reference;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.2.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains server information of Pulsar broker, which covers cluster and tenant admin configuration. This object contains additional information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-pulsar-0.1.0-server".
 */
export interface ServerSchema5 {
  /**
   * The pulsar tenant. If omitted, 'public' MUST be assumed.
   */
  tenant?: string;
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains information about the server representation in ROS 2.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-ros2-0.1.0-server".
 */
export interface BindingsRos2011 {
  /**
   * The version of this binding. If omitted, 'latest' MUST be assumed.
   */
  bindingVersion?: "0.1.0";
  /**
   * All ROS 2 nodes use domain ID 0 by default. To prevent interference between different groups of computers running ROS 2 on the same network, a group can be set with a unique domain ID.
   */
  domainId?: number;
  /**
   * Specifies the ROS 2 middleware implementation to be used. This determines the underlying middleware implementation that handles communication.
   */
  rmwImplementation?: string;
  [k: string]: SpecificationExtension;
}
/**
 * This object contains server connection information about the Solace broker. This object contains additional connectivity information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-solace-0.4.0-server".
 */
export interface SolaceServerBindingsObject {
  /**
   * The name of the Virtual Private Network to connect to on the Solace broker.
   */
  msgVpn?: string;
  /**
   * A unique client name to use to register to the appliance. If specified, it must be a valid Topic name, and a maximum of 160 bytes in length when encoded as UTF-8.
   */
  clientName?: string;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.4.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains server connection information about the Solace broker. This object contains additional connectivity information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-solace-0.3.0-server".
 */
export interface SolaceServerBindingsObject1 {
  /**
   * The name of the Virtual Private Network to connect to on the Solace broker.
   */
  msgVpn?: string;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.3.0";
  [k: string]: SpecificationExtension;
}
/**
 * This object contains server connection information about the Solace broker. This object contains additional connectivity information not possible to represent within the core AsyncAPI specification.
 *
 * This interface was referenced by `AsyncApi`'s JSON-Schema
 * via the `definition` "bindings-solace-0.2.0-server".
 */
export interface SolaceServerBindingsObject2 {
  /**
   * The name of the Virtual Private Network to connect to on the Solace broker.
   */
  msvVpn?: string;
  /**
   * The version of this binding.
   */
  bindingVersion?: "0.2.0";
  [k: string]: SpecificationExtension;
}
