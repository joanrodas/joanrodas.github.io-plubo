const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Plubo',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#9633bf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Github',
        link: 'https://github.com/joanrodas/plubo'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '',
            'quick-start',
          ]
        },
        {
          title: 'The basics',
          collapsable: false,
          children: [
            'basics/',
            'basics/commands',
            'basics/javascript',
            'basics/scss',
            'basics/blade'
          ]
        },
        {
          title: 'Advanced topics',
          collapsable: true,
          children: [
            'advanced/libraries',
            'advanced/react'
          ]
        },
        {
          title: 'Routing',
          collapsable: true,
          children: [
            'routing/',
            'routing/advanced-options',
            'routing/redirect-routes',
            'routing/page-routes',
            'routing/action-routes'
          ]
        },
        {
          title: 'Help',
          collapsable: true,
          children: [
            'help/'
          ]
        }
      ]
    }
  },

  base: "/plubo-docs/",

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
