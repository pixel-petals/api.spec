/**
 * Arazzo — generated from the vendored JSON Schema.
 *
 * https://spec.openapis.org/arazzo/1.1/schema/2026-04-15
 * Strategy: references resolved.
 *
 * Do not edit by hand.
 */
/**
 * Describes a single workflow step which MAY be a call to an
 * API operation (OpenAPI Operation Object or AsyncAPI Operation Object or another Workflow Object)
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "step-object".
 */
export type StepObject =
  | (StepObjectBase & {
      /**
       * The name of an existing, resolvable operation, as defined with a unique operationId and existing within one of the sourceDescriptions
       */
      operationId?: string;
      /**
       * A reference to a Source combined with a JSON Pointer to reference an operation
       */
      operationPath?: string;
      parameters?: OperationStepParameters;
    } & {
      [k: string]: unknown;
    })
  | (StepObjectBase & {
      /**
       * The name of an existing, resolvable operation, as defined with a unique operationId and existing within one of the sourceDescriptions
       */
      operationId?: string;
      /**
       * A reference to a Source combined with a JSON Pointer to reference an async channel
       */
      channelPath?: string;
      /**
       * ID to correlate async responses with their requests, only specified for async receive steps
       */
      correlationId?: string | number | boolean | {} | unknown[];
      /**
       * Specifies the intended operation on the async channel, indicating whether the action is sending data to the channel or receiving data from the channel
       */
      action: "send" | "receive";
      parameters?: OperationStepParameters;
    } & {
      [k: string]: unknown;
    })
  | (StepObjectBase & {
      workflowId: unknown;
      parameters?: (
        | {
            /**
             * The name of the parameter
             */
            name: string;
            /**
             * The named location of the parameter
             */
            in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
            /**
             * The value to pass in the parameter
             */
            value:
              | (string | boolean | unknown[] | number | null)
              | {
                  /**
                   * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
                   */
                  context: string;
                  /**
                   * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
                   */
                  selector: string;
                  /**
                   * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
                   */
                  type:
                    | ("jsonpointer" | "jsonpath" | "xpath")
                    | {
                        [k: string]: unknown;
                      };
                  /**
                   * This interface was referenced by `undefined`'s JSON-Schema definition
                   * via the `patternProperty` "^x-".
                   */
                  [k: string]: unknown;
                };
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
    });
/**
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "operation-step-parameters".
 */
export type OperationStepParameters = (
  | ReusableObject
  | {
      /**
       * The name of the parameter
       */
      name?: string;
      /**
       * The named location of the parameter
       */
      in: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
      /**
       * The value to pass in the parameter
       */
      value?:
        | (string | boolean | unknown[] | number | null)
        | {
            /**
             * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
             */
            context: string;
            /**
             * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
             */
            selector: string;
            /**
             * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
             */
            type:
              | ("jsonpointer" | "jsonpath" | "xpath")
              | {
                  [k: string]: unknown;
                };
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    }
)[];
/**
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "schema".
 */
export type Schema = unknown;
/**
 * While the Arazzo Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "openapi-step-object".
 */
export type OpenapiStepObject = StepObjectBase & {
  /**
   * The name of an existing, resolvable operation, as defined with a unique operationId and existing within one of the sourceDescriptions
   */
  operationId?: string;
  /**
   * A reference to a Source combined with a JSON Pointer to reference an operation
   */
  operationPath?: string;
  parameters?: OperationStepParameters;
} & {
  [k: string]: unknown;
};
/**
 * While the Arazzo Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "asyncapi-step-object".
 */
export type AsyncapiStepObject = StepObjectBase & {
  /**
   * The name of an existing, resolvable operation, as defined with a unique operationId and existing within one of the sourceDescriptions
   */
  operationId?: string;
  /**
   * A reference to a Source combined with a JSON Pointer to reference an async channel
   */
  channelPath?: string;
  /**
   * ID to correlate async responses with their requests, only specified for async receive steps
   */
  correlationId?: string | number | boolean | {} | unknown[];
  /**
   * Specifies the intended operation on the async channel, indicating whether the action is sending data to the channel or receiving data from the channel
   */
  action: "send" | "receive";
  parameters?: OperationStepParameters;
} & {
  [k: string]: unknown;
};
/**
 * While the Arazzo Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "workflow-step-object".
 */
export type WorkflowStepObject = StepObjectBase & {
  workflowId: unknown;
  parameters?: (
    | {
        /**
         * The name of the parameter
         */
        name: string;
        /**
         * The named location of the parameter
         */
        in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
        /**
         * The value to pass in the parameter
         */
        value:
          | (string | boolean | unknown[] | number | null)
          | {
              /**
               * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
               */
              context: string;
              /**
               * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
               */
              selector: string;
              /**
               * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
               */
              type:
                | ("jsonpointer" | "jsonpath" | "xpath")
                | {
                    [k: string]: unknown;
                  };
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      }
    | ReusableObject
  )[];
};
/**
 * An object used to describe the type and version of an expression used within a Criterion Object or Selector Object. If the `version` is omitted, a default value is assumed based on the expression `type`
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "expression-type-object".
 */
export type ExpressionTypeObject = {
  [k: string]: unknown;
};
/**
 * A single success action which describes an action to take upon success of a workflow step
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "success-action-object".
 */
export type SuccessActionObject = {
  [k: string]: unknown;
};
/**
 * A single failure action which describes an action to take upon failure of a workflow step
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "failure-action-object".
 */
export type FailureActionObject = {
  [k: string]: unknown;
};
/**
 * A selector expression type that may be a simple string enum or an Expression Type Object for version-specific support
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "selector-type".
 */
export type SelectorType =
  | ("jsonpointer" | "jsonpath" | "xpath")
  | {
      [k: string]: unknown;
    };

/**
 * The description of Arazzo v1.1.x documents
 */
export interface Arazzo {
  /**
   * The version number of the Arazzo Specification
   */
  arazzo: string;
  $self?: string;
  /**
   * Provides metadata about the Arazzo description
   */
  info: {
    /**
     * A human readable title of the Arazzo Description
     */
    title: string;
    /**
     * A short summary of the Arazzo Description
     */
    summary?: string;
    /**
     * A description of the purpose of the workflows defined. CommonMark syntax MAY be used for rich text representation
     */
    description?: string;
    /**
     * The version identifier of the Arazzo document (which is distinct from the Arazzo Specification version)
     */
    version: string;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  /**
   * A list of source descriptions such as Arazzo or OpenAPI
   *
   * @minItems 1
   */
  sourceDescriptions: [
    {
      /**
       * A unique name for the source description
       */
      name: string;
      /**
       * A URL to a source description to be used by a workflow
       */
      url: string;
      /**
       * The type of source description
       */
      type?: "arazzo" | "openapi" | "asyncapi";
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    },
    ...{
      /**
       * A unique name for the source description
       */
      name: string;
      /**
       * A URL to a source description to be used by a workflow
       */
      url: string;
      /**
       * The type of source description
       */
      type?: "arazzo" | "openapi" | "asyncapi";
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    }[]
  ];
  /**
   * A list of workflows
   *
   * @minItems 1
   */
  workflows: [
    {
      /**
       * Unique string to represent the workflow
       */
      workflowId: string;
      /**
       * A summary of the purpose or objective of the workflow
       */
      summary?: string;
      /**
       * A description of the workflow. CommonMark syntax MAY be used for rich text representation
       */
      description?: string;
      /**
       * A JSON Schema 2020-12 object representing the input parameters used by this workflow
       */
      inputs?: {
        [k: string]: unknown;
      };
      /**
       * A list of workflows that MUST be completed before this workflow can be processed
       */
      dependsOn?: string[];
      /**
       * An ordered list of steps where each step represents a call to an API operation or to another workflow
       *
       * @minItems 1
       */
      steps: [StepObject, ...StepObject[]];
      /**
       * A list of success actions that are applicable for all steps described under this workflow
       */
      successActions?: (
        | {
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
      /**
       * A list of failure actions that are applicable for all steps described under this workflow
       */
      failureActions?: (
        | {
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
      /**
       * A map between a friendly name and a dynamic output value defined using a Runtime Expression or Selector Object. Keys must match the regex: ^[a-zA-Z0-9\.\-_]+$
       *
       */
      outputs?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
         */
        [k: string]:
          | string
          | {
              /**
               * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
               */
              context: string;
              /**
               * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
               */
              selector: string;
              /**
               * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
               */
              type:
                | ("jsonpointer" | "jsonpath" | "xpath")
                | {
                    [k: string]: unknown;
                  };
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
      };
      /**
       * A list of parameters that are applicable for all steps described under this workflow
       */
      parameters?: (
        | {
            /**
             * The name of the parameter
             */
            name: string;
            /**
             * The named location of the parameter
             */
            in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
            /**
             * The value to pass in the parameter
             */
            value:
              | (string | boolean | unknown[] | number | null)
              | {
                  /**
                   * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
                   */
                  context: string;
                  /**
                   * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
                   */
                  selector: string;
                  /**
                   * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
                   */
                  type:
                    | ("jsonpointer" | "jsonpath" | "xpath")
                    | {
                        [k: string]: unknown;
                      };
                  /**
                   * This interface was referenced by `undefined`'s JSON-Schema definition
                   * via the `patternProperty` "^x-".
                   */
                  [k: string]: unknown;
                };
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    },
    ...{
      /**
       * Unique string to represent the workflow
       */
      workflowId: string;
      /**
       * A summary of the purpose or objective of the workflow
       */
      summary?: string;
      /**
       * A description of the workflow. CommonMark syntax MAY be used for rich text representation
       */
      description?: string;
      /**
       * A JSON Schema 2020-12 object representing the input parameters used by this workflow
       */
      inputs?: {
        [k: string]: unknown;
      };
      /**
       * A list of workflows that MUST be completed before this workflow can be processed
       */
      dependsOn?: string[];
      /**
       * An ordered list of steps where each step represents a call to an API operation or to another workflow
       *
       * @minItems 1
       */
      steps: [StepObject, ...StepObject[]];
      /**
       * A list of success actions that are applicable for all steps described under this workflow
       */
      successActions?: (
        | {
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
      /**
       * A list of failure actions that are applicable for all steps described under this workflow
       */
      failureActions?: (
        | {
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
      /**
       * A map between a friendly name and a dynamic output value defined using a Runtime Expression or Selector Object. Keys must match the regex: ^[a-zA-Z0-9\.\-_]+$
       *
       */
      outputs?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
         */
        [k: string]:
          | string
          | {
              /**
               * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
               */
              context: string;
              /**
               * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
               */
              selector: string;
              /**
               * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
               */
              type:
                | ("jsonpointer" | "jsonpath" | "xpath")
                | {
                    [k: string]: unknown;
                  };
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
      };
      /**
       * A list of parameters that are applicable for all steps described under this workflow
       */
      parameters?: (
        | {
            /**
             * The name of the parameter
             */
            name: string;
            /**
             * The named location of the parameter
             */
            in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
            /**
             * The value to pass in the parameter
             */
            value:
              | (string | boolean | unknown[] | number | null)
              | {
                  /**
                   * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
                   */
                  context: string;
                  /**
                   * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
                   */
                  selector: string;
                  /**
                   * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
                   */
                  type:
                    | ("jsonpointer" | "jsonpath" | "xpath")
                    | {
                        [k: string]: unknown;
                      };
                  /**
                   * This interface was referenced by `undefined`'s JSON-Schema definition
                   * via the `patternProperty` "^x-".
                   */
                  [k: string]: unknown;
                };
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          }
        | ReusableObject
      )[];
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    }[]
  ];
  /**
   * Holds a set of reusable objects for different aspects of the Arazzo Specification
   */
  components?: {
    /**
     * An object to hold reusable JSON Schema 2020-12 schemas to be referenced from workflow inputs
     */
    inputs?: {
      [k: string]: Schema;
    };
    /**
     * An object to hold reusable Parameter Objects
     */
    parameters?: {
      /**
       * Describes a single step parameter
       */
      [k: string]: {
        /**
         * The name of the parameter
         */
        name: string;
        /**
         * The named location of the parameter
         */
        in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
        /**
         * The value to pass in the parameter
         */
        value:
          | (string | boolean | unknown[] | number | null)
          | {
              /**
               * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
               */
              context: string;
              /**
               * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
               */
              selector: string;
              /**
               * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
               */
              type:
                | ("jsonpointer" | "jsonpath" | "xpath")
                | {
                    [k: string]: unknown;
                  };
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
    };
    /**
     * An object to hold reusable Success Actions Objects
     */
    successActions?: {
      /**
       * A single success action which describes an action to take upon success of a workflow step
       */
      [k: string]: {
        [k: string]: unknown;
      };
    };
    /**
     * An object to hold reusable Failure Actions Objects
     */
    failureActions?: {
      /**
       * A single failure action which describes an action to take upon failure of a workflow step
       */
      [k: string]: {
        [k: string]: unknown;
      };
    };
    [k: string]: unknown;
  };
  /**
   * This interface was referenced by `Arazzo`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "step-object-base".
 */
export interface StepObjectBase {
  /**
   * Unique string to represent the step
   */
  stepId: string;
  /**
   * A description of the step. CommonMark syntax MAY be used for rich text representation
   */
  description?: string;
  /**
   * The duration in milliseconds to wait before timing out the step
   */
  timeout?: number;
  /**
   * Specifies a list of step identifiers that must complete (or be waited for) before the current step can begin execution. `dependsOn` only establishes a prerequisite relationship for the current step and does not trigger execution of the referenced steps. Steps referred by dependsOn SHOULD be non-blocking/async steps. Steps in the current workflow MUST be referenced directly by stepId. Steps in another workflow in the same Arazzo document MUST use $workflows.<workflowId>.steps.<stepId>. Steps in another Arazzo document MUST use $sourceDescriptions.<name>.<workflowId>.steps.<stepId>.
   *
   * @minItems 1
   */
  dependsOn?: [string | string | string, ...(string | string | string)[]];
  /**
   * A list of parameters that MUST be passed to an operation or workflow as referenced by operationId, operationPath, or workflowId
   */
  parameters?: unknown[];
  /**
   * The request body to pass to an operation as referenced by operationId or operationPath or channelPath
   */
  requestBody?: {
    /**
     * The Content-Type for the request content
     */
    contentType?: string;
    payload?: unknown;
    /**
     * A list of locations and values to set within a payload
     */
    replacements?: {
      /**
       * A JSONPath, JSON Pointer, or XPath Expression which MUST be resolved against the request body
       */
      target: string;
      /**
       * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`). Should an alternate version be required, the Expression Type Object may be used instead. If omitted, defaults to JSON Pointer for `application/json` or XPath for XML-based media types.
       *
       */
      targetSelectorType?:
        | ("jsonpointer" | "jsonpath" | "xpath")
        | {
            [k: string]: unknown;
          };
      /**
       * The value to set at the location defined by the target. May be a literal, a runtime expression string, or a selector object.
       *
       */
      value:
        | string
        | {
            /**
             * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
             */
            context: string;
            /**
             * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
             */
            selector: string;
            /**
             * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
             */
            type:
              | ("jsonpointer" | "jsonpath" | "xpath")
              | {
                  [k: string]: unknown;
                };
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    }[];
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  /**
   * A list of assertions to determine the success of the step
   *
   * @minItems 1
   */
  successCriteria?: [
    {
      /**
       * A runtime expression used to set the context for the condition to be applied on
       */
      context?: string;
      /**
       * The condition to apply
       */
      condition: string;
      /**
       * The type of condition to be applied or a reference to an expression type object
       */
      type?:
        | ("simple" | "regex" | "jsonpath" | "xpath")
        | {
            [k: string]: unknown;
          };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    },
    ...{
      /**
       * A runtime expression used to set the context for the condition to be applied on
       */
      context?: string;
      /**
       * The condition to apply
       */
      condition: string;
      /**
       * The type of condition to be applied or a reference to an expression type object
       */
      type?:
        | ("simple" | "regex" | "jsonpath" | "xpath")
        | {
            [k: string]: unknown;
          };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    }[]
  ];
  /**
   * An array of success action objects that specify what to do upon step success
   */
  onSuccess?: (
    | {
        [k: string]: unknown;
      }
    | ReusableObject
  )[];
  /**
   * An array of failure action objects that specify what to do upon step failure
   */
  onFailure?: (
    | {
        [k: string]: unknown;
      }
    | ReusableObject
  )[];
  /**
   * A map between a friendly name and a dynamic output value defined using a Runtime Expression or Selector Object. Keys must match the regex: ^[a-zA-Z0-9\.\-_]+$
   *
   */
  outputs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]:
      | string
      | {
          /**
           * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
           */
          context: string;
          /**
           * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
           */
          selector: string;
          /**
           * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
           */
          type:
            | ("jsonpointer" | "jsonpath" | "xpath")
            | {
                [k: string]: unknown;
              };
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
  };
}
/**
 * A simple object to allow referencing of objects contained within the Components Object
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "reusable-object".
 */
export interface ReusableObject {
  /**
   * A runtime expression used to reference the desired object
   */
  reference: string;
  /**
   * Sets a value of the referenced parameter
   */
  value?: string | boolean | {} | unknown[] | number | null;
}
/**
 * Provides metadata about the Arazzo description
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "info".
 */
export interface Info {
  /**
   * A human readable title of the Arazzo Description
   */
  title: string;
  /**
   * A short summary of the Arazzo Description
   */
  summary?: string;
  /**
   * A description of the purpose of the workflows defined. CommonMark syntax MAY be used for rich text representation
   */
  description?: string;
  /**
   * The version identifier of the Arazzo document (which is distinct from the Arazzo Specification version)
   */
  version: string;
  /**
   * This interface was referenced by `Info`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Describes a source description (such as an OpenAPI description)
 * that will be referenced by one or more workflows described within
 * an Arazzo description
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "source-description-object".
 */
export interface SourceDescriptionObject {
  /**
   * A unique name for the source description
   */
  name: string;
  /**
   * A URL to a source description to be used by a workflow
   */
  url: string;
  /**
   * The type of source description
   */
  type?: "arazzo" | "openapi" | "asyncapi";
  /**
   * This interface was referenced by `SourceDescriptionObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Describes the steps to be taken across one or more APIs to achieve an objective
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "workflow-object".
 */
export interface WorkflowObject {
  /**
   * Unique string to represent the workflow
   */
  workflowId: string;
  /**
   * A summary of the purpose or objective of the workflow
   */
  summary?: string;
  /**
   * A description of the workflow. CommonMark syntax MAY be used for rich text representation
   */
  description?: string;
  /**
   * A JSON Schema 2020-12 object representing the input parameters used by this workflow
   */
  inputs?: {
    [k: string]: unknown;
  };
  /**
   * A list of workflows that MUST be completed before this workflow can be processed
   */
  dependsOn?: string[];
  /**
   * An ordered list of steps where each step represents a call to an API operation or to another workflow
   *
   * @minItems 1
   */
  steps: [StepObject, ...StepObject[]];
  /**
   * A list of success actions that are applicable for all steps described under this workflow
   */
  successActions?: (
    | {
        [k: string]: unknown;
      }
    | ReusableObject
  )[];
  /**
   * A list of failure actions that are applicable for all steps described under this workflow
   */
  failureActions?: (
    | {
        [k: string]: unknown;
      }
    | ReusableObject
  )[];
  /**
   * A map between a friendly name and a dynamic output value defined using a Runtime Expression or Selector Object. Keys must match the regex: ^[a-zA-Z0-9\.\-_]+$
   *
   */
  outputs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]:
      | string
      | {
          /**
           * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
           */
          context: string;
          /**
           * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
           */
          selector: string;
          /**
           * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
           */
          type:
            | ("jsonpointer" | "jsonpath" | "xpath")
            | {
                [k: string]: unknown;
              };
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
  };
  /**
   * A list of parameters that are applicable for all steps described under this workflow
   */
  parameters?: (
    | {
        /**
         * The name of the parameter
         */
        name: string;
        /**
         * The named location of the parameter
         */
        in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
        /**
         * The value to pass in the parameter
         */
        value:
          | (string | boolean | unknown[] | number | null)
          | {
              /**
               * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
               */
              context: string;
              /**
               * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
               */
              selector: string;
              /**
               * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
               */
              type:
                | ("jsonpointer" | "jsonpath" | "xpath")
                | {
                    [k: string]: unknown;
                  };
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      }
    | ReusableObject
  )[];
  /**
   * This interface was referenced by `WorkflowObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * The request body to pass to an operation as referenced by operationId or operationPath or channelPath
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "request-body-object".
 */
export interface RequestBodyObject {
  /**
   * The Content-Type for the request content
   */
  contentType?: string;
  payload?: unknown;
  /**
   * A list of locations and values to set within a payload
   */
  replacements?: {
    /**
     * A JSONPath, JSON Pointer, or XPath Expression which MUST be resolved against the request body
     */
    target: string;
    /**
     * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`). Should an alternate version be required, the Expression Type Object may be used instead. If omitted, defaults to JSON Pointer for `application/json` or XPath for XML-based media types.
     *
     */
    targetSelectorType?:
      | ("jsonpointer" | "jsonpath" | "xpath")
      | {
          [k: string]: unknown;
        };
    /**
     * The value to set at the location defined by the target. May be a literal, a runtime expression string, or a selector object.
     *
     */
    value:
      | string
      | {
          /**
           * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
           */
          context: string;
          /**
           * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
           */
          selector: string;
          /**
           * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
           */
          type:
            | ("jsonpointer" | "jsonpath" | "xpath")
            | {
                [k: string]: unknown;
              };
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  }[];
  /**
   * This interface was referenced by `RequestBodyObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * An object used to specify the context, conditions, and condition types
 * that can be used to prove or satisfy assertions specified in Step Object successCriteria,
 * Success Action Object criteria, and Failure Action Object criteria
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "criterion-object".
 */
export interface CriterionObject {
  /**
   * A runtime expression used to set the context for the condition to be applied on
   */
  context?: string;
  /**
   * The condition to apply
   */
  condition: string;
  /**
   * The type of condition to be applied or a reference to an expression type object
   */
  type?:
    | ("simple" | "regex" | "jsonpath" | "xpath")
    | {
        [k: string]: unknown;
      };
  /**
   * This interface was referenced by `CriterionObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Describes a single step parameter
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "parameter-object".
 */
export interface ParameterObject {
  /**
   * The name of the parameter
   */
  name: string;
  /**
   * The named location of the parameter
   */
  in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
  /**
   * The value to pass in the parameter
   */
  value:
    | (string | boolean | unknown[] | number | null)
    | {
        /**
         * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
         */
        context: string;
        /**
         * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
         */
        selector: string;
        /**
         * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
         */
        type:
          | ("jsonpointer" | "jsonpath" | "xpath")
          | {
              [k: string]: unknown;
            };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
  /**
   * This interface was referenced by `ParameterObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Describes a location within a payload (e.g., a request body) and a value to set within the location
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "payload-replacement-object".
 */
export interface PayloadReplacementObject {
  /**
   * A JSONPath, JSON Pointer, or XPath Expression which MUST be resolved against the request body
   */
  target: string;
  /**
   * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`). Should an alternate version be required, the Expression Type Object may be used instead. If omitted, defaults to JSON Pointer for `application/json` or XPath for XML-based media types.
   *
   */
  targetSelectorType?:
    | ("jsonpointer" | "jsonpath" | "xpath")
    | {
        [k: string]: unknown;
      };
  /**
   * The value to set at the location defined by the target. May be a literal, a runtime expression string, or a selector object.
   *
   */
  value:
    | string
    | {
        /**
         * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
         */
        context: string;
        /**
         * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
         */
        selector: string;
        /**
         * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
         */
        type:
          | ("jsonpointer" | "jsonpath" | "xpath")
          | {
              [k: string]: unknown;
            };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
  /**
   * This interface was referenced by `PayloadReplacementObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * An object which enables fine-grained traversal and precise data selection from structured data
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "selector-object".
 */
export interface SelectorObject {
  /**
   * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
   */
  context: string;
  /**
   * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
   */
  selector: string;
  /**
   * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
   */
  type:
    | ("jsonpointer" | "jsonpath" | "xpath")
    | {
        [k: string]: unknown;
      };
  /**
   * This interface was referenced by `SelectorObject`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Holds a set of reusable objects for different aspects of the Arazzo Specification
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "components-object".
 */
export interface ComponentsObject {
  /**
   * An object to hold reusable JSON Schema 2020-12 schemas to be referenced from workflow inputs
   */
  inputs?: {
    [k: string]: Schema;
  };
  /**
   * An object to hold reusable Parameter Objects
   */
  parameters?: {
    /**
     * Describes a single step parameter
     */
    [k: string]: {
      /**
       * The name of the parameter
       */
      name: string;
      /**
       * The named location of the parameter
       */
      in?: "path" | "query" | "querystring" | "header" | "cookie" | "channel";
      /**
       * The value to pass in the parameter
       */
      value:
        | (string | boolean | unknown[] | number | null)
        | {
            /**
             * A valid Runtime Expression which MUST evaluate to structured data (e.g., `$response.body`), and sets the context for the selector to be applied on
             */
            context: string;
            /**
             * A selector expression (e.g., `$.items[0].id`, `/Envelope/Item`) in the form of JSONPath expression, XPath expression, or JSON Pointer expression
             */
            selector: string;
            /**
             * The selector expression type to use (e.g., `jsonpath`, `xpath`, or `jsonpointer`) or an Expression Type Object for older version support
             */
            type:
              | ("jsonpointer" | "jsonpath" | "xpath")
              | {
                  [k: string]: unknown;
                };
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
  };
  /**
   * An object to hold reusable Success Actions Objects
   */
  successActions?: {
    /**
     * A single success action which describes an action to take upon success of a workflow step
     */
    [k: string]: {
      [k: string]: unknown;
    };
  };
  /**
   * An object to hold reusable Failure Actions Objects
   */
  failureActions?: {
    /**
     * A single failure action which describes an action to take upon failure of a workflow step
     */
    [k: string]: {
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
}
/**
 * While the Arazzo Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "specification-extensions".
 */
export interface SpecificationExtensions {
  /**
   * This interface was referenced by `SpecificationExtensions`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
