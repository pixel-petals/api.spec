/**
 * OpenApi — generated from the vendored JSON Schema.
 *
 * https://spec.openapis.org/oas/3.1/schema/2025-11-23
 * Strategy: references resolved.
 *
 * Do not edit by hand.
 */
/**
 * The description of OpenAPI v3.1.x Documents without Schema Object validation
 */
export type OpenApi = {
  [k: string]: unknown;
} & {
  openapi: string;
  info: {
    title: string;
    summary?: string;
    description?: string;
    termsOfService?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    license?: {
      name: string;
      identifier?: string;
      url?: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    version: string;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  jsonSchemaDialect?: string;
  servers?: {
    url: string;
    description?: string;
    variables?: {
      [k: string]: {
        /**
         * @minItems 1
         */
        enum?: [string, ...string[]];
        default: string;
        description?: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
    };
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  }[];
  paths?: {
    [k: string]: unknown;
  };
  webhooks?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^/".
     *
     * This interface was referenced by `Paths`'s JSON-Schema definition
     * via the `patternProperty` "^/".
     */
    [k: string]: {
      $ref?: string;
      summary?: string;
      description?: string;
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
        };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      }[];
      parameters?: ParameterOrReference[];
      get?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      put?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      post?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      delete?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      options?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      head?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      patch?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      trace?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
  };
  components?: {
    schemas?: {
      [k: string]: unknown;
    };
    responses?: {
      [k: string]: ResponseOrReference;
    };
    parameters?: {
      [k: string]: ParameterOrReference;
    };
    examples?: {
      [k: string]: ExampleOrReference;
    };
    requestBodies?: {
      [k: string]: RequestBodyOrReference;
    };
    headers?: {
      [k: string]: HeaderOrReference;
    };
    securitySchemes?: {
      [k: string]: SecuritySchemeOrReference;
    };
    links?: {
      [k: string]: LinkOrReference;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    pathItems?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^/".
       *
       * This interface was referenced by `Paths`'s JSON-Schema definition
       * via the `patternProperty` "^/".
       */
      [k: string]: {
        $ref?: string;
        summary?: string;
        description?: string;
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
          };
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        }[];
        parameters?: ParameterOrReference[];
        get?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        put?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        post?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        delete?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        options?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        head?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        patch?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
        trace?: {
          tags?: string[];
          summary?: string;
          description?: string;
          externalDocs?: {
            description?: string;
            url: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
          operationId?: string;
          parameters?: ParameterOrReference[];
          requestBody?: RequestBodyOrReference;
          responses?: {
            default?: ResponseOrReference;
            [k: string]: unknown;
          };
          callbacks?: {
            [k: string]: CallbacksOrReference;
          };
          deprecated?: boolean;
          security?: SecurityRequirement[];
          servers?: {
            url: string;
            description?: string;
            variables?: {
              [k: string]: {
                /**
                 * @minItems 1
                 */
                enum?: [string, ...string[]];
                default: string;
                description?: string;
                /**
                 * This interface was referenced by `undefined`'s JSON-Schema definition
                 * via the `patternProperty` "^x-".
                 */
                [k: string]: unknown;
              };
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
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
    };
    [k: string]: unknown;
  };
  security?: SecurityRequirement[];
  tags?: {
    name: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
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
  externalDocs?: {
    description?: string;
    url: string;
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
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "parameter".
 */
export type Parameter = {
  [k: string]: unknown;
};
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "media-type".
 */
export type MediaType = SpecificationExtensions & Examples;
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "link".
 */
export type Link = {
  [k: string]: unknown;
};
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "header".
 */
export type Header = {
  [k: string]: unknown;
};
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "schema".
 */
export type Schema = {} | boolean;
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "security-scheme".
 */
export type SecurityScheme = SpecificationExtensions & {
  [k: string]: unknown;
};

/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "parameter-or-reference".
 */
export interface ParameterOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "request-body-or-reference".
 */
export interface RequestBodyOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[1-5](?:[0-9]{2}|XX)$".
 *
 * This interface was referenced by `Responses`'s JSON-Schema definition
 * via the `patternProperty` "^[1-5](?:[0-9]{2}|XX)$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "response-or-reference".
 */
export interface ResponseOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "callbacks-or-reference".
 */
export interface CallbacksOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "security-requirement".
 */
export interface SecurityRequirement {
  [k: string]: string[];
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "example-or-reference".
 */
export interface ExampleOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "header-or-reference".
 */
export interface HeaderOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "security-scheme-or-reference".
 */
export interface SecuritySchemeOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "link-or-reference".
 */
export interface LinkOrReference {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "info".
 */
export interface Info {
  title: string;
  summary?: string;
  description?: string;
  termsOfService?: string;
  contact?: {
    name?: string;
    url?: string;
    email?: string;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  license?: {
    name: string;
    identifier?: string;
    url?: string;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  version: string;
  /**
   * This interface was referenced by `Info`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "contact".
 */
export interface Contact {
  name?: string;
  url?: string;
  email?: string;
  /**
   * This interface was referenced by `Contact`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "license".
 */
export interface License {
  name: string;
  identifier?: string;
  url?: string;
  /**
   * This interface was referenced by `License`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "server".
 */
export interface Server {
  url: string;
  description?: string;
  variables?: {
    [k: string]: {
      /**
       * @minItems 1
       */
      enum?: [string, ...string[]];
      default: string;
      description?: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
  };
  /**
   * This interface was referenced by `Server`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "server-variable".
 */
export interface ServerVariable {
  /**
   * @minItems 1
   */
  enum?: [string, ...string[]];
  default: string;
  description?: string;
  /**
   * This interface was referenced by `ServerVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "components".
 */
export interface Components {
  schemas?: {
    [k: string]: unknown;
  };
  responses?: {
    [k: string]: ResponseOrReference;
  };
  parameters?: {
    [k: string]: ParameterOrReference;
  };
  examples?: {
    [k: string]: ExampleOrReference;
  };
  requestBodies?: {
    [k: string]: RequestBodyOrReference;
  };
  headers?: {
    [k: string]: HeaderOrReference;
  };
  securitySchemes?: {
    [k: string]: SecuritySchemeOrReference;
  };
  links?: {
    [k: string]: LinkOrReference;
  };
  callbacks?: {
    [k: string]: CallbacksOrReference;
  };
  pathItems?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^/".
     *
     * This interface was referenced by `Paths`'s JSON-Schema definition
     * via the `patternProperty` "^/".
     */
    [k: string]: {
      $ref?: string;
      summary?: string;
      description?: string;
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
        };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      }[];
      parameters?: ParameterOrReference[];
      get?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      put?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      post?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      delete?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      options?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      head?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      patch?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
      trace?: {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: {
          description?: string;
          url: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
        operationId?: string;
        parameters?: ParameterOrReference[];
        requestBody?: RequestBodyOrReference;
        responses?: {
          default?: ResponseOrReference;
          [k: string]: unknown;
        };
        callbacks?: {
          [k: string]: CallbacksOrReference;
        };
        deprecated?: boolean;
        security?: SecurityRequirement[];
        servers?: {
          url: string;
          description?: string;
          variables?: {
            [k: string]: {
              /**
               * @minItems 1
               */
              enum?: [string, ...string[]];
              default: string;
              description?: string;
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` "^x-".
               */
              [k: string]: unknown;
            };
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
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "paths".
 */
export interface Paths {
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "path-item".
 */
export interface PathItem {
  $ref?: string;
  summary?: string;
  description?: string;
  servers?: {
    url: string;
    description?: string;
    variables?: {
      [k: string]: {
        /**
         * @minItems 1
         */
        enum?: [string, ...string[]];
        default: string;
        description?: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
    };
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  }[];
  parameters?: ParameterOrReference[];
  get?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  put?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  post?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  delete?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  options?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  head?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  patch?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
  trace?: {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: {
      description?: string;
      url: string;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    };
    operationId?: string;
    parameters?: ParameterOrReference[];
    requestBody?: RequestBodyOrReference;
    responses?: {
      default?: ResponseOrReference;
      [k: string]: unknown;
    };
    callbacks?: {
      [k: string]: CallbacksOrReference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
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
   * This interface was referenced by `PathItem`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "operation".
 */
export interface Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: {
    description?: string;
    url: string;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  operationId?: string;
  parameters?: ParameterOrReference[];
  requestBody?: RequestBodyOrReference;
  responses?: {
    default?: ResponseOrReference;
    [k: string]: unknown;
  };
  callbacks?: {
    [k: string]: CallbacksOrReference;
  };
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: {
    url: string;
    description?: string;
    variables?: {
      [k: string]: {
        /**
         * @minItems 1
         */
        enum?: [string, ...string[]];
        default: string;
        description?: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
    };
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  }[];
  /**
   * This interface was referenced by `Operation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "external-documentation".
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
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "request-body".
 */
export interface RequestBody {
  description?: string;
  content: Content;
  required?: boolean;
  /**
   * This interface was referenced by `RequestBody`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "content".
 */
export interface Content {
  [k: string]: MediaType;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "specification-extensions".
 */
export interface SpecificationExtensions {
  /**
   * This interface was referenced by `SpecificationExtensions`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "examples".
 */
export interface Examples {
  example?: unknown;
  examples?: {
    [k: string]: ExampleOrReference;
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "encoding".
 */
export interface Encoding {
  contentType?: string;
  headers?: {
    [k: string]: HeaderOrReference;
  };
  style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject";
  explode?: boolean;
  allowReserved?: boolean;
  /**
   * This interface was referenced by `Encoding`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "responses".
 */
export interface Responses {
  default?: ResponseOrReference;
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "response".
 */
export interface Response {
  description: string;
  headers?: {
    [k: string]: HeaderOrReference;
  };
  content?: Content;
  links?: {
    [k: string]: LinkOrReference;
  };
  /**
   * This interface was referenced by `Response`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "callbacks".
 */
export interface Callbacks {
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^/".
   *
   * This interface was referenced by `Paths`'s JSON-Schema definition
   * via the `patternProperty` "^/".
   */
  [k: string]: {
    $ref?: string;
    summary?: string;
    description?: string;
    servers?: {
      url: string;
      description?: string;
      variables?: {
        [k: string]: {
          /**
           * @minItems 1
           */
          enum?: [string, ...string[]];
          default: string;
          description?: string;
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^x-".
           */
          [k: string]: unknown;
        };
      };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^x-".
       */
      [k: string]: unknown;
    }[];
    parameters?: ParameterOrReference[];
    get?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    put?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    post?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    delete?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    options?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    head?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    patch?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
    trace?: {
      tags?: string[];
      summary?: string;
      description?: string;
      externalDocs?: {
        description?: string;
        url: string;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^x-".
         */
        [k: string]: unknown;
      };
      operationId?: string;
      parameters?: ParameterOrReference[];
      requestBody?: RequestBodyOrReference;
      responses?: {
        default?: ResponseOrReference;
        [k: string]: unknown;
      };
      callbacks?: {
        [k: string]: CallbacksOrReference;
      };
      deprecated?: boolean;
      security?: SecurityRequirement[];
      servers?: {
        url: string;
        description?: string;
        variables?: {
          [k: string]: {
            /**
             * @minItems 1
             */
            enum?: [string, ...string[]];
            default: string;
            description?: string;
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^x-".
             */
            [k: string]: unknown;
          };
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
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "example".
 */
export interface Example {
  summary?: string;
  description?: string;
  value?: unknown;
  externalValue?: string;
  /**
   * This interface was referenced by `Example`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "tag".
 */
export interface Tag {
  name: string;
  description?: string;
  externalDocs?: {
    description?: string;
    url: string;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  /**
   * This interface was referenced by `Tag`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "reference".
 */
export interface Reference {
  $ref?: string;
  summary?: string;
  description?: string;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "oauth-flows".
 */
export interface OauthFlows {
  implicit?: {
    authorizationUrl: string;
    refreshUrl?: string;
    scopes: MapOfStrings;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  password?: {
    tokenUrl: string;
    refreshUrl?: string;
    scopes: MapOfStrings;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  clientCredentials?: {
    tokenUrl: string;
    refreshUrl?: string;
    scopes: MapOfStrings;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  authorizationCode?: {
    authorizationUrl: string;
    tokenUrl: string;
    refreshUrl?: string;
    scopes: MapOfStrings;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^x-".
     */
    [k: string]: unknown;
  };
  /**
   * This interface was referenced by `OauthFlows`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "map-of-strings".
 */
export interface MapOfStrings {
  [k: string]: string;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema
 * via the `definition` "explode-for-form".
 */
export interface ExplodeForForm {
  [k: string]: unknown;
}
