import type { StorybookConfig } from '@storybook/react-vite'
import { buildViteConfig } from './vite.config'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
    'storybook-addon-themes'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal (config) {
    return buildViteConfig(config)
  }
}
export default config
