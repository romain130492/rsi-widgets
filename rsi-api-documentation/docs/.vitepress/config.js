
module.exports = {
  lang: 'en-US',
  title: 'Akkadu ⚡ RSI API',
  description: 'Integrate simultaneous interpretation with Akkadu RSI API',
  themeConfig: {
    docsDir: 'rsi-api-documentation/docs/',
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/Akkadu/rsi-api-widgets',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsBranch: 'main',

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
        { text: 'Our API', link: '/' },
        { text: 'Create an API Key', link: '/getting-started/api-key' },
        { text: '🔹 React', link: '/getting-started/react' },
        { text: '🔹 Vue', link: '/getting-started/vue' },
        { text: '🔹 Vanilla Javascript', link: '/getting-started/vanilla-js' },
      ]
    },
    {
      text: 'Interpretation Manager',
      children: [
        { text: 'How does it works ?', link: '/interpretation-manager/index' },
        { text: 'Properties', link: '/interpretation-manager/props' },
        { text: 'Events', link: '/interpretation-manager/events' },
      ]
    },
    {
      text: 'Interpretation Player',
      children: [
        { text: 'How does it works ?', link: '/interpretation-player/index' },
        { text: 'Properties', link: '/interpretation-player/props' },
        { text: 'Events', link: '/interpretation-player/events' },
        { text: 'Room Name', link: '/interpretation-player/roomname' },
        { text: 'Refresh Button', link: '/interpretation-player/refresh' },
        { text: 'Demo', link: '/interpretation-player/demo' },
        { text: 'Error Messages', link: '/interpretation-player/errors' }
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

