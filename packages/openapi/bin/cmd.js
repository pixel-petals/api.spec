#!/usr/bin/env node

/**
 * Populates the vendored OpenAPI schema tree.
 *
 *   schema/<version>/schema.{json,yaml}              the published schema
 *   schema/<version>/defs/<group>/<name>.{json,yaml} one per $ref-able object
 *
 * See readme.md.
 */

import { run } from '@px-petals/api.utils/spec/spec.cli'

import { openapi } from '#lib/openapi.spec'

run(openapi)
