import path from 'path'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-react-i18next'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal (config) {
    // eslint-disable-next-line
    config.resolve!.alias = {
      '@': path.resolve(__dirname, '..', '..', 'src')
    }
    config.define = {
      'process.env': {},
      __IS_DEV__: true
    }
    return config
  }
}
export default config
