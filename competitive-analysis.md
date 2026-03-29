# Competitive Landscape — OpenAPI Transformation Toolkit
### Market analysis & differentiation report

**Status:** Research  
**Last updated:** March 2026

---

## Overview

The OpenAPI tooling space splits into two very different camps. One camp is enterprise SDK generation platforms (Speakeasy, Stainless, Fern, APIMatic, liblab) — cloud-hosted, expensive, opinionated, aimed at API *producers* who want to publish polished SDKs to external developers. The other camp is lightweight open-source packages (widdershins, openapi-typescript, orval, openapi-to-md) — single-purpose, no-frills, local, no account required.

What does not exist today is a **composable local CLI** that chains filtering + multi-format output (docs, types, schemas, client) as a single developer workflow. That is the gap this project fills.

---

## Competitor profiles

### 1. Widdershins

**Type:** Open-source npm package / CLI  
**Repo:** github.com/Mermade/widdershins  
**Focus:** OpenAPI / Swagger / AsyncAPI → Slate-compatible Markdown

Widdershins was the original go-to for OpenAPI-to-markdown conversion. It uses doT templates and is built to feed into Slate or ReSlate for generating full documentation websites. It is highly configurable — multi-language code samples, custom templates, Authorization header generation, `x-code-samples` extension support.

**What it does:**
- OpenAPI 2/3, AsyncAPI, API Blueprint → markdown
- Multi-language code samples (curl, JS, Python, etc.)
- Fully template-driven with doT
- CLI + Node.js API

**What it does not do:**
- No filtering — always converts the entire spec
- No TypeScript types output
- No Zod schema output
- No SDK client generation
- Templates are doT (not TypeScript-native), complex to customise
- Markdown is Slate-flavoured, requires extra setup for generic use
- No config file — all flags at CLI invocation

**Verdict:** Heavy, legacy, template system is dated. The `@scalar/openapi-to-markdown` package you already use is a cleaner modern replacement for the markdown output alone.

---

### 2. @scalar/openapi-to-markdown

**Type:** Open-source npm package  
**Focus:** OpenAPI → LLM-friendly markdown (llms.txt proposal)

This is the package you are already using. Scalar built it primarily for the `/llms.txt` use case — giving LLMs a readable, structured version of an API spec. It is minimal, well-maintained, and produces clean output.

**What it does:**
- OpenAPI 3.x → markdown
- LLM-optimised output format
- Node.js API only (no CLI of its own)

**What it does not do:**
- No CLI
- No filtering
- No other output types
- No config file
- Completely single-purpose

**Verdict:** This is a building block, not a tool. Your project wraps it and extends it.

---

### 3. swagger-markdown / openapi-to-md / openapi-markdown

**Type:** Open-source npm packages  
**Focus:** Simple OpenAPI → markdown conversion

A cluster of smaller packages solving the same basic problem. `swagger-markdown` supports OpenAPI 2/3 and includes webhooks for 3.1. `openapi-to-md` adds TypeScript-style interface output and remote URL fetching. `openapi2markdown` adds tolerant parsing for malformed specs.

**What they do:**
- Basic OpenAPI → markdown in various flavours
- Some support YAML + JSON
- Some support remote URLs

**What they do not do:**
- No filtering
- No other output types (types, schemas, client)
- Mostly abandoned or low-maintenance (some last published 6 years ago)
- No programmatic API pipeline

**Verdict:** Fragmented, low-quality alternatives. Not real competition.

---

### 4. openapi-typescript

**Type:** Open-source npm package + CLI  
**Focus:** OpenAPI 3.x → zero-runtime TypeScript types

One of the best single-purpose tools in the space. Generates `.d.ts` type files at remarkable speed (~250ms for the Petstore spec). Works with `openapi-fetch` for type-safe HTTP clients. Used widely in production.

**What it does:**
- OpenAPI 3.x → TypeScript interfaces and types
- CLI + Node.js API
- Remote URL + auth header support
- `redocly.yaml` integration for multi-schema projects
- Custom transform hooks (e.g. `date-time` → `Date`)

**What it does not do:**
- No markdown output
- No Zod schemas
- No SDK client generation
- No filtering by tag, path, or method
- Requires `redocly.yaml` for multi-schema — no standalone config file

**Verdict:** This is a dependency in your project, not a competitor. Your filter-first approach gives it a capability it fundamentally lacks.

---

### 5. orval

**Type:** Open-source npm package + CLI  
**Focus:** OpenAPI → TypeScript clients + React Query / SWR hooks + Zod schemas

Orval is the most feature-complete open-source output generator. It can produce Axios clients, Fetch clients, React Query hooks, SWR hooks, Zod schemas, and MSW mocks from a single spec. Well-maintained, active community.

**What it does:**
- OpenAPI 2/3 → TypeScript types, Zod schemas, fetch/Axios clients
- React Query and SWR hooks generation
- MSW mock server generation
- Multiple output targets from one config
- orval.config.ts support

**What it does not do:**
- No markdown output
- No filtering by tag/path/method before generation
- No AI enrichment
- Config is output-type-focused, not pipeline-focused
- No spec validation step

**Verdict:** Closest open-source competitor for the types/schemas/client side. Weak on documentation output and has no filtering. Your project can use orval as an optional transformer internally.

---

### 6. @hey-api/openapi-ts

**Type:** Open-source npm package + CLI  
**Focus:** OpenAPI → SDK clients, types, Zod, TanStack Query hooks

Used by Vercel, PayPal, and OpenCode. Plugin-based architecture allows generating multiple output types. Heavier than `openapi-typescript` but more complete.

**What it does:**
- OpenAPI 3.x → TypeScript SDK clients
- Plugin system: Zod, TanStack Query, Axios, Fetch
- CLI + `openapi-ts.config.ts`
- Active maintenance, large community

**What it does not do:**
- No markdown output
- No filtering
- Plugin system is for output format, not pre-processing
- No AI enrichment

**Verdict:** A dependency option in your project for the SDK output mode. Not a full-pipeline competitor.

---

### 7. Redocly CLI

**Type:** Open-source CLI + commercial hosted platform  
**Focus:** OpenAPI linting, bundling, splitting, docs hosting

Redocly is the most complete *OpenAPI management* tool in the open-source space. It handles linting, bundling multi-file specs, splitting large specs, and generating Redoc-based documentation. The CLI is genuinely powerful.

**What it does:**
- Lint OpenAPI against 100+ rules
- Bundle multi-file specs into one
- Split monolithic specs into files
- Generate Redoc HTML documentation
- `redocly.yaml` config
- OpenAPI 3.2 support (hierarchical tags, streaming APIs)

**What it does not do:**
- No TypeScript types generation
- No Zod schemas
- No SDK client generation
- No AI enrichment
- Documentation output is HTML/hosted, not portable markdown
- Filtering is basic (decorator-based, not tag/path/method CLI flags)

**Verdict:** Complementary, not competing. Your project could use `@redocly/openapi-core` for validation internally.

---

### 8. Speakeasy

**Type:** Commercial SaaS  
**Pricing:** Paid (free tier limited)  
**Focus:** Enterprise SDK generation from OpenAPI

Speakeasy is OpenAPI-native and feature-complete for enterprise SDK use. It generates production-ready SDKs with runtime Zod validation, OAuth 2.0, SSE, pagination, webhooks, and tree-shaking. CI/CD integrated via GitHub Actions.

**What it does:**
- OpenAPI 3.x → TypeScript, Python, Go, Java, C#, PHP, Ruby SDKs
- Runtime Zod validation in generated SDKs
- OAuth 2.0, SSE, pagination, webhooks out of the box
- Speakeasy-hosted CI/CD for versioned SDK publishing
- OpenAPI linting and overlays
- CLI-driven

**What it does not do:**
- No markdown documentation output
- No partial spec filtering (you must maintain separate specs per audience)
- Requires a Speakeasy account and API key
- Cannot run fully offline / air-gapped (free tier)
- No Zod schema output as a standalone artifact
- Cost: commercial for anything beyond the free tier

**Verdict:** Enterprise product targeting API producers with dedicated DevRel teams. Completely out of scope for local developer workflows or open-source projects.

---

### 9. Stainless

**Type:** Commercial SaaS  
**Pricing:** Paid  
**Focus:** Polished SDK generation, used by Anthropic, OpenAI, Cloudflare, Google

Stainless is the most quality-focused SDK generator. Its SDKs are downloaded over 130 million times per week. It uses a custom DSL (stainless config) on top of OpenAPI as its generation layer. UI-first — upload spec, get SDK in 28 seconds.

**What it does:**
- OpenAPI → TypeScript, Python, Go, Java, Ruby, C# SDKs
- Terraform provider generation
- MCP server generation
- CLI tools generation
- Compile-time type safety (no Zod runtime overhead)
- VS Code extension with AI-assisted diagnostics

**What it does not do:**
- No markdown documentation output
- No filtering — requires separate spec files per audience
- Requires a Stainless account
- Custom DSL adds configuration overhead
- Webhook support not built in (developers implement manually)

**Verdict:** Premium enterprise product. Same audience as Speakeasy but more focused on SDK quality over feature count.

---

### 10. Fern

**Type:** Commercial SaaS + open-source CLI  
**Pricing:** Free tier + paid  
**Focus:** SDK generation + docs, acquired by Postman

Fern is the most developer-friendly of the enterprise platforms. CLI-driven (no UI required), supports `x-fern-audiences` for multi-audience filtering within a single spec, generates docs alongside SDKs automatically.

**What it does:**
- OpenAPI, AsyncAPI, gRPC → TypeScript, Python, Go, Java, Ruby, C#, PHP SDKs
- `x-fern-audiences` tag for multi-audience SDK variants from one spec
- Auto-generated docs site alongside SDK
- Semantic versioning + npm/PyPI publishing automated
- OAuth 2.0, SSE, auto-pagination

**What it does not do:**
- No standalone markdown output
- No Zod schema artifact
- No TypeScript types-only output
- Audience filtering requires annotating the OpenAPI spec with Fern extensions
- Docs output is a hosted Fern site, not portable markdown
- Free tier limited; full CI/CD publishing is paid

**Verdict:** The closest to your vision among enterprise tools — multi-audience filtering from one spec is exactly the problem you solve. But it is a platform (requires account, hosting), not a local CLI. And it does nothing for documentation-as-markdown, types, or schemas as standalone outputs.

---

### 11. APIMatic

**Type:** Commercial SaaS  
**Pricing:** Paid  
**Focus:** SDK generation + full API portal

APIMatic is the most comprehensive hosted platform — it generates SDKs, documentation, and even validates API specs with 400+ linting rules. Supports the widest format range (OpenAPI, Postman, RAML, WSDL, API Blueprint).

**What it does:**
- 400+ linting rules, auto-fix common issues
- OpenAPI, RAML, Postman, WSDL → SDKs in 7 languages
- Full API portal / documentation site
- VS Code extension
- SDK + docs generated in a single step

**What it does not do:**
- No portable markdown output
- No filtering below the portal level
- No TypeScript types-only or Zod schemas as standalone outputs
- Fully hosted — nothing runs locally
- Expensive at scale

**Verdict:** Enterprise portal product. Not competing with a local CLI.

---

### 12. OpenAPI Generator

**Type:** Open-source (Java-based)  
**Focus:** Code generation for 50+ languages

The oldest and broadest tool in the space. 600k weekly npm downloads via the CLI wrapper. Generates client SDKs, server stubs, and documentation for over 50 languages.

**What it does:**
- 50+ language generators (TypeScript, Python, Go, Java, PHP, Ruby, Rust, and many more)
- Server stub generation
- Documentation generation (HTML)
- Free, open-source, no account

**What it does not do:**
- No markdown output suitable for LLMs or GitHub
- No Zod schemas
- No filtering
- Java runtime required for local generation
- Output is often non-idiomatic — feels Java-like in every language
- 4,500+ open GitHub issues as of early 2025; maintenance burden is high
- Templates are Mustache-based, complex to customise

**Verdict:** Broad but low-quality. The Java requirement and non-idiomatic output are dealbreakers for most TypeScript-first teams.

---

## Feature comparison matrix

| Feature | Your project | Widdershins | Scalar/openapi-to-md | openapi-typescript | orval | Redocly CLI | Fern | Speakeasy | Stainless |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Markdown output | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| TypeScript types | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Zod schemas | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ (runtime) | ❌ |
| SDK client | ✅ (optional) | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ |
| Filter by tag | ✅ | ❌ | ❌ | ❌ | ❌ | partial | ✅ (x-fern) | ❌ | ❌ |
| Filter by path/method | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Filter by flag (x-internal) | ✅ | ❌ | ❌ | ❌ | ❌ | partial | ❌ | ❌ | ❌ |
| Multiple outputs in one run | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ |
| Config file (TS) | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| No account required | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | partial | ❌ | ❌ |
| Runs fully offline | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| AI enrichment | 🔜 v2 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | partial |
| Programmatic Node.js API | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Free and open-source | ✅ | ✅ | ✅ | ✅ | ✅ | partial | partial | ❌ | ❌ |
| LLM-friendly output | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## Where the gap is

Every tool in the space does one thing well. None of them chains filtering + multi-format output in a single developer-controlled, offline, open-source workflow.

The enterprise platforms (Fern, Speakeasy, Stainless) have some filtering capability but it requires annotating your spec with their proprietary extensions, creating a hosted account, and outputting to their platform — not to local files in your repo.

The open-source packages (openapi-typescript, orval, widdershins) are all single-purpose. A team that needs markdown + types + Zod today runs three separate tools, three separate config files, three separate CI steps — with no shared filter layer, meaning the filtering logic (if any) must be duplicated or the outputs are inconsistent.

The concrete gaps your project exploits:

**Gap 1 — Filter-first.** No open-source tool lets you define "admin only" or "public only" as a first-class concept that flows through to every output type automatically. Fern does this, but only inside their platform and with their extensions.

**Gap 2 — Markdown + types in one command.** No tool produces both human-readable documentation and machine-usable types/schemas from the same filtered spec in one run. Teams currently maintain this as two separate pipelines.

**Gap 3 — LLM-friendly output.** The `/llms.txt` convention is emerging fast. No CLI tool targets this output format with filtering built in. You are already ahead here.

**Gap 4 — Local, offline, no account.** Every enterprise-quality multi-output tool requires a cloud account. Open-source tools are all single-purpose. Nothing spans both dimensions.

**Gap 5 — AI enrichment for descriptions.** Many specs have sparse or empty `description` fields. No open-source tool addresses this. Enterprise tools are starting to (Stainless has AI diagnostics) but not for description enrichment of documentation output.

---

## Strategic positioning

Your project is not competing with Speakeasy, Stainless, or Fern. Those are platforms for companies shipping public APIs to thousands of external developers. Your project is for developers who:

- Work inside an organisation with a monolithic OpenAPI spec
- Need to produce different documentation/type/schema subsets for different audiences (admin, partner, public)
- Want everything local, reproducible, CI-friendly, and free
- Are comfortable with a TypeScript config file and a CLI

The closest analogy in other ecosystems is what `tsup` did for bundling (composable, fast, zero-config by default, extends when needed) or what `biome` did for linting (replaces multiple tools with one). This project is the `tsup` of OpenAPI transformation — one tool, one config, all outputs.

---

## Sources

- npm package pages: `@scalar/openapi-to-markdown`, `openapi-typescript`, `orval`, `widdershins`, `swagger-markdown`, `openapi-to-md`
- Speakeasy blog: SDK generator comparisons (February 2026)
- Nordic APIs: Review of 8 SDK Generators (February 2025)
- Stainless docs: Stainless vs Speakeasy comparison (February 2026)
- Fern: Multi-Audience API Platforms analysis (December 2025)
- liblab: Best SDK Generator Tools 2025 (February 2025)
- Redocly blog: OpenAPI 3.2 support (September 2025)
