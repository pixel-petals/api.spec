/**
 * Mcp — generated from the vendored JSON Schema.
 *
 * mcp draft
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
 * A uniquely identifying ID for a request in JSON-RPC.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "RequestId".
 */
export type RequestId = string | number;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONValue".
 */
export type JSONValue = JSONObject | JSONValue[] | (string | number | boolean);
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InputResponse".
 */
export type InputResponse = CreateMessageResult | ListRootsResult | ElicitResult;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ContentBlock".
 */
export type ContentBlock = TextContent | ImageContent | AudioContent | ResourceLink | EmbeddedResource;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SamplingMessageContentBlock".
 */
export type SamplingMessageContentBlock =
  TextContent | ImageContent | AudioContent | ToolUseContent | ToolResultContent;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InputRequest".
 */
export type InputRequest = CreateMessageRequest | ListRootsRequest | ElicitRequest;
/**
 * The parameters for a request to elicit additional information from the user via the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitRequestParams".
 */
export type ElicitRequestParams = ElicitRequestFormParams | ElicitRequestURLParams;
/**
 * Restricted schema definitions that only allow primitive types
 * without nested objects or arrays.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PrimitiveSchemaDefinition".
 */
export type PrimitiveSchemaDefinition =
  | StringSchema
  | NumberSchema
  | BooleanSchema
  | UntitledSingleSelectEnumSchema
  | TitledSingleSelectEnumSchema
  | UntitledMultiSelectEnumSchema
  | TitledMultiSelectEnumSchema
  | LegacyTitledEnumSchema;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientRequest".
 */
export type ClientRequest =
  | DiscoverRequest
  | ListResourcesRequest
  | ListResourceTemplatesRequest
  | ReadResourceRequest
  | SubscriptionsListenRequest
  | ListPromptsRequest
  | GetPromptRequest
  | ListToolsRequest
  | CallToolRequest
  | CompleteRequest;
/**
 * An opaque token used to represent a cursor for pagination.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Cursor".
 */
export type Cursor = string;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "EnumSchema".
 */
export type EnumSchema =
  | UntitledSingleSelectEnumSchema
  | TitledSingleSelectEnumSchema
  | UntitledMultiSelectEnumSchema
  | TitledMultiSelectEnumSchema
  | LegacyTitledEnumSchema;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONArray".
 */
export type JSONArray = JSONValue[];
/**
 * Refers to any valid JSON-RPC object that can be decoded off the wire, or encoded to be sent.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCMessage".
 */
export type JSONRPCMessage = JSONRPCRequest | JSONRPCNotification | JSONRPCResultResponse | JSONRPCErrorResponse;
/**
 * A response to a request, containing either the result or error.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCResponse".
 */
export type JSONRPCResponse = JSONRPCResultResponse | JSONRPCErrorResponse;
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
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "MultiSelectEnumSchema".
 */
export type MultiSelectEnumSchema = UntitledMultiSelectEnumSchema | TitledMultiSelectEnumSchema;
/**
 * A progress token, used to associate progress notifications with the original request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ProgressToken".
 */
export type ProgressToken = string | number;
/**
 * Indicates the type of a {@link Result} object, allowing the client to
 * determine how to parse the response.
 *
 * complete - the request completed successfully and the result contains the final content.
 * input_required - the request requires additional input and the result contains an {@link InputRequiredResult} object with instructions for the client to provide additional input before retrying the original request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResultType".
 */
export type ResultType = string;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerNotification".
 */
export type ServerNotification =
  | CancelledNotification
  | ProgressNotification
  | ResourceListChangedNotification
  | SubscriptionsAcknowledgedNotification
  | ResourceUpdatedNotification
  | PromptListChangedNotification
  | ToolListChangedNotification
  | LoggingMessageNotification;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerResult".
 */
export type ServerResult =
  | Result2
  | InputRequiredResult
  | DiscoverResult
  | ListResourcesResult
  | ListResourceTemplatesResult
  | ReadResourceResult
  | SubscriptionsListenResult
  | ListPromptsResult
  | GetPromptResult
  | ListToolsResult
  | CallToolResult
  | CompleteResult;
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SingleSelectEnumSchema".
 */
export type SingleSelectEnumSchema = UntitledSingleSelectEnumSchema | TitledSingleSelectEnumSchema;

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
   * Describes who the intended audience of this object or data is.
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
  _meta?: MetaObject;
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
 * Represents the contents of a `_meta` field, which clients and servers use to attach additional metadata to their interactions.
 *
 * Certain key names are reserved by MCP for protocol-level metadata; implementations MUST NOT make assumptions about values at these keys. Additionally, specific schema definitions may reserve particular names for purpose-specific metadata, as declared in those definitions.
 *
 * Valid keys have two segments:
 *
 * **Prefix:**
 * - Optional — if specified, MUST be a series of _labels_ separated by dots (`.`), followed by a slash (`/`).
 * - Labels MUST start with a letter and end with a letter or digit. Interior characters may be letters, digits, or hyphens (`-`).
 * - Implementations SHOULD use reverse DNS notation (e.g., `com.example/` rather than `example.com/`).
 * - Any prefix where the second label is `modelcontextprotocol` or `mcp` is **reserved** for MCP use. For example: `io.modelcontextprotocol/`, `dev.mcp/`, `org.modelcontextprotocol.api/`, and `com.mcp.tools/` are all reserved. However, `com.example.mcp/` is NOT reserved, as the second label is `example`.
 *
 * **Name:**
 * - Unless empty, MUST start and end with an alphanumeric character (`[a-z0-9A-Z]`).
 * - Interior characters may be alphanumeric, hyphens (`-`), underscores (`_`), or dots (`.`).
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "MetaObject".
 */
export interface MetaObject {}
/**
 * Optional annotations for the client.
 */
export interface Annotations1 {
  /**
   * Describes who the intended audience of this object or data is.
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
   * If not provided, the name should be used for display (except for {@link Tool},
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
  _meta?: MetaObject;
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
 * A result that supports a time-to-live (TTL) hint for client-side caching.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CacheableResult".
 */
export interface CacheableResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * Extends {@link MetaObject} with additional result-specific fields. All key naming rules from `MetaObject` apply.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResultMetaObject".
 */
export interface ResultMetaObject {
  "io.modelcontextprotocol/serverInfo"?: Implementation;
}
/**
 * Identifies the server software producing the response. Servers SHOULD
 * include this field on every response unless specifically configured not
 * to do so.
 *
 * The {@link Implementation} schema requires `name` and `version`; other
 * fields are optional.
 *
 * The value is self-reported by the server and is not verified by the
 * protocol. It is intended for display, logging, and debugging. Clients
 * SHOULD NOT use it to change their behavior, and SHOULD NOT rely on it for
 * security decisions.
 */
export interface Implementation {
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for {@link Tool},
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  /**
   * The version of this implementation.
   */
  version: string;
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl?: string;
}
/**
 * An optionally-sized icon that can be displayed in a user interface.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Icon".
 */
export interface Icon {
  /**
   * Optional MIME type override if the source MIME type is missing or generic.
   * For example: `"image/png"`, `"image/jpeg"`, or `"image/svg+xml"`.
   */
  mimeType?: string;
  /**
   * Optional array of strings that specify sizes at which the icon can be used.
   * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
   *
   * If not provided, the client should assume that the icon can be used at any size.
   */
  sizes?: string[];
  /**
   * A standard URI pointing to an icon resource. May be an HTTP/HTTPS URL or a
   * `data:` URI with Base64-encoded image data.
   *
   * Consumers SHOULD take steps to ensure URLs serving icons are from the
   * same domain as the client/server or a trusted domain.
   *
   * Consumers SHOULD take appropriate precautions when consuming SVGs as they can contain
   * executable JavaScript.
   */
  src: string;
  /**
   * Optional specifier for the theme this icon is designed for. `"light"` indicates
   * the icon is designed to be used with a light background, and `"dark"` indicates
   * the icon is designed to be used with a dark background.
   *
   * If not provided, the client should assume the icon can be used with any theme.
   */
  theme?: "dark" | "light";
}
/**
 * Used by the client to invoke a tool provided by the server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CallToolRequest".
 */
export interface CallToolRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "tools/call";
  params: CallToolRequestParams;
}
/**
 * Parameters for a `tools/call` request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CallToolRequestParams".
 */
export interface CallToolRequestParams {
  _meta: RequestMetaObject;
  /**
   * Arguments to use for the tool call.
   */
  arguments?: {
    [k: string]: unknown;
  };
  inputResponses?: InputResponses;
  /**
   * The name of the tool.
   */
  name: string;
  requestState?: string;
}
/**
 * Extends {@link MetaObject} with additional request-specific fields. All key naming rules from `MetaObject` apply.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "RequestMetaObject".
 */
export interface RequestMetaObject {
  "io.modelcontextprotocol/clientCapabilities": ClientCapabilities;
  "io.modelcontextprotocol/clientInfo"?: Implementation1;
  /**
   * The desired log level for this request. Optional.
   *
   * If absent, the server MUST NOT send any {@link LoggingMessageNotificationnotifications/message}
   * notifications for this request. The client opts in to log messages by
   * explicitly setting a level. Replaces the former `logging/setLevel` RPC.
   */
  "io.modelcontextprotocol/logLevel"?:
    "alert" | "critical" | "debug" | "emergency" | "error" | "info" | "notice" | "warning";
  /**
   * The MCP Protocol Version being used for this request. Required.
   *
   * For the HTTP transport, this value MUST match the `MCP-Protocol-Version`
   * header; otherwise the server MUST return a `400 Bad Request`. If the
   * server does not support the requested version, it MUST return an
   * {@link UnsupportedProtocolVersionError}.
   */
  "io.modelcontextprotocol/protocolVersion": string;
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by {@link ProgressNotificationnotifications/progress}). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken?: string | number;
}
/**
 * The client's capabilities for this specific request. Required.
 *
 * Capabilities are declared per-request rather than once at initialization;
 * an empty object means the client supports no optional capabilities.
 * Servers MUST NOT infer capabilities from prior requests.
 */
export interface ClientCapabilities {
  /**
   * Present if the client supports elicitation from the server.
   */
  elicitation?: {
    form?: JSONObject;
    url?: JSONObject;
  };
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental?: {
    [k: string]: JSONObject;
  };
  /**
   * Optional MCP extensions that the client supports. Keys are extension identifiers
   * (e.g., "io.modelcontextprotocol/oauth-client-credentials"), and values are
   * per-extension settings objects. An empty object indicates support with no settings.
   *
   * Keys MUST follow the {@link MetaObject`_meta` key naming rules}, with a
   * mandatory prefix.
   */
  extensions?: {
    [k: string]: JSONObject;
  };
  /**
   * Present if the client supports listing roots.
   */
  roots?: {};
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling?: {
    context?: JSONObject1;
    tools?: JSONObject2;
  };
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONObject".
 */
export interface JSONObject {
  [k: string]: JSONValue;
}
/**
 * Whether the client supports context inclusion via `includeContext` parameter.
 * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
 */
export interface JSONObject1 {
  [k: string]: JSONValue;
}
/**
 * Whether the client supports tool use via `tools` and `toolChoice` parameters.
 */
export interface JSONObject2 {
  [k: string]: JSONValue;
}
/**
 * Identifies the client software making the request. Clients SHOULD
 * include this field on every request unless specifically configured not
 * to do so.
 *
 * The {@link Implementation} schema requires `name` and `version`; other
 * fields are optional.
 *
 * The value is self-reported by the client and is not verified by the
 * protocol. It is intended for display, logging, and debugging. Servers
 * SHOULD NOT use it to change their behavior, and SHOULD NOT rely on it for
 * security decisions.
 */
export interface Implementation1 {
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for {@link Tool},
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  /**
   * The version of this implementation.
   */
  version: string;
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl?: string;
}
/**
 * A map of client responses to server-initiated requests.
 * Keys correspond to the keys in the {@link InputRequests} map;
 * values are the client's result for each request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InputResponses".
 */
export interface InputResponses {
  [k: string]: InputResponse;
}
/**
 * The result returned by the client for a {@link CreateMessageRequestsampling/createMessage} request.
 * The client should inform the user before returning the sampled message, to allow them
 * to inspect the response (human in the loop) and decide whether to allow the server to see it.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CreateMessageResult".
 */
export interface CreateMessageResult {
  _meta?: MetaObject;
  content:
    TextContent | ImageContent | AudioContent | ToolUseContent | ToolResultContent | SamplingMessageContentBlock[];
  /**
   * The name of the model that generated the message.
   */
  model: string;
  role: Role;
  /**
   * The reason why sampling stopped, if known.
   *
   * Standard values:
   * - `"endTurn"`: Natural end of the assistant's turn
   * - `"stopSequence"`: A stop sequence was encountered
   * - `"maxTokens"`: Maximum token limit was reached
   * - `"toolUse"`: The model wants to use one or more tools
   *
   * This field is an open string to allow for provider-specific stop reasons.
   */
  stopReason?: string;
}
/**
 * Text provided to or from an LLM.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "TextContent".
 */
export interface TextContent {
  _meta?: MetaObject;
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
   * Describes who the intended audience of this object or data is.
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
  _meta?: MetaObject;
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
   * Describes who the intended audience of this object or data is.
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
 * A request from the assistant to call a tool.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ToolUseContent".
 */
export interface ToolUseContent {
  _meta?: MetaObject1;
  /**
   * A unique identifier for this tool use.
   *
   * This ID is used to match tool results to their corresponding tool uses.
   */
  id: string;
  /**
   * The arguments to pass to the tool, conforming to the tool's input schema.
   */
  input: {
    [k: string]: unknown;
  };
  /**
   * The name of the tool to call.
   */
  name: string;
  type: "tool_use";
}
/**
 * Represents the contents of a `_meta` field, which clients and servers use to attach additional metadata to their interactions.
 *
 * Certain key names are reserved by MCP for protocol-level metadata; implementations MUST NOT make assumptions about values at these keys. Additionally, specific schema definitions may reserve particular names for purpose-specific metadata, as declared in those definitions.
 *
 * Valid keys have two segments:
 *
 * **Prefix:**
 * - Optional — if specified, MUST be a series of _labels_ separated by dots (`.`), followed by a slash (`/`).
 * - Labels MUST start with a letter and end with a letter or digit. Interior characters may be letters, digits, or hyphens (`-`).
 * - Implementations SHOULD use reverse DNS notation (e.g., `com.example/` rather than `example.com/`).
 * - Any prefix where the second label is `modelcontextprotocol` or `mcp` is **reserved** for MCP use. For example: `io.modelcontextprotocol/`, `dev.mcp/`, `org.modelcontextprotocol.api/`, and `com.mcp.tools/` are all reserved. However, `com.example.mcp/` is NOT reserved, as the second label is `example`.
 *
 * **Name:**
 * - Unless empty, MUST start and end with an alphanumeric character (`[a-z0-9A-Z]`).
 * - Interior characters may be alphanumeric, hyphens (`-`), underscores (`_`), or dots (`.`).
 */
export interface MetaObject1 {}
/**
 * The result of a tool use, provided by the user back to the assistant.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ToolResultContent".
 */
export interface ToolResultContent {
  _meta?: MetaObject2;
  /**
   * The unstructured result content of the tool use.
   *
   * This has the same format as {@link CallToolResult.content} and can include text, images,
   * audio, resource links, and embedded resources.
   */
  content: ContentBlock[];
  /**
   * Whether the tool use resulted in an error.
   *
   * If true, the content typically describes the error that occurred.
   * Default: false
   */
  isError?: boolean;
  /**
   * An optional structured result value.
   *
   * This can be any JSON value (object, array, string, number, boolean, or null).
   * If the tool defined an {@link Tool.outputSchema}, this SHOULD conform to that schema.
   */
  structuredContent?: {
    [k: string]: unknown;
  };
  /**
   * The ID of the tool use this result corresponds to.
   *
   * This MUST match the ID from a previous {@link ToolUseContent}.
   */
  toolUseId: string;
  type: "tool_result";
}
/**
 * Represents the contents of a `_meta` field, which clients and servers use to attach additional metadata to their interactions.
 *
 * Certain key names are reserved by MCP for protocol-level metadata; implementations MUST NOT make assumptions about values at these keys. Additionally, specific schema definitions may reserve particular names for purpose-specific metadata, as declared in those definitions.
 *
 * Valid keys have two segments:
 *
 * **Prefix:**
 * - Optional — if specified, MUST be a series of _labels_ separated by dots (`.`), followed by a slash (`/`).
 * - Labels MUST start with a letter and end with a letter or digit. Interior characters may be letters, digits, or hyphens (`-`).
 * - Implementations SHOULD use reverse DNS notation (e.g., `com.example/` rather than `example.com/`).
 * - Any prefix where the second label is `modelcontextprotocol` or `mcp` is **reserved** for MCP use. For example: `io.modelcontextprotocol/`, `dev.mcp/`, `org.modelcontextprotocol.api/`, and `com.mcp.tools/` are all reserved. However, `com.example.mcp/` is NOT reserved, as the second label is `example`.
 *
 * **Name:**
 * - Unless empty, MUST start and end with an alphanumeric character (`[a-z0-9A-Z]`).
 * - Interior characters may be alphanumeric, hyphens (`-`), underscores (`_`), or dots (`.`).
 */
export interface MetaObject2 {}
/**
 * A resource that the server is capable of reading, included in a prompt or tool call result.
 *
 * Note: resource links returned by tools are not guaranteed to appear in the results of {@link ListResourcesRequestresources/list} requests.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceLink".
 */
export interface ResourceLink {
  _meta?: MetaObject;
  annotations?: Annotations4;
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
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
   * If not provided, the name should be used for display (except for {@link Tool},
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
   * Describes who the intended audience of this object or data is.
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
  _meta?: MetaObject;
  annotations?: Annotations5;
  resource: TextResourceContents | BlobResourceContents;
  type: "resource";
}
/**
 * Optional annotations for the client.
 */
export interface Annotations5 {
  /**
   * Describes who the intended audience of this object or data is.
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
  _meta?: MetaObject;
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
 * The result returned by the client for a {@link ListRootsRequestroots/list} request.
 * This result contains an array of {@link Root} objects, each representing a root directory
 * or file that the server can operate on.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListRootsResult".
 */
export interface ListRootsResult {
  roots: Root[];
}
/**
 * Represents a root directory or file that the server can operate on.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Root".
 */
export interface Root {
  _meta?: MetaObject;
  /**
   * An optional name for the root. This can be used to provide a human-readable
   * identifier for the root, which may be useful for display purposes or for
   * referencing the root in other parts of the application.
   */
  name?: string;
  /**
   * The URI identifying the root. This *must* start with `file://` for now.
   * This restriction may be relaxed in future versions of the protocol to allow
   * other URI schemes.
   */
  uri: string;
}
/**
 * The result returned by the client for an {@link ElicitRequestelicitation/create} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitResult".
 */
export interface ElicitResult {
  /**
   * The user action in response to the elicitation.
   * - `"accept"`: User submitted the form/confirmed the action
   * - `"decline"`: User explicitly declined the action
   * - `"cancel"`: User dismissed without making an explicit choice
   */
  action: "accept" | "cancel" | "decline";
  /**
   * The submitted form data, only present when action is `"accept"` and mode was `"form"`.
   * Contains values matching the requested schema.
   * Omitted for out-of-band mode responses.
   */
  content?: {
    [k: string]: string[] | (string | number | boolean);
  };
}
/**
 * The result returned by the server for a {@link CallToolRequesttools/call} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CallToolResult".
 */
export interface CallToolResult {
  _meta?: ResultMetaObject;
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
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * An optional JSON value that represents the structured result of the tool call.
   *
   * This can be any JSON value (object, array, string, number, boolean, or null)
   * that conforms to the tool's outputSchema if one is defined.
   */
  structuredContent?: {
    [k: string]: unknown;
  };
}
/**
 * A successful response from the server for a {@link CallToolRequesttools/call} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CallToolResultResponse".
 */
export interface CallToolResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: InputRequiredResult | CallToolResult;
}
/**
 * An InputRequiredResult sent by the server to indicate that additional input is needed
 * before the request can be completed.
 *
 * At least one of `inputRequests` or `requestState` MUST be present.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InputRequiredResult".
 */
export interface InputRequiredResult {
  _meta?: ResultMetaObject;
  inputRequests?: InputRequests;
  requestState?: string;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
}
/**
 * A map of server-initiated requests that the client must fulfill.
 * Keys are server-assigned identifiers; values are the request objects.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InputRequests".
 */
export interface InputRequests {
  [k: string]: InputRequest;
}
/**
 * A request from the server to sample an LLM via the client. The client has full discretion over which model to select. The client should also inform the user before beginning sampling, to allow them to inspect the request (human in the loop) and decide whether to approve it.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CreateMessageRequest".
 */
export interface CreateMessageRequest {
  method: "sampling/createMessage";
  params: CreateMessageRequestParams;
}
/**
 * Parameters for a `sampling/createMessage` request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CreateMessageRequestParams".
 */
export interface CreateMessageRequestParams {
  /**
   * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
   * The client MAY ignore this request.
   *
   * Default is `"none"`. The values `"thisServer"` and `"allServers"` are deprecated (SEP-2596): servers SHOULD
   * omit this field or use `"none"`, and SHOULD only use the deprecated values if the client declares
   * {@link ClientCapabilities.sampling.context}.
   */
  includeContext?: "allServers" | "none" | "thisServer";
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: number;
  messages: SamplingMessage[];
  metadata?: JSONObject3;
  modelPreferences?: ModelPreferences;
  stopSequences?: string[];
  /**
   * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
   */
  systemPrompt?: string;
  temperature?: number;
  toolChoice?: ToolChoice;
  /**
   * Tools that the model may use during generation.
   * The client MUST return an error if this field is provided but {@link ClientCapabilities.sampling.tools} is not declared.
   */
  tools?: Tool[];
}
/**
 * Describes a message issued to or received from an LLM API.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SamplingMessage".
 */
export interface SamplingMessage {
  _meta?: MetaObject;
  content:
    TextContent | ImageContent | AudioContent | ToolUseContent | ToolResultContent | SamplingMessageContentBlock[];
  role: Role;
}
/**
 * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
 */
export interface JSONObject3 {
  [k: string]: JSONValue;
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
 * Controls how the model uses tools.
 * The client MUST return an error if this field is provided but {@link ClientCapabilities.sampling.tools} is not declared.
 * Default is `{ mode: "auto" }`.
 */
export interface ToolChoice {
  /**
   * Controls the tool use ability of the model:
   * - `"auto"`: Model decides whether to use tools (default)
   * - `"required"`: Model MUST use at least one tool before completing
   * - `"none"`: Model MUST NOT use any tools
   */
  mode?: "auto" | "none" | "required";
}
/**
 * Definition for a tool the client can call.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Tool".
 */
export interface Tool {
  _meta?: MetaObject;
  annotations?: ToolAnnotations;
  /**
   * A human-readable description of the tool.
   *
   * This can be used by clients to improve the LLM's understanding of available tools. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
  /**
   * A JSON Schema object defining the expected parameters for the tool.
   *
   * Tool arguments are always JSON objects, so `type: "object"` is required at the root.
   * Beyond that, any JSON Schema 2020-12 keyword may appear alongside `type` — including
   * composition keywords (`oneOf`, `anyOf`, `allOf`, `not`), conditional keywords
   * (`if`/`then`/`else`), reference keywords (`$ref`, `$defs`, `$anchor`), and any other
   * standard validation or annotation keywords.
   *
   * Property schemas may carry an `x-mcp-header` annotation to mirror the
   * argument value into an HTTP header on the Streamable HTTP transport. See
   * the Streamable HTTP transport specification for the validity and
   * extraction rules.
   *
   * Defaults to JSON Schema 2020-12 when no explicit `$schema` is provided.
   */
  inputSchema: {
    $schema?: string;
    type: "object";
    [k: string]: unknown;
  };
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * An optional JSON Schema object defining the structure of the tool's output returned in
   * the structuredContent field of a {@link CallToolResult}. This can be any valid JSON Schema 2020-12.
   *
   * Defaults to JSON Schema 2020-12 when no explicit `$schema` is provided.
   */
  outputSchema?: {
    $schema?: string;
    [k: string]: unknown;
  };
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for {@link Tool},
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
}
/**
 * Optional additional tool information.
 *
 * Display name precedence order is: `title`, `annotations.title`, then `name`.
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
   * will have no additional effect on its environment.
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
    _meta?: MetaObject;
  };
}
/**
 * A request from the server to elicit additional information from the user via the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitRequest".
 */
export interface ElicitRequest {
  method: "elicitation/create";
  params: ElicitRequestParams;
}
/**
 * The parameters for a request to elicit non-sensitive information from the user via a form in the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitRequestFormParams".
 */
export interface ElicitRequestFormParams {
  /**
   * The message to present to the user describing what information is being requested.
   */
  message: string;
  /**
   * The elicitation mode.
   */
  mode?: "form";
  /**
   * A restricted subset of JSON Schema.
   * Only top-level properties are allowed, without nesting.
   */
  requestedSchema: {
    $schema?: string;
    properties: {
      [k: string]: PrimitiveSchemaDefinition;
    };
    required?: string[];
    type: "object";
  };
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "StringSchema".
 */
export interface StringSchema {
  default?: string;
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
  default?: number;
  description?: string;
  maximum?: number;
  minimum?: number;
  title?: string;
  type: "integer" | "number";
}
/**
 * Schema for single-selection enumeration without display titles for options.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "UntitledSingleSelectEnumSchema".
 */
export interface UntitledSingleSelectEnumSchema {
  /**
   * Optional default value.
   */
  default?: string;
  /**
   * Optional description for the enum field.
   */
  description?: string;
  /**
   * Array of enum values to choose from.
   */
  enum: string[];
  /**
   * Optional title for the enum field.
   */
  title?: string;
  type: "string";
}
/**
 * Schema for single-selection enumeration with display titles for each option.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "TitledSingleSelectEnumSchema".
 */
export interface TitledSingleSelectEnumSchema {
  /**
   * Optional default value.
   */
  default?: string;
  /**
   * Optional description for the enum field.
   */
  description?: string;
  /**
   * Array of enum options with values and display labels.
   */
  oneOf: {
    /**
     * The enum value.
     */
    const: string;
    /**
     * Display label for this option.
     */
    title: string;
  }[];
  /**
   * Optional title for the enum field.
   */
  title?: string;
  type: "string";
}
/**
 * Schema for multiple-selection enumeration without display titles for options.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "UntitledMultiSelectEnumSchema".
 */
export interface UntitledMultiSelectEnumSchema {
  /**
   * Optional default value.
   */
  default?: string[];
  /**
   * Optional description for the enum field.
   */
  description?: string;
  /**
   * Schema for the array items.
   */
  items: {
    /**
     * Array of enum values to choose from.
     */
    enum: string[];
    type: "string";
  };
  /**
   * Maximum number of items to select.
   */
  maxItems?: number;
  /**
   * Minimum number of items to select.
   */
  minItems?: number;
  /**
   * Optional title for the enum field.
   */
  title?: string;
  type: "array";
}
/**
 * Schema for multiple-selection enumeration with display titles for each option.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "TitledMultiSelectEnumSchema".
 */
export interface TitledMultiSelectEnumSchema {
  /**
   * Optional default value.
   */
  default?: string[];
  /**
   * Optional description for the enum field.
   */
  description?: string;
  /**
   * Schema for array items with enum options and display labels.
   */
  items: {
    /**
     * Array of enum options with values and display labels.
     */
    anyOf: {
      /**
       * The constant enum value.
       */
      const: string;
      /**
       * Display title for this option.
       */
      title: string;
    }[];
  };
  /**
   * Maximum number of items to select.
   */
  maxItems?: number;
  /**
   * Minimum number of items to select.
   */
  minItems?: number;
  /**
   * Optional title for the enum field.
   */
  title?: string;
  type: "array";
}
/**
 * Use {@link TitledSingleSelectEnumSchema} instead.
 * This interface will be removed in a future version.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "LegacyTitledEnumSchema".
 */
export interface LegacyTitledEnumSchema {
  default?: string;
  description?: string;
  enum: string[];
  /**
   * (Legacy) Display names for enum values.
   * Non-standard according to JSON schema 2020-12.
   */
  enumNames?: string[];
  title?: string;
  type: "string";
}
/**
 * The parameters for a request to elicit information from the user via a URL in the client.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ElicitRequestURLParams".
 */
export interface ElicitRequestURLParams {
  /**
   * The message to present to the user explaining why the interaction is needed.
   */
  message: string;
  /**
   * The elicitation mode.
   */
  mode: "url";
  /**
   * The URL that the user should navigate to.
   */
  url: string;
}
/**
 * This notification is sent by the client to indicate that it is cancelling a request it previously issued.
 *
 * On stdio, the server also sends this notification, solely to terminate a {@link SubscriptionsListenRequestsubscriptions/listen} stream: it references the ID of the `subscriptions/listen` request that opened the stream. Servers MUST NOT use this notification to cancel any other request.
 *
 * The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
 *
 * This notification indicates that the result will be unused, so any associated processing SHOULD cease.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CancelledNotification".
 */
export interface CancelledNotification {
  jsonrpc: "2.0";
  method: "notifications/cancelled";
  params: CancelledNotificationParams;
}
/**
 * Parameters for a `notifications/cancelled` notification.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CancelledNotificationParams".
 */
export interface CancelledNotificationParams {
  _meta?: NotificationMetaObject;
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason?: string;
  /**
   * A uniquely identifying ID for a request in JSON-RPC.
   */
  requestId: string | number;
}
/**
 * Extends {@link MetaObject} with additional notification-specific fields. All key naming rules from `MetaObject` apply.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "NotificationMetaObject".
 */
export interface NotificationMetaObject {
  /**
   * A uniquely identifying ID for a request in JSON-RPC.
   */
  "io.modelcontextprotocol/subscriptionId"?: string | number;
}
/**
 * Capabilities a client may support. Known capabilities are defined here, in this schema, but this is not a closed set: any client can define its own, additional capabilities.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientCapabilities".
 */
export interface ClientCapabilities1 {
  /**
   * Present if the client supports elicitation from the server.
   */
  elicitation?: {
    form?: JSONObject;
    url?: JSONObject;
  };
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental?: {
    [k: string]: JSONObject;
  };
  /**
   * Optional MCP extensions that the client supports. Keys are extension identifiers
   * (e.g., "io.modelcontextprotocol/oauth-client-credentials"), and values are
   * per-extension settings objects. An empty object indicates support with no settings.
   *
   * Keys MUST follow the {@link MetaObject`_meta` key naming rules}, with a
   * mandatory prefix.
   */
  extensions?: {
    [k: string]: JSONObject;
  };
  /**
   * Present if the client supports listing roots.
   */
  roots?: {};
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling?: {
    context?: JSONObject1;
    tools?: JSONObject2;
  };
}
/**
 * This notification is sent by the client to indicate that it is cancelling a request it previously issued.
 *
 * On stdio, the server also sends this notification, solely to terminate a {@link SubscriptionsListenRequestsubscriptions/listen} stream: it references the ID of the `subscriptions/listen` request that opened the stream. Servers MUST NOT use this notification to cancel any other request.
 *
 * The request SHOULD still be in-flight, but due to communication latency, it is always possible that this notification MAY arrive after the request has already finished.
 *
 * This notification indicates that the result will be unused, so any associated processing SHOULD cease.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientNotification".
 */
export interface ClientNotification {
  jsonrpc: "2.0";
  method: "notifications/cancelled";
  params: CancelledNotificationParams;
}
/**
 * A request from the client asking the server to advertise its supported
 * protocol versions, capabilities, and other metadata. Servers **MUST**
 * implement `server/discover`. Clients **MAY** call it but are not required
 * to — version negotiation can also happen inline via per-request `_meta`.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "DiscoverRequest".
 */
export interface DiscoverRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "server/discover";
  params: RequestParams;
}
/**
 * Common params for any request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "RequestParams".
 */
export interface RequestParams {
  _meta: RequestMetaObject;
}
/**
 * Sent from the client to request a list of resources the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourcesRequest".
 */
export interface ListResourcesRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "resources/list";
  params: PaginatedRequestParams;
}
/**
 * Common params for paginated requests.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PaginatedRequestParams".
 */
export interface PaginatedRequestParams {
  _meta: RequestMetaObject;
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor?: string;
}
/**
 * Sent from the client to request a list of resource templates the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourceTemplatesRequest".
 */
export interface ListResourceTemplatesRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "resources/templates/list";
  params: PaginatedRequestParams;
}
/**
 * Sent from the client to the server, to read a specific resource URI.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ReadResourceRequest".
 */
export interface ReadResourceRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "resources/read";
  params: ReadResourceRequestParams;
}
/**
 * Parameters for a `resources/read` request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ReadResourceRequestParams".
 */
export interface ReadResourceRequestParams {
  _meta: RequestMetaObject;
  inputResponses?: InputResponses;
  requestState?: string;
  /**
   * The URI of the resource. The URI can use any protocol; it is up to the server how to interpret it.
   */
  uri: string;
}
/**
 * Sent from the client to open a long-lived channel for receiving notifications
 * outside the context of a specific request. Replaces the previous HTTP GET
 * endpoint and ensures consistent behavior between HTTP and STDIO.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsListenRequest".
 */
export interface SubscriptionsListenRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "subscriptions/listen";
  params: SubscriptionsListenRequestParams;
}
/**
 * Parameters for a {@link SubscriptionsListenRequestsubscriptions/listen} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsListenRequestParams".
 */
export interface SubscriptionsListenRequestParams {
  _meta: RequestMetaObject;
  notifications: SubscriptionFilter;
}
/**
 * The notifications the client opts in to on this stream. The server
 * **MUST NOT** send notification types the client has not explicitly
 * requested.
 */
export interface SubscriptionFilter {
  /**
   * If true, receive {@link PromptListChangedNotificationnotifications/prompts/list_changed}.
   */
  promptsListChanged?: boolean;
  /**
   * Subscribe to {@link ResourceUpdatedNotificationnotifications/resources/updated} for these resource URIs.
   * Replaces the former `resources/subscribe` RPC.
   */
  resourceSubscriptions?: string[];
  /**
   * If true, receive {@link ResourceListChangedNotificationnotifications/resources/list_changed}.
   */
  resourcesListChanged?: boolean;
  /**
   * If true, receive {@link ToolListChangedNotificationnotifications/tools/list_changed}.
   */
  toolsListChanged?: boolean;
}
/**
 * Sent from the client to request a list of prompts and prompt templates the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListPromptsRequest".
 */
export interface ListPromptsRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "prompts/list";
  params: PaginatedRequestParams;
}
/**
 * Used by the client to get a prompt provided by the server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "GetPromptRequest".
 */
export interface GetPromptRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "prompts/get";
  params: GetPromptRequestParams;
}
/**
 * Parameters for a `prompts/get` request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "GetPromptRequestParams".
 */
export interface GetPromptRequestParams {
  _meta: RequestMetaObject;
  /**
   * Arguments to use for templating the prompt.
   */
  arguments?: {
    [k: string]: string;
  };
  inputResponses?: InputResponses;
  /**
   * The name of the prompt or prompt template.
   */
  name: string;
  requestState?: string;
}
/**
 * Sent from the client to request a list of tools the server has.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListToolsRequest".
 */
export interface ListToolsRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "tools/list";
  params: PaginatedRequestParams;
}
/**
 * A request from the client to the server, to ask for completion options.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CompleteRequest".
 */
export interface CompleteRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: "completion/complete";
  params: CompleteRequestParams;
}
/**
 * Parameters for a `completion/complete` request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CompleteRequestParams".
 */
export interface CompleteRequestParams {
  _meta: RequestMetaObject;
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
   * If not provided, the name should be used for display (except for {@link Tool},
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
 * Common result fields.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ClientResult".
 */
export interface Result {
  _meta?: ResultMetaObject;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  [k: string]: unknown;
}
/**
 * The result returned by the server for a {@link CompleteRequestcompletion/complete} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CompleteResult".
 */
export interface CompleteResult {
  _meta?: ResultMetaObject;
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
     *
     * @maxItems 100
     */
    values: string[];
  };
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
}
/**
 * A successful response from the server for a {@link CompleteRequestcompletion/complete} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "CompleteResultResponse".
 */
export interface CompleteResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: CompleteResult;
}
/**
 * The result returned by the server for a {@link DiscoverRequestserver/discover} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "DiscoverResult".
 */
export interface DiscoverResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  capabilities: ServerCapabilities;
  /**
   * Natural-language guidance describing the server and its features.
   *
   * This can be used by clients to improve an LLM's understanding of
   * available tools (e.g., by including it in a system prompt). It should
   * focus on information that helps the model use the server effectively
   * and should not duplicate information already in tool descriptions.
   */
  instructions?: string;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * MCP Protocol Versions this server supports. The client should choose a
   * version from this list for use in subsequent requests.
   */
  supportedVersions: string[];
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * The capabilities of the server.
 */
export interface ServerCapabilities {
  completions?: JSONObject4;
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental?: {
    [k: string]: JSONObject;
  };
  /**
   * Optional MCP extensions that the server supports. Keys are extension identifiers
   * (e.g., "io.modelcontextprotocol/tasks"), and values are per-extension settings
   * objects. An empty object indicates support with no settings.
   *
   * Keys MUST follow the {@link MetaObject`_meta` key naming rules}, with a
   * mandatory prefix.
   */
  extensions?: {
    [k: string]: JSONObject;
  };
  logging?: JSONObject5;
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
 * Present if the server supports argument autocompletion suggestions.
 */
export interface JSONObject4 {
  [k: string]: JSONValue;
}
/**
 * Present if the server supports sending log messages to the client.
 */
export interface JSONObject5 {
  [k: string]: JSONValue;
}
/**
 * A successful response from the server for a {@link DiscoverRequestserver/discover} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "DiscoverResultResponse".
 */
export interface DiscoverResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: DiscoverResult;
}
/**
 * Common result fields.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "EmptyResult".
 */
export interface Result1 {
  _meta?: ResultMetaObject;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Error".
 */
export interface Error {
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
}
/**
 * The result returned by the server for a {@link GetPromptRequestprompts/get} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "GetPromptResult".
 */
export interface GetPromptResult {
  _meta?: ResultMetaObject;
  /**
   * An optional description for the prompt.
   */
  description?: string;
  messages: PromptMessage[];
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
}
/**
 * Describes a message returned as part of a prompt.
 *
 * This is similar to {@link SamplingMessage}, but also supports the embedding of
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
 * A successful response from the server for a {@link GetPromptRequestprompts/get} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "GetPromptResultResponse".
 */
export interface GetPromptResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: InputRequiredResult | GetPromptResult;
}
/**
 * Returned when a server rejects a request because the values in the HTTP
 * headers do not match the corresponding values in the request body, or
 * because required headers are missing or malformed. For HTTP, the response
 * status code MUST be `400 Bad Request`.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "HeaderMismatchError".
 */
export interface HeaderMismatchError {
  error: Error & {
    code: -32020;
  };
  id?: RequestId;
  jsonrpc: "2.0";
}
/**
 * Base interface to add `icons` property.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Icons".
 */
export interface Icons {
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
}
/**
 * Describes the MCP implementation.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Implementation".
 */
export interface Implementation2 {
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for {@link Tool},
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  /**
   * The version of this implementation.
   */
  version: string;
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl?: string;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InputResponseRequestParams".
 */
export interface InputResponseRequestParams {
  _meta: RequestMetaObject;
  inputResponses?: InputResponses;
  requestState?: string;
}
/**
 * A JSON-RPC error indicating that an internal error occurred on the receiver. This error is returned when the receiver encounters an unexpected condition that prevents it from fulfilling the request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InternalError".
 */
export interface InternalError {
  /**
   * The error type that occurred.
   */
  code: -32603;
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
}
/**
 * A JSON-RPC error indicating that the method parameters are invalid or malformed.
 *
 * In MCP, this error is returned in various contexts when request parameters fail validation:
 *
 * - **Tools**: Unknown tool name or invalid tool arguments
 * - **Prompts**: Unknown prompt name or missing required arguments
 * - **Pagination**: Invalid or expired cursor values
 * - **Logging**: Invalid log level
 * - **Elicitation**: Server requests an elicitation mode not declared in client capabilities
 * - **Sampling**: Missing tool result or tool results mixed with other content
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InvalidParamsError".
 */
export interface InvalidParamsError {
  /**
   * The error type that occurred.
   */
  code: -32602;
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
}
/**
 * A JSON-RPC error indicating that the request is not a valid request object. This error is returned when the message structure does not conform to the JSON-RPC 2.0 specification requirements for a request (e.g., missing required fields like `jsonrpc` or `method`, or using invalid types for these fields).
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "InvalidRequestError".
 */
export interface InvalidRequestError {
  /**
   * The error type that occurred.
   */
  code: -32600;
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
}
/**
 * A response to a request that indicates an error occurred.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCErrorResponse".
 */
export interface JSONRPCErrorResponse {
  error: Error;
  id?: RequestId;
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
    [k: string]: unknown;
  };
}
/**
 * A successful (non-error) response to a request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "JSONRPCResultResponse".
 */
export interface JSONRPCResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: Result2;
}
/**
 * Common result fields.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Result".
 */
export interface Result2 {
  _meta?: ResultMetaObject;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  [k: string]: unknown;
}
/**
 * The result returned by the server for a {@link ListPromptsRequestprompts/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListPromptsResult".
 */
export interface ListPromptsResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  prompts: Prompt[];
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * A prompt or prompt template that the server offers.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Prompt".
 */
export interface Prompt {
  _meta?: MetaObject;
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments?: PromptArgument[];
  /**
   * An optional description of what this prompt provides
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for {@link Tool},
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
   * If not provided, the name should be used for display (except for {@link Tool},
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
}
/**
 * A successful response from the server for a {@link ListPromptsRequestprompts/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListPromptsResultResponse".
 */
export interface ListPromptsResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: ListPromptsResult;
}
/**
 * The result returned by the server for a {@link ListResourceTemplatesRequestresources/templates/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourceTemplatesResult".
 */
export interface ListResourceTemplatesResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  resourceTemplates: ResourceTemplate[];
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * A template description for resources available on the server.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceTemplate".
 */
export interface ResourceTemplate {
  _meta?: MetaObject;
  annotations?: Annotations6;
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
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
   * If not provided, the name should be used for display (except for {@link Tool},
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
   * Describes who the intended audience of this object or data is.
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
 * A successful response from the server for a {@link ListResourceTemplatesRequestresources/templates/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourceTemplatesResultResponse".
 */
export interface ListResourceTemplatesResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: ListResourceTemplatesResult;
}
/**
 * The result returned by the server for a {@link ListResourcesRequestresources/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourcesResult".
 */
export interface ListResourcesResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  resources: Resource[];
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * A known resource that the server is capable of reading.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Resource".
 */
export interface Resource {
  _meta?: MetaObject;
  annotations?: Annotations7;
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
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
   * If not provided, the name should be used for display (except for {@link Tool},
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
   * Describes who the intended audience of this object or data is.
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
 * A successful response from the server for a {@link ListResourcesRequestresources/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListResourcesResultResponse".
 */
export interface ListResourcesResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: ListResourcesResult;
}
/**
 * The result returned by the server for a {@link ListToolsRequesttools/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListToolsResult".
 */
export interface ListToolsResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  tools: Tool[];
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * A successful response from the server for a {@link ListToolsRequesttools/list} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ListToolsResultResponse".
 */
export interface ListToolsResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: ListToolsResult;
}
/**
 * JSONRPCNotification of a log message passed from server to client. The client opts in by setting `"io.modelcontextprotocol/logLevel"` in a request's `_meta`.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "LoggingMessageNotification".
 */
export interface LoggingMessageNotification {
  jsonrpc: "2.0";
  method: "notifications/message";
  params: LoggingMessageNotificationParams;
}
/**
 * Parameters for a `notifications/message` notification.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "LoggingMessageNotificationParams".
 */
export interface LoggingMessageNotificationParams {
  _meta?: NotificationMetaObject;
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
}
/**
 * A JSON-RPC error indicating that the requested method does not exist or is not available.
 *
 * In MCP, a server returns this error when a client invokes a method the server does not implement — either a genuinely unknown method, or one gated behind a server capability the server did not advertise (e.g., calling `prompts/list` when the `prompts` capability was not advertised).
 *
 * A request that requires a client capability the client did not declare is signalled instead by {@link MissingRequiredClientCapabilityError} (`-32021`).
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "MethodNotFoundError".
 */
export interface MethodNotFoundError {
  /**
   * The error type that occurred.
   */
  code: -32601;
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
}
/**
 * Returned when processing a request requires a capability the client did not
 * declare in `clientCapabilities`. For HTTP, the response status code MUST be
 * `400 Bad Request`.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "MissingRequiredClientCapabilityError".
 */
export interface MissingRequiredClientCapabilityError {
  error: Error & {
    code: -32021;
    data: {
      requiredCapabilities: ClientCapabilities2;
    };
  };
  id?: RequestId;
  jsonrpc: "2.0";
}
/**
 * The capabilities the server requires from the client to process this request.
 */
export interface ClientCapabilities2 {
  /**
   * Present if the client supports elicitation from the server.
   */
  elicitation?: {
    form?: JSONObject;
    url?: JSONObject;
  };
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental?: {
    [k: string]: JSONObject;
  };
  /**
   * Optional MCP extensions that the client supports. Keys are extension identifiers
   * (e.g., "io.modelcontextprotocol/oauth-client-credentials"), and values are
   * per-extension settings objects. An empty object indicates support with no settings.
   *
   * Keys MUST follow the {@link MetaObject`_meta` key naming rules}, with a
   * mandatory prefix.
   */
  extensions?: {
    [k: string]: JSONObject;
  };
  /**
   * Present if the client supports listing roots.
   */
  roots?: {};
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling?: {
    context?: JSONObject1;
    tools?: JSONObject2;
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
    [k: string]: unknown;
  };
}
/**
 * Common params for any notification.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "NotificationParams".
 */
export interface NotificationParams {
  _meta?: NotificationMetaObject;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PaginatedRequest".
 */
export interface PaginatedRequest {
  id: RequestId;
  jsonrpc: "2.0";
  method: string;
  params: PaginatedRequestParams;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PaginatedResult".
 */
export interface PaginatedResult {
  _meta?: ResultMetaObject;
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor?: string;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
}
/**
 * A JSON-RPC error indicating that invalid JSON was received by the server. This error is returned when the server cannot parse the JSON text of a message.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ParseError".
 */
export interface ParseError {
  /**
   * The error type that occurred.
   */
  code: -32700;
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
}
/**
 * An out-of-band notification used to inform the receiver of a progress update for a long-running request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ProgressNotification".
 */
export interface ProgressNotification {
  jsonrpc: "2.0";
  method: "notifications/progress";
  params: ProgressNotificationParams;
}
/**
 * Parameters for a {@link ProgressNotificationnotifications/progress} notification.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ProgressNotificationParams".
 */
export interface ProgressNotificationParams {
  _meta?: NotificationMetaObject;
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
}
/**
 * An optional notification from the server to the client, informing it that the list of prompts it offers has changed. This is only delivered on a {@link SubscriptionsListenRequestsubscriptions/listen} stream when the client requested it via the `promptsListChanged` filter field.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "PromptListChangedNotification".
 */
export interface PromptListChangedNotification {
  jsonrpc: "2.0";
  method: "notifications/prompts/list_changed";
  params?: NotificationParams;
}
/**
 * The result returned by the server for a {@link ReadResourceRequestresources/read} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ReadResourceResult".
 */
export interface ReadResourceResult {
  _meta?: ResultMetaObject;
  /**
   * Indicates the intended scope of the cached response, analogous to HTTP
   * `Cache-Control: public` vs `Cache-Control: private`.
   *
   * - `"public"`: The response does not contain user-specific data. Any
   *   client or intermediary (e.g., shared gateway, caching proxy) MAY cache
   *   the response and serve it across authorization contexts.
   * - `"private"`: The response MAY be cached and reused only within the
   *   same authorization context. Caches MUST NOT be shared across
   *   authorization contexts (e.g., a different access token requires a
   *   different cache).
   */
  cacheScope: "private" | "public";
  contents: (TextResourceContents | BlobResourceContents)[];
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
  /**
   * A hint from the server indicating how long (in milliseconds) the
   * client MAY cache this response before re-fetching. Semantics are
   * analogous to HTTP Cache-Control max-age.
   *
   * - If 0, The response SHOULD be considered immediately stale,
   *   The client MAY re-fetch every time the result is needed.
   * - If positive, the client SHOULD consider the result fresh for this many
   *   milliseconds after receiving the response.
   */
  ttlMs: number;
}
/**
 * A successful response from the server for a {@link ReadResourceRequestresources/read} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ReadResourceResultResponse".
 */
export interface ReadResourceResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: InputRequiredResult | ReadResourceResult;
}
/**
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "Request".
 */
export interface Request {
  method: string;
  params?: {
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
  _meta?: MetaObject;
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
 * An optional notification from the server to the client, informing it that the list of resources it can read from has changed. This is only delivered on a {@link SubscriptionsListenRequestsubscriptions/listen} stream when the client requested it via the `resourcesListChanged` filter field.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceListChangedNotification".
 */
export interface ResourceListChangedNotification {
  jsonrpc: "2.0";
  method: "notifications/resources/list_changed";
  params?: NotificationParams;
}
/**
 * Common params for resource-related requests.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceRequestParams".
 */
export interface ResourceRequestParams {
  _meta: RequestMetaObject;
  /**
   * The URI of the resource. The URI can use any protocol; it is up to the server how to interpret it.
   */
  uri: string;
}
/**
 * A notification from the server to the client, informing it that a resource has changed and may need to be read again. This is only sent for resources the client opted in to via the `resourceSubscriptions` field of a {@link SubscriptionsListenRequestsubscriptions/listen} request.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceUpdatedNotification".
 */
export interface ResourceUpdatedNotification {
  jsonrpc: "2.0";
  method: "notifications/resources/updated";
  params: ResourceUpdatedNotificationParams;
}
/**
 * Parameters for a `notifications/resources/updated` notification.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ResourceUpdatedNotificationParams".
 */
export interface ResourceUpdatedNotificationParams {
  _meta?: NotificationMetaObject;
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: string;
}
/**
 * Capabilities that a server may support. Known capabilities are defined here, in this schema, but this is not a closed set: any server can define its own, additional capabilities.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ServerCapabilities".
 */
export interface ServerCapabilities1 {
  completions?: JSONObject4;
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental?: {
    [k: string]: JSONObject;
  };
  /**
   * Optional MCP extensions that the server supports. Keys are extension identifiers
   * (e.g., "io.modelcontextprotocol/tasks"), and values are per-extension settings
   * objects. An empty object indicates support with no settings.
   *
   * Keys MUST follow the {@link MetaObject`_meta` key naming rules}, with a
   * mandatory prefix.
   */
  extensions?: {
    [k: string]: JSONObject;
  };
  logging?: JSONObject5;
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
 * Sent by the server to acknowledge that a
 * {@link SubscriptionsListenRequestsubscriptions/listen} subscription has been
 * established and to report which notification types it agreed to honor.
 *
 * This notification MUST be the first message the server sends carrying the
 * subscription's ID in `io.modelcontextprotocol/subscriptionId`. The server MUST
 * NOT send any notification on the subscription before acknowledging it. On
 * stdio, where every subscription shares one channel, this ordering is defined
 * per subscription ID and not per channel: messages belonging to other
 * subscriptions MAY be interleaved before it.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsAcknowledgedNotification".
 */
export interface SubscriptionsAcknowledgedNotification {
  jsonrpc: "2.0";
  method: "notifications/subscriptions/acknowledged";
  params: SubscriptionsAcknowledgedNotificationParams;
}
/**
 * Parameters for a {@link SubscriptionsAcknowledgedNotificationnotifications/subscriptions/acknowledged} notification.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsAcknowledgedNotificationParams".
 */
export interface SubscriptionsAcknowledgedNotificationParams {
  _meta?: NotificationMetaObject;
  notifications: SubscriptionFilter1;
}
/**
 * The subset of requested notification types the server agreed to honor.
 * Only includes notification types the server actually supports; if the
 * client requested an unsupported type (e.g., `promptsListChanged` when
 * the server has no prompts), it is omitted from this set.
 */
export interface SubscriptionFilter1 {
  /**
   * If true, receive {@link PromptListChangedNotificationnotifications/prompts/list_changed}.
   */
  promptsListChanged?: boolean;
  /**
   * Subscribe to {@link ResourceUpdatedNotificationnotifications/resources/updated} for these resource URIs.
   * Replaces the former `resources/subscribe` RPC.
   */
  resourceSubscriptions?: string[];
  /**
   * If true, receive {@link ResourceListChangedNotificationnotifications/resources/list_changed}.
   */
  resourcesListChanged?: boolean;
  /**
   * If true, receive {@link ToolListChangedNotificationnotifications/tools/list_changed}.
   */
  toolsListChanged?: boolean;
}
/**
 * An optional notification from the server to the client, informing it that the list of tools it offers has changed. This is only delivered on a {@link SubscriptionsListenRequestsubscriptions/listen} stream when the client requested it via the `toolsListChanged` filter field.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ToolListChangedNotification".
 */
export interface ToolListChangedNotification {
  jsonrpc: "2.0";
  method: "notifications/tools/list_changed";
  params?: NotificationParams;
}
/**
 * The response to a {@link SubscriptionsListenRequestsubscriptions/listen}
 * request, signalling that the subscription has ended gracefully (for example,
 * during server shutdown). Because the listen stream is long-lived, this result
 * is sent only when the server tears the subscription down; an abrupt transport
 * close carries no response. The result body is otherwise empty.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsListenResult".
 */
export interface SubscriptionsListenResult {
  _meta: SubscriptionsListenResultMetaObject;
  /**
   * Indicates the type of the result, which allows the client to determine
   * how to parse the result object.
   *
   * Servers implementing this protocol version MUST include this field.
   * For backward compatibility, when a client receives a result from a
   * server implementing an earlier protocol version (which does not include
   * `resultType`), the client MUST treat the absent field as `"complete"`.
   */
  resultType: string;
}
/**
 * Extends {@link ResultMetaObject} with the subscription-stream identifier carried by a
 * {@link SubscriptionsListenResult}. All key naming rules from `MetaObject` apply.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsListenResultMetaObject".
 */
export interface SubscriptionsListenResultMetaObject {
  "io.modelcontextprotocol/serverInfo"?: Implementation3;
  /**
   * A uniquely identifying ID for a request in JSON-RPC.
   */
  "io.modelcontextprotocol/subscriptionId": string | number;
}
/**
 * Identifies the server software producing the response. Servers SHOULD
 * include this field on every response unless specifically configured not
 * to do so.
 *
 * The {@link Implementation} schema requires `name` and `version`; other
 * fields are optional.
 *
 * The value is self-reported by the server and is not verified by the
 * protocol. It is intended for display, logging, and debugging. Clients
 * SHOULD NOT use it to change their behavior, and SHOULD NOT rely on it for
 * security decisions.
 */
export interface Implementation3 {
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description?: string;
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons?: Icon[];
  /**
   * Intended for programmatic or logical use, but used as a display name in past specs or fallback (if title isn't present).
   */
  name: string;
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for {@link Tool},
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title?: string;
  /**
   * The version of this implementation.
   */
  version: string;
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl?: string;
}
/**
 * The set of notification types a client may opt in to on a
 * {@link SubscriptionsListenRequestsubscriptions/listen} request.
 *
 * Each notification type is **opt-in**; the server **MUST NOT** send
 * notification types the client has not explicitly requested here.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionFilter".
 */
export interface SubscriptionFilter2 {
  /**
   * If true, receive {@link PromptListChangedNotificationnotifications/prompts/list_changed}.
   */
  promptsListChanged?: boolean;
  /**
   * Subscribe to {@link ResourceUpdatedNotificationnotifications/resources/updated} for these resource URIs.
   * Replaces the former `resources/subscribe` RPC.
   */
  resourceSubscriptions?: string[];
  /**
   * If true, receive {@link ResourceListChangedNotificationnotifications/resources/list_changed}.
   */
  resourcesListChanged?: boolean;
  /**
   * If true, receive {@link ToolListChangedNotificationnotifications/tools/list_changed}.
   */
  toolsListChanged?: boolean;
}
/**
 * A successful response from the server for a {@link SubscriptionsListenRequestsubscriptions/listen}
 * request, sent when the server tears the subscription down gracefully.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "SubscriptionsListenResultResponse".
 */
export interface SubscriptionsListenResultResponse {
  id: RequestId;
  jsonrpc: "2.0";
  result: SubscriptionsListenResult;
}
/**
 * Additional properties describing a {@link Tool} to clients.
 *
 * NOTE: all properties in `ToolAnnotations` are **hints**.
 * They are not guaranteed to provide a faithful description of
 * tool behavior (including descriptive properties like `title`).
 *
 * Clients should never make tool use decisions based on `ToolAnnotations`
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
   * will have no additional effect on its environment.
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
 * Controls tool selection behavior for sampling requests.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "ToolChoice".
 */
export interface ToolChoice1 {
  /**
   * Controls the tool use ability of the model:
   * - `"auto"`: Model decides whether to use tools (default)
   * - `"required"`: Model MUST use at least one tool before completing
   * - `"none"`: Model MUST NOT use any tools
   */
  mode?: "auto" | "none" | "required";
}
/**
 * Returned when the request's protocol version is unknown to the server or
 * unsupported (e.g., a known experimental or draft version the server has
 * chosen not to implement). For HTTP, the response status code MUST be
 * `400 Bad Request`.
 *
 * This interface was referenced by `Mcp`'s JSON-Schema
 * via the `definition` "UnsupportedProtocolVersionError".
 */
export interface UnsupportedProtocolVersionError {
  error: Error & {
    code: -32022;
    data: {
      /**
       * The protocol version that was requested by the client.
       */
      requested: string;
      /**
       * Protocol versions the server supports. The client should choose a
       * mutually supported version from this list and retry.
       */
      supported: string[];
    };
  };
  id?: RequestId;
  jsonrpc: "2.0";
}
