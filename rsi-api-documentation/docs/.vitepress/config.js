
module.exports = {
  lang: 'en-US',
  title: 'Akkadu • RSI Api',
  description: 'Integrate simultaneous interpretation with Akkadu RSI Api',
  themeConfig: {
    docsDir: 'documentation',
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/Akkadu/rsi-api-widgets/tree/main/rsi-api-documentation',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    nav: [
      { text: 'Getting Started', link: '/', activeMatch: '^/$|^/getting-started/' },
      {
        text: 'Homepage',
        link: 'https://rsi.akkadu.com/'
      },
      { text: 'Login', link: 'https://rsi.akkadu.com/login' },
      { text: 'Register', link: 'https://rsi.akkadu.com/register'},
      { text: '✉️ Contact', link: 'mailto:contact@akkadu-team.com'},
    ],

    sidebar: {
      '/setup/': getSetupSidebar(),
      '/components/': getSetupSidebar(),
      '/': getSetupSidebar()
    }
  }
}

function getSetupSidebar() {
  return [
    {
      text: 'Getting Started',
      children: [
        { text: 'Our Api', link: '/' },
        { text: 'Create An Api Key', link: '/getting-started/api-key' },
        { text: 'With React', link: '/getting-started/react' },
        { text: 'With Vue', link: '/getting-started/vue' },
      ]
    },
    {
      text: 'Interpretation Manager',
      children: [
        { text: 'How does it works ?', link: '/interpretation-manager/index' },
        { text: 'Props', link: '/interpretation-manager/props' },
        { text: 'Events', link: '/interpretation-manager/events' },
      ]
    },
    {
      text: 'Interpretation Player',
      children: [
        { text: 'How does it works ?', link: '/interpretation-player/index' },
        { text: 'Props', link: '/interpretation-player/props' },
        { text: 'Events', link: '/interpretation-player/events' },
      ]
    },
    {
      text: 'Interpreters',
      children: [
        { text: 'Managing the Interpreters', link: '/interpreters/index' },
      ]
    },
    {
      text: 'Billing',
      children: [
        { text: 'How do we bill ?', link: '/billing/index' },
      ]
    },
  ]
}

