interface PageOgImageOptions {
  title: string
  description?: string
  cta?: string
  image?: {
    src: string
    alt: string
  }
}

export function usePageOgImage(options: PageOgImageOptions) {
  defineOgImage('Personal.takumi', {
    title: options.title,
    description: options.description,
    cta: options.cta,
    image: options.image?.src
  }, {
    width: 1200,
    height: 630,
    alt: options.image?.alt || `${options.title} by Adam Menczykowski`
  })
}
