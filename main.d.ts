/*
 * SPDX-FileCopyrightText: 2024 KindSpells Labs S.L.
 *
 * SPDX-License-Identifier: MIT
 */

export type ShieldOptions = {
	/**
	 * Specifies the path for the auto-generated module that will contain the SRI
	 * hashes. Note that:
	 * - The generated module will be an ESM module
	 * - The generated module should be treated as source code, and not as a build
	 *   artifact.
	 */
	sriHashesModule?: string | undefined
}

export type StrictShieldOptions = ShieldOptions & { distDir: string }

type AstroBuildDoneOpts = {
	dir: URL
	logger: AstroIntegrationLogger
	pages: { pathname: string }[]
	routes: RouteData[]
}
export type Integration = {
	name: string
	hooks: { 'astro:build:done': (opts: AstroBuildDoneOpts) => Promise<void> }
}

export function shield(sriCspOptions: ShieldOptions): Integration

export default shield
