export default defineAppConfig({
  global: {
    siteUrl: 'https://adammenczykowski.com',
    picture: {
      dark: '/adam-menczykowski-croatia-beer.webp',
      light: '/adam-menczykowski-croatia-beer.webp',
      alt: 'Portrait of Adam Menczykowski'
    },
    meetingLink: 'mailto:adam@youi.design',
    email: 'adam@youi.design',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `© Adam Menczykowski ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-lucide-link',
        'to': '/links',
        'title': 'Links',
        'aria-label': 'Adam\'s links'
      },
      {
        'icon': 'i-lucide-rocket',
        'to': 'https://youi.design',
        'target': '_blank',
        'title': 'You I Limited',
        'aria-label': 'You I Limited'
      }, {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/adammench',
        'target': '_blank',
        'aria-label': 'Adam on X',
        'title': 'Adam on X'
      }, {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/admench',
        'target': '_blank',
        'aria-label': 'Adam on GitHub',
        'title': 'Adam on GitHub'
      }]
  }
})
