import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const oldLinks: NavigationMenuItem[] = [
  {
    label: 'Speaking',
    icon: 'i-lucide-mic',
    to: '/speaking'
  },
  {
    label: 'Projects',
    icon: 'i-lucide-folder',
    to: '/projects'
  },
  {
    label: 'About',
    icon: 'i-lucide-user',
    to: '/about'
  },
  {
    label: 'Blog',
    icon: 'i-lucide-file-text',
    to: '/blog'
  }
]
