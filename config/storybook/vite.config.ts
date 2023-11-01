import path from 'path'
import { type InlineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export function buildViteConfig (config: InlineConfig): InlineConfig {
  // eslint-disable-next-line
  config.resolve!.alias = {
    '@': path.resolve(__dirname, '..', '..', 'src')
  }
  config.plugins?.push(
    svgr({
      include: '**/*.svg'
    })
  )
  config.define = {
    'process.env': {},
    __IS_DEV__: true
  }
  return config
}
