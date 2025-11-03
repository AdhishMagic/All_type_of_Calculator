import { copyFileSync, existsSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dist = resolve(__dirname, '..', 'dist')
const indexPath = resolve(dist, 'index.html')
const fourOhFourPath = resolve(dist, '404.html')

if (existsSync(indexPath)) {
  try {
    copyFileSync(indexPath, fourOhFourPath)
    console.log('Copied index.html -> 404.html')
  } catch (e) {
    console.error('Failed to copy 404.html:', e)
    process.exitCode = 1
  }
} else {
  console.warn('index.html not found, skipping 404 copy')
}
