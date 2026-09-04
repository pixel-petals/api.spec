/**
 * Mcp — generated from the vendored JSON Schema.
 *
 * mcp 2025-06-18
 * Strategy: references kept.
 *
 * Do not edit by hand.
 */
/**
 * The sender or recipient of messages and data in a conversation.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Role".
 */
export type Role = "assistant" | "user";
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ContentBlock".
 */
export type ContentBlock = TextContent | ImageContent | AudioContent | ResourceLink | EmbeddedResource;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientNotification".
 */
export type ClientNotification =
  CancelledNotification | InitializedNotification | ProgressNotification | RootsListChangedNotification;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientRequest".
 */
export type ClientRequest =
  | InitializeRequest
  | PingRequest
  | ListResourcesRequest
  | ListResourceTemplatesRequest
  | ReadResourceRequest
  | SubscribeRequest
  | UnsubscribeRequest
  | ListPromptsRequest
  | GetPromptRequest
  | ListToolsRequest
  | CallToolRequest
  | SetLevelRequest
  | CompleteRequest;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientResult".
 */
export type ClientResult = Result | CreateMessageResult | ListRootsResult | ElicitResult;
/**
 * An opaque token used to represent a cursor for pagination.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Cursor".
 */
export type Cursor = string;
/**
 * Restricted schema definitions that only allow primitive types
 * without nested objects or arrays.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PrimitiveSchemaDefinition".
 */
export type PrimitiveSchemaDefinition = StringSchema | NumberSchema | BooleanSchema | EnumSchema;
/**
 * A uniquely identifying ID for a request in JSON-RPC.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "RequestId".
 */
export type RequestId = string | number;
/**
 * Refers to any valid JSON-RPC object that can be decoded off the wire, or encoded to be sent.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCMessage".
 */
export type JSONRPCMessage = JSONRPCRequest | JSONRPCNotification | JSONRPCResponse | JSONRPCError;
/**
 * The severity of a log message.
 *
 * These map to syslog message severities, as specified in RFC-5424:
 * https://datatracker.ietf.org/doc/html/rfc5424#section-6.2.1
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "LoggingLevel".
 */
export type LoggingLevel = "alert" | "critical" | "debug" | "emergency" | "error" | "info" | "notice" | "warning";
/**
 * A progress token, used to associate progress notifications with the original request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ProgressToken".
 */
export type ProgressToken = string | number;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerNotification".
 */
export type ServerNotification =
  | CancelledNotification
  | ProgressNotification
  | ResourceListChangedNotification
  | ResourceUpdatedNotification
  | PromptListChangedNotification
  | ToolListChangedNotification
  | LoggingMessageNotification;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerRequest".
 */
export type ServerRequest = PingRequest | CreateMessageRequest | ListRootsRequest | ElicitRequest;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerResult".
 */
export type ServerResult =
  | Result
  | InitializeResult
  | ListResourcesResult
  | ListResourceTemplatesResult
  | ReadResourceResult
  | ListPromptsResult
  | GetPromptResult
  | ListToolsResult
  | CallToolResult
  | CompleteResult;

export interface Mcp {
  [k: string]: unknown;
}
/**
 * Optional annotations for the client. The client can use annotations to inform how objects are used or displayed
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Annotations".
 */
export interface Annotations {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * Audio provided to or from an LLM.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "AudioContent".
 */
export interface AudioContent {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations1;
  /**
   * The base64-encoded audio data.
   */
  data: string;
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: string;
  type: "audio";
}
/**
 * Optional annotations for the client.
 */
export interface Annotations1 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * Base interface for metadata with name (identifier) and title (display name) properties.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "BaseMetadata".
 */
export interface BaseMetadata {
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "BlobResourceContents".
 */
export interface BlobResourceContents {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: string;
  /**
   * The MIME type of this resource, if known.
   */
  mimeType?: string;
  /**
   * The URI of this resource.
   */
  uri: string;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "BooleanSchema".
 */
export interface BooleanSchema {
  default?: boolean;
  description?: string;
  title?: string;
  type: "boolean";
}
/**
 * Used by the client to invoke a tool provided by the server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CallToolRequest".
 */
export interface CallToolRequest {
  method: "tools/call";
  params: {
    arguments?: {
      [k: string]: unknown;
    };
    name: string;
  };
}
/**
 * The server's response to a tool call.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CallToolResult".
 */
export interface CallToolResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * A list of content objects that represent the unstructured result of the tool call.
   */
  content: ContentBlock[];
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   *
   * Any errors that originate from the tool SHOULD be reported inside the result
   * object, with `isError` set to true, _not_ as an MCP protocol-level error
   * response. Otherwise, the LLM would not be able to see that an error occurred
   * and self-correct.
   *
   * However, any errors in _finding_ the tool, an error indicating that the
   * server does not support tool calls, or any other exceptional conditions,
   * should be reported as an MCP error response.
   */
  isError?: boolean;
  /**
   * An optional JSON object that represents the structured result of the tool call.
   */
  structuredContent?: {
    [k: string]: unknown;
  };
}
/**
 * Text provided to or from an LLM.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "TextContent".
 */
export interface TextContent {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations2;
  /**
   * The text content of the message.
   */
  text: string;
  type: "text";
}
/**
 * Optional annotations for the client.
 */
export interface Annotations2 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * An image provided to or from an LLM.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ImageContent".
 */
export interface ImageContent {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations3;
  /**
   * The base64-encoded image data.
   */
  data: string;
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: string;
  type: "image";
}
/**
 * Optional annotations for the client.
 */
export interface Annotations3 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * A resource that the server is capable of reading, included in a prompt or tool call result.
 *
 * Note: resource links returned by tools are not guaranteed to appear in the results of `resources/list` requests.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceLink".
 */
export interface ResourceLink {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations4;
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * The MIME type of this resource, if known.
   */
  mimeType?: string;
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
   *
   * This can be used by Hosts to display file sizes and estimate context window usage.
   */
  size?: number;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  type: "resource_link";
  /**
   * The URI of this resource.
   */
  uri: string;
}
/**
 * Optional annotations for the client.
 */
export interface Annotations4 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * The contents of a resource, embedded into a prompt or tool call result.
 *
 * It is up to the client how best to render embedded resources for the benefit
 * of the LLM and/or the user.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "EmbeddedResource".
 */
export interface EmbeddedResource {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations5;
  resource: TextResourceContents | BlobResourceContents;
  type: "resource";
}
/**
 * Optional annotations for the client.
 */
export interface Annotations5 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "TextResourceContents".
 */
export interface TextResourceContents {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * The MIME type of this resource, if known.
   */
  mimeType?: string;
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: string;
  /**
   * The URI of this resource.
   */
  uri: string;
}
/**
 * This notification can be sent by either side to indicate that it is cancelling a previously-issued request.
 *
 * The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
 *
 * This notification indicates that the result will be unused, so any associated processing SHOULD cease.
 *
 * A client MUST NOT attempt to cancel its `initialize` request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CancelledNotification".
 */
export interface CancelledNotification {
  method: "notifications/cancelled";
  params: {
    /**
     * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
     */
    reason?: string;
    /**
     * The ID of the request to cancel.
     *
     * This MUST correspond to the ID of a request previously issued in the same direction.
     */
    requestId: string | number;
  };
}
/**
 * Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientCapabilities".
 */
export interface ClientCapabilities {
  /**
   * Present if the client supports elicitation from the server.
   */
  elicitation?: {
    [k: string]: unknown;
  };
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  /**
   * Present if the client supports listing roots.
   */
  roots?: {
    /**
     * Whether the client supports notifications for changes to the roots list.
     */
    listChanged?: boolean;
  };
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling?: {
    [k: string]: unknown;
  };
}
/**
 * This notification is sent from the client to the server after initialization has finished.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InitializedNotification".
 */
export interface InitializedNotification {
  method: "notifications/initialized";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * An out-of-band notification used to inform the receiver of a progress update for a long-running request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ProgressNotification".
 */
export interface ProgressNotification {
  method: "notifications/progress";
  params: {
    /**
     * An optional message describing the current progress.
     */
    message?: string;
    /**
     * The progress thus far. This should increase every time progress is made, even if the total is unknown.
     */
    progress: number;
    /**
     * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
     */
    progressToken: string | number;
    /**
     * Total number of items to process (or total progress required), if known.
     */
    total?: number;
  };
}
/**
 * A notification from the client to the server, informing it that the list of roots has changed.
 * This notification should be sent whenever the client adds, removes, or modifies any root.
 * The server should then request an updated list of roots using the ListRootsRequest.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "RootsListChangedNotification".
 */
export interface RootsListChangedNotification {
  method: "notifications/roots/list_changed";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * This request is sent from the client to the server when it first connects, asking it to begin initialization.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InitializeRequest".
 */
export interface InitializeRequest {
  method: "initialize";
  params: {
    capabilities: ClientCapabilities;
    clientInfo: Implementation;
    /**
     * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
     */
    protocolVersion: string;
  };
}
/**
 * Describes the name and version of an MCP implementation, with an optional title for UI representation.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Implementation".
 */
export interface Implementation {
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  version: string;
}
/**
 * A ping, issued by either the server or the client, to check that the other party is still alive. The receiver must promptly respond, or else may be disconnected.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PingRequest".
 */
export interface PingRequest {
  method: "ping";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      /**
       * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
       */
      progressToken?: string | number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * Sent from the client to request a list of resources the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourcesRequest".
 */
export interface ListResourcesRequest {
  method: "resources/list";
  params?: {
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor?: string;
  };
}
/**
 * Sent from the client to request a list of resource templates the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourceTemplatesRequest".
 */
export interface ListResourceTemplatesRequest {
  method: "resources/templates/list";
  params?: {
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor?: string;
  };
}
/**
 * Sent from the client to the server, to read a specific resource URI.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ReadResourceRequest".
 */
export interface ReadResourceRequest {
  method: "resources/read";
  params: {
    /**
     * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: string;
  };
}
/**
 * Sent from the client to request resources/updated notifications from the server whenever a particular resource changes.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscribeRequest".
 */
export interface SubscribeRequest {
  method: "resources/subscribe";
  params: {
    /**
     * The URI of the resource to subscribe to. The URI can use any protocol; it is up to the server how to interpret it.
     */
    uri: string;
  };
}
/**
 * Sent from the client to request cancellation of resources/updated notifications from the server. This should follow a previous resources/subscribe request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "UnsubscribeRequest".
 */
export interface UnsubscribeRequest {
  method: "resources/unsubscribe";
  params: {
    /**
     * The URI of the resource to unsubscribe from.
     */
    uri: string;
  };
}
/**
 * Sent from the client to request a list of prompts and prompt templates the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListPromptsRequest".
 */
export interface ListPromptsRequest {
  method: "prompts/list";
  params?: {
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor?: string;
  };
}
/**
 * Used by the client to get a prompt provided by the server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "GetPromptRequest".
 */
export interface GetPromptRequest {
  method: "prompts/get";
  params: {
    /**
     * Arguments to use for templating the prompt.
     */
    arguments?: {
      [k: string]: string;
    };
    /**
     * The name of the prompt or prompt template.
     */
    name: string;
  };
}
/**
 * Sent from the client to request a list of tools the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListToolsRequest".
 */
export interface ListToolsRequest {
  method: "tools/list";
  params?: {
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor?: string;
  };
}
/**
 * A request from the client to the server, to enable or adjust logging.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SetLevelRequest".
 */
export interface SetLevelRequest {
  method: "logging/setLevel";
  params: {
    /**
     * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/message.
     */
    level: "alert" | "critical" | "debug" | "emergency" | "error" | "info" | "notice" | "warning";
  };
}
/**
 * A request from the client to the server, to ask for completion options.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CompleteRequest".
 */
export interface CompleteRequest {
  method: "completion/complete";
  params: {
    /**
     * The argument's information
     */
    argument: {
      /**
       * The name of the argument
       */
      name: string;
      /**
       * The value of the argument to use for completion matching.
       */
      value: string;
    };
    /**
     * Additional, optional context for completions
     */
    context?: {
      /**
       * Previously-resolved variables in a URI template or prompt.
       */
      arguments?: {
        [k: string]: string;
      };
    };
    ref: PromptReference | ResourceTemplateReference;
  };
}
/**
 * Identifies a prompt.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PromptReference".
 */
export interface PromptReference {
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  type: "ref/prompt";
}
/**
 * A reference to a resource or resource template definition.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceTemplateReference".
 */
export interface ResourceTemplateReference {
  type: "ref/resource";
  /**
   * The URI or URI template of the resource.
   */
  uri: string;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "EmptyResult".
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Result".
 */
export interface Result {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * The client's response to a sampling/create_message request from the server. The client should inform the user before returning the sampled message, to allow them to inspect the response (human in the loop) and decide whether to allow the server to see it.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CreateMessageResult".
 */
export interface CreateMessageResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  content: TextContent | ImageContent | AudioContent;
  /**
   * The name of the model that generated the message.
   */
  model: string;
  role: Role;
  /**
   * The reason why sampling stopped, if known.
   */
  stopReason?: string;
}
/**
 * The client's response to a roots/list request from the server.
 * This result contains an array of Root objects, each representing a root directory
 * or file that the server can operate on.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListRootsResult".
 */
export interface ListRootsResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  roots: Root[];
}
/**
 * Represents a root directory or file that the server can operate on.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Root".
 */
export interface Root {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An optional name for the root. This can be used to provide a human-readable
   * identifier for the root, which may be useful for display purposes or for
   * referencing the root in other parts of the application.
   */
  name?: string;
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   * This restriction may be relaxed in future versions of the protocol to allow
   * other URI schemes.
   */
  uri: string;
}
/**
 * The client's response to an elicitation request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitResult".
 */
export interface ElicitResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * The user action in response to the elicitation.
   * - "accept": User submitted the form/confirmed the action
   * - "decline": User explicitly declined the action
   * - "cancel": User dismissed without making an explicit choice
   */
  action: "accept" | "cancel" | "decline";
  /**
   * The submitted form data, only present when action is "accept".
   * Contains values matching the requested schema.
   */
  content?: {
    [k: string]: string | number | boolean;
  };
}
/**
 * The server's response to a completion/complete request
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CompleteResult".
 */
export interface CompleteResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  completion: {
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore?: boolean;
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total?: number;
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: string[];
  };
}
/**
 * A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CreateMessageRequest".
 */
export interface CreateMessageRequest {
  method: "sampling/createMessage";
  params: {
    /**
     * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt. The client MAY ignore this request.
     */
    includeContext?: "allServers" | "none" | "thisServer";
    /**
     * The requested maximum number of tokens to sample (to prevent runaway completions).
     *
     * The client MAY choose to sample fewer tokens than the requested maximum.
     */
    maxTokens: number;
    messages: SamplingMessage[];
    /**
     * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
     */
    metadata?: {
      [k: string]: unknown;
    };
    modelPreferences?: ModelPreferences;
    stopSequences?: string[];
    /**
     * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
     */
    systemPrompt?: string;
    temperature?: number;
  };
}
/**
 * Describes a message issued to or received from an LLM API.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SamplingMessage".
 */
export interface SamplingMessage {
  content: TextContent | ImageContent | AudioContent;
  role: Role;
}
/**
 * The server's preferences for which model to select. The client MAY ignore these preferences.
 */
export interface ModelPreferences {
  /**
   * How much to prioritize cost when selecting a model. A value of 0 means cost
   * is not important, while a value of 1 means cost is the most important
   * factor.
   */
  costPriority?: number;
  /**
   * Optional hints to use for model selection.
   *
   * If multiple hints are specified, the client MUST evaluate them in order
   * (such that the first match is taken).
   *
   * The client SHOULD prioritize these hints over the numeric priorities, but
   * MAY still use the priorities to select from ambiguous matches.
   */
  hints?: ModelHint[];
  /**
   * How much to prioritize intelligence and capabilities when selecting a
   * model. A value of 0 means intelligence is not important, while a value of 1
   * means intelligence is the most important factor.
   */
  intelligencePriority?: number;
  /**
   * How much to prioritize sampling speed (latency) when selecting a model. A
   * value of 0 means speed is not important, while a value of 1 means speed is
   * the most important factor.
   */
  speedPriority?: number;
}
/**
 * Hints to use for model selection.
 *
 * Keys not declared here are currently left unspecified by the spec and are up
 * to the client to interpret.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ModelHint".
 */
export interface ModelHint {
  /**
   * A hint for a model name.
   *
   * The client SHOULD treat this as a substring of a model name; for example:
   *  - `claude-3-5-sonnet` should match `claude-3-5-sonnet-20241022`
   *  - `sonnet` should match `claude-3-5-sonnet-20241022`, `claude-3-sonnet-20240229`, etc.
   *  - `claude` should match any Claude model
   *
   * The client MAY also map the string to a different provider's model name or a different model family, as long as it fills a similar niche; for example:
   *  - `gemini-1.5-flash` could match `claude-3-haiku-20240307`
   */
  name?: string;
}
/**
 * A request from the server to elicit additional information from the user via the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitRequest".
 */
export interface ElicitRequest {
  method: "elicitation/create";
  params: {
    /**
     * The message to present to the user.
     */
    message: string;
    /**
     * A restricted subset of JSON Schema.
     * Only top-level properties are allowed, without nesting.
     */
    requestedSchema: {
      properties: {
        [k: string]: PrimitiveSchemaDefinition;
      };
      required?: string[];
      type: "object";
    };
  };
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "StringSchema".
 */
export interface StringSchema {
  description?: string;
  format?: "date" | "date-time" | "email" | "uri";
  maxLength?: number;
  minLength?: number;
  title?: string;
  type: "string";
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "NumberSchema".
 */
export interface NumberSchema {
  description?: string;
  maximum?: number;
  minimum?: number;
  title?: string;
  type: "integer" | "number";
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "EnumSchema".
 */
export interface EnumSchema {
  description?: string;
  enum: string[];
  enumNames?: string[];
  title?: string;
  type: "string";
}
/**
 * The server's response to a prompts/get request from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "GetPromptResult".
 */
export interface GetPromptResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An optional description for the prompt.
   */
  description?: string;
  messages: PromptMessage[];
}
/**
 * Describes a message returned as part of a prompt.
 *
 * This is similar to `SamplingMessage`, but also supports the embedding of
 * resources from the MCP server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PromptMessage".
 */
export interface PromptMessage {
  content: ContentBlock;
  role: Role;
}
/**
 * After receiving an initialize request from the client, the server sends this response.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InitializeResult".
 */
export interface InitializeResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  capabilities: ServerCapabilities;
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions?: string;
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: string;
  serverInfo: Implementation;
}
/**
 * Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerCapabilities".
 */
export interface ServerCapabilities {
  /**
   * Present if the server supports argument autocompletion suggestions.
   */
  completions?: {
    [k: string]: unknown;
  };
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental?: {
    [k: string]: {
      [k: string]: unknown;
    };
  };
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging?: {
    [k: string]: unknown;
  };
  /**
   * Present if the server offers any prompt templates.
   */
  prompts?: {
    /**
     * Whether this server supports notifications for changes to the prompt list.
     */
    listChanged?: boolean;
  };
  /**
   * Present if the server offers any resources to read.
   */
  resources?: {
    /**
     * Whether this server supports notifications for changes to the resource list.
     */
    listChanged?: boolean;
    /**
     * Whether this server supports subscribing to resource updates.
     */
    subscribe?: boolean;
  };
  /**
   * Present if the server offers any tools to call.
   */
  tools?: {
    /**
     * Whether this server supports notifications for changes to the tool list.
     */
    listChanged?: boolean;
  };
}
/**
 * A response to a request that indicates an error occurred.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCError".
 */
export interface JSONRPCError {
  error: {
    /**
     * The error type that occurred.
     */
    code: number;
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data?: {
      [k: string]: unknown;
    };
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: string;
  };
  id: RequestId;
  jsonrpc: "2.0";
}
/**
 * A request that expects a response.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCRequest".
 */
export interface JSONRPCRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: string;
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      /**
       * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
       */
      progressToken?: string | number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * A notification which does not expect a response.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCNotification".
 */
export interface JSONRPCNotification {
  jsonrpc: "2.0";
  method: string;
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * A successful (non-error) response to a request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCResponse".
 */
export interface JSONRPCResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: Result;
}
/**
 * The server's response to a prompts/list request from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListPromptsResult".
 */
export interface ListPromptsResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  prompts: Prompt[];
}
/**
 * A prompt or prompt template that the server offers.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Prompt".
 */
export interface Prompt {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments?: PromptArgument[];
  /**
   * An optional description of what this prompt provides
   */
  description?: string;
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
}
/**
 * Describes an argument that a prompt can accept.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PromptArgument".
 */
export interface PromptArgument {
  /**
   * A human-readable description of the argument.
   */
  description?: string;
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Whether this argument must be provided.
   */
  required?: boolean;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
}
/**
 * The server's response to a resources/templates/list request from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourceTemplatesResult".
 */
export interface ListResourceTemplatesResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  resourceTemplates: ResourceTemplate[];
}
/**
 * A template description for resources available on the server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceTemplate".
 */
export interface ResourceTemplate {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations6;
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType?: string;
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: string;
}
/**
 * Optional annotations for the client.
 */
export interface Annotations6 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * The server's response to a resources/list request from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourcesResult".
 */
export interface ListResourcesResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  resources: Resource[];
}
/**
 * A known resource that the server is capable of reading.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Resource".
 */
export interface Resource {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: Annotations7;
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * The MIME type of this resource, if known.
   */
  mimeType?: string;
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
   *
   * This can be used by Hosts to display file sizes and estimate context window usage.
   */
  size?: number;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  /**
   * The URI of this resource.
   */
  uri: string;
}
/**
 * Optional annotations for the client.
 */
export interface Annotations7 {
  /**
   * Describes who the intended customer of this object or data is.
   *
   * It can include multiple entries to indicate content useful for multiple audiences (e.g., `["user", "assistant"]`).
   */
  audience?: Role[];
  /**
   * The moment the resource was last modified, as an ISO 8601 formatted string.
   *
   * Should be an ISO 8601 formatted string (e.g., "2025-01-12T15:00:58Z").
   *
   * Examples: last activity timestamp in an open file, timestamp when the resource
   * was attached, etc.
   */
  lastModified?: string;
  /**
   * Describes how important this data is for operating the server.
   *
   * A value of 1 means "most important," and indicates that the data is
   * effectively required, while 0 means "least important," and indicates that
   * the data is entirely optional.
   */
  priority?: number;
}
/**
 * Sent from the server to request a list of root URIs from the client. Roots allow
 * servers to ask for specific directories or files to operate on. A common example
 * for roots is providing a set of repositories or directories a server should operate
 * on.
 *
 * This request is typically used when the server needs to understand the file system
 * structure or access specific locations that the client has permission to read from.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListRootsRequest".
 */
export interface ListRootsRequest {
  method: "roots/list";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      /**
       * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
       */
      progressToken?: string | number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * The server's response to a tools/list request from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListToolsResult".
 */
export interface ListToolsResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  tools: Tool[];
}
/**
 * Definition for a tool the client can call.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Tool".
 */
export interface Tool {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  annotations?: ToolAnnotations;
  /**
   * A human-readable description of the tool.
   *
   * This can be used by clients to improve the LLM's understanding of available tools. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * A JSON Schema object defining the expected parameters for the tool.
   */
  inputSchema: {
    properties?: {
      [k: string]: {
        [k: string]: unknown;
      };
    };
    required?: string[];
    type: "object";
  };
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * An optional JSON Schema object defining the structure of the tool's output returned in
   * the structuredContent field of a CallToolResult.
   */
  outputSchema?: {
    properties?: {
      [k: string]: {
        [k: string]: unknown;
      };
    };
    required?: string[];
    type: "object";
  };
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
}
/**
 * Optional additional tool information.
 *
 * Display name precedence order is: title, annotations.title, then name.
 */
export interface ToolAnnotations {
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint?: boolean;
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint?: boolean;
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint?: boolean;
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint?: boolean;
  /**
   * A human-readable title for the tool.
   */
  title?: string;
}
/**
 * Notification of a log message passed from server to client. If no logging/setLevel request has been sent from the client, the server MAY decide which messages to send automatically.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "LoggingMessageNotification".
 */
export interface LoggingMessageNotification {
  method: "notifications/message";
  params: {
    /**
     * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
     */
    data: {
      [k: string]: unknown;
    };
    /**
     * The severity of this log message.
     */
    level: "alert" | "critical" | "debug" | "emergency" | "error" | "info" | "notice" | "warning";
    /**
     * An optional name of the logger issuing this message.
     */
    logger?: string;
  };
}
/**
 * The server's preferences for model selection, requested of the client during sampling.
 *
 * Because LLMs can vary along multiple dimensions, choosing the "best" model is
 * rarely straightforward.  Different models excel in different areas—some are
 * faster but less capable, others are more capable but more expensive, and so
 * on. This interface allows servers to express their priorities across multiple
 * dimensions to help clients make an appropriate selection for their use case.
 *
 * These preferences are always advisory. The client MAY ignore them. It is also
 * up to the client to decide how to interpret these preferences and how to
 * balance them against other considerations.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ModelPreferences".
 */
export interface ModelPreferences1 {
  /**
   * How much to prioritize cost when selecting a model. A value of 0 means cost
   * is not important, while a value of 1 means cost is the most important
   * factor.
   */
  costPriority?: number;
  /**
   * Optional hints to use for model selection.
   *
   * If multiple hints are specified, the client MUST evaluate them in order
   * (such that the first match is taken).
   *
   * The client SHOULD prioritize these hints over the numeric priorities, but
   * MAY still use the priorities to select from ambiguous matches.
   */
  hints?: ModelHint[];
  /**
   * How much to prioritize intelligence and capabilities when selecting a
   * model. A value of 0 means intelligence is not important, while a value of 1
   * means intelligence is the most important factor.
   */
  intelligencePriority?: number;
  /**
   * How much to prioritize sampling speed (latency) when selecting a model. A
   * value of 0 means speed is not important, while a value of 1 means speed is
   * the most important factor.
   */
  speedPriority?: number;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Notification".
 */
export interface Notification {
  method: string;
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PaginatedRequest".
 */
export interface PaginatedRequest {
  method: string;
  params?: {
    /**
     * An opaque token representing the current pagination position.
     * If provided, the server should return results starting after this cursor.
     */
    cursor?: string;
  };
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PaginatedResult".
 */
export interface PaginatedResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
}
/**
 * An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This may be issued by servers without any previous subscription from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PromptListChangedNotification".
 */
export interface PromptListChangedNotification {
  method: "notifications/prompts/list_changed";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * The server's response to a resources/read request from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ReadResourceResult".
 */
export interface ReadResourceResult {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  contents: (TextResourceContents | BlobResourceContents)[];
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Request".
 */
export interface Request {
  method: string;
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      /**
       * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
       */
      progressToken?: string | number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * The contents of a specific resource or sub-resource.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceContents".
 */
export interface ResourceContents {
  /**
   * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
   */
  _meta?: {
    [k: string]: unknown;
  };
  /**
   * The MIME type of this resource, if known.
   */
  mimeType?: string;
  /**
   * The URI of this resource.
   */
  uri: string;
}
/**
 * An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This may be issued by servers without any previous subscription from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceListChangedNotification".
 */
export interface ResourceListChangedNotification {
  method: "notifications/resources/list_changed";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * A notification from the server to the client, informing it that a resource has changed and may need to be read again. This should only be sent if the client previously sent a resources/subscribe request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceUpdatedNotification".
 */
export interface ResourceUpdatedNotification {
  method: "notifications/resources/updated";
  params: {
    /**
     * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
     */
    uri: string;
  };
}
/**
 * An optional notification from the server to the client, informing it that the list of tools it offers has changed. This may be issued by servers without any previous subscription from the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ToolListChangedNotification".
 */
export interface ToolListChangedNotification {
  method: "notifications/tools/list_changed";
  params?: {
    /**
     * See [General fields: `_meta`](/specification/2025-06-18/basic/index#meta) for notes on `_meta` usage.
     */
    _meta?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
}
/**
 * Additional properties describing a Tool to clients.
 *
 * NOTE: all properties in ToolAnnotations are **hints**.
 * They are not guaranteed to provide a faithful description of
 * tool behavior (including descriptive properties like `title`).
 *
 * Clients should never make tool use decisions based on ToolAnnotations
 * received from untrusted servers.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ToolAnnotations".
 */
export interface ToolAnnotations1 {
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint?: boolean;
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint?: boolean;
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint?: boolean;
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint?: boolean;
  /**
   * A human-readable title for the tool.
   */
  title?: string;
}
