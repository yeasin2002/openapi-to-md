import { createMarkdownFromOpenApi } from '@scalar/openapi-to-markdown'
import fs from 'fs'

const openApi = JSON.parse(fs.readFileSync('./openapi.json', 'utf-8')) as unknown

  const markdown = await createMarkdownFromOpenApi(openApi)

  fs.writeFileSync('./api-docs.md', markdown)
