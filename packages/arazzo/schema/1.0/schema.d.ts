/**
 * Arazzo — generated from the vendored JSON Schema.
 *
 * https://spec.openapis.org/arazzo/1.0/schema/2025-10-15
 * Strategy: references resolved.
 *
 * Do not edit by hand.
 */
/**
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "schema".
 */
export type Schema = unknown;
export type StepObject = {
  [k: string]: unknown;
};
/**
 * An object used to specify the context, conditions, and condition types
 * that can be used to prove or satisfy assertions specified in Step Object successCriteria,
 * Success Action Object criteria, and Failure Action Object criteria
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "criterion-object".
 */
export type CriterionObject =
  | {
      /**
       * The type of condition to be applied
       */
      type?: "simple" | "regex" | "jsonpath" | "xpath";
    }
  | {
      [k: string]: unknown;
    };
/**
 * An object used to describe the type and version of an expression used within a Criterion Object
 *
 * This interface was referenced by `Arazzo`'s JSON-Schema
 * via the `definition` "criterion-expression-type-object".
 */
export type CriterionExpressionTypeObject = {
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
 * The description of Arazzo v1.0.x documents
 */
export interface Arazzo {
  /**
   * The version number of the Arazzo Specification
   */
  arazzo: string;
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
      type?: "arazzo" | "openapi";
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
      type?: "arazzo" | "openapi";
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
      steps: [
        {
          [k: string]: unknown;
        } & {
          [k: string]: unknown;
        } & (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ) &
          (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ),
        ...({
          [k: string]: unknown;
        } & {
          [k: string]: unknown;
        } & (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ) &
          (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ))[]
      ];
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
       * A map between a friendly name and a dynamic output value
       */
      outputs?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
         */
        [k: string]: string;
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
            in?: "path" | "query" | "header" | "cookie";
            /**
             * The value to pass in the parameter
             */
            value: string | boolean | {} | unknown[] | number | null;
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
      steps: [
        {
          [k: string]: unknown;
        } & {
          [k: string]: unknown;
        } & (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ) &
          (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ),
        ...({
          [k: string]: unknown;
        } & {
          [k: string]: unknown;
        } & (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ) &
          (
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
            | {
                [k: string]: unknown;
              }
          ))[]
      ];
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
       * A map between a friendly name and a dynamic output value
       */
      outputs?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
         */
        [k: string]: string;
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
            in?: "path" | "query" | "header" | "cookie";
            /**
             * The value to pass in the parameter
             */
            value: string | boolean | {} | unknown[] | number | null;
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
        in?: "path" | "query" | "header" | "cookie";
        /**
         * The value to pass in the parameter
         */
        value: string | boolean | {} | unknown[] | number | null;
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
  type?: "arazzo" | "openapi";
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
  steps: [
    {
      [k: string]: unknown;
    } & {
      [k: string]: unknown;
    } & (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
      ) &
      (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
      ),
    ...({
      [k: string]: unknown;
    } & {
      [k: string]: unknown;
    } & (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
      ) &
      (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
      ))[]
  ];
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
   * A map between a friendly name and a dynamic output value
   */
  outputs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: string;
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
        in?: "path" | "query" | "header" | "cookie";
        /**
         * The value to pass in the parameter
         */
        value: string | boolean | {} | unknown[] | number | null;
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
 * The request body to pass to an operation as referenced by operationId or operationPath
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
     * A JSON Pointer or XPath Expression which MUST be resolved against the request body
     */
    target: string;
    /**
     * The value set within the target location
     */
    value: string;
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
  in?: "path" | "query" | "header" | "cookie";
  /**
   * The value to pass in the parameter
   */
  value: string | boolean | {} | unknown[] | number | null;
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
   * A JSON Pointer or XPath Expression which MUST be resolved against the request body
   */
  target: string;
  /**
   * The value set within the target location
   */
  value: string;
  /**
   * This interface was referenced by `PayloadReplacementObject`'s JSON-Schema definition
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
      in?: "path" | "query" | "header" | "cookie";
      /**
       * The value to pass in the parameter
       */
      value: string | boolean | {} | unknown[] | number | null;
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
