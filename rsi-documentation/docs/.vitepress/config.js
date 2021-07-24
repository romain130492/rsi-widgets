
module.exports = {
  lang: 'en-US',
  title: 'Akkadu ⚡ RSI SDK',
  description: 'Integrate simultaneous interpretation with Akkadu RSI SDK',
  themeConfig: {
    docsDir: 'rsi-documentation/docs/',
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/Akkadu/rsi-widgets',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsBranch: 'main',

    nav: [
      { text: 'Getting Started', link: '/', activeMatch: '^/$|^/getting-started/' },
      {
        text: '🏠 Homepage',
        link: 'https://rsi.akkadu.com/'
      },
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
        { text: 'Our SDK', link: '/' },
        { text: 'Create a SDK Key', link: '/getting-started/sdk-key' },
        { text: '🔹 Quick implementation', link: '/getting-started/quick-implementation' },
        { text: '🔹 React', link: '/getting-started/react' },
        { text: '🔹 Vue', link: '/getting-started/vue' },
        { text: '🔹 Vanilla Javascript', link: '/getting-started/vanilla-js' },
        { text: 'Versions',
               children: [
                 { text: 'Vanilla Javascript', link: '/vanilla-js/versions' },
                 ]             
             },
      ]
    },
    {
      text: 'Interpretation Manager',
      children: [
        { text: 'How does it works ?', link: '/interpretation-manager/index' },
        { text: 'Properties', link: '/interpretation-manager/props' },
        { text: 'Events', link: '/interpretation-manager/events' },
        { text: 'Translation Agencies', link: '/interpretation-manager/agencies' },
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
        { text: '⚡ Demo', link: '/interpretation-player/demo' },
        { text: 'Error Messages', link: '/interpretation-player/errors' }
      ]
    },
    {
      text: 'Interpreters',
      children: [
        { text: 'Managing the Interpreters', link: '/interpreters/index' },
        { text: 'Where will the interpreters interpret?', link: '/interpreters/index#where-will-the-interpreters-interpret' },
        { text: 'External Stream', link: '/interpreters/index#external-stream' },
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

