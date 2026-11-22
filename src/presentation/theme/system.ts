import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Text is never sized in a component: a component picks one of these styles with `textStyle`
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-cv), Georgia, serif' },
        body: { value: 'var(--font-cv), Georgia, serif' },
      },
    },
    textStyles: {
      mainTitle: {
        value: {
          fontWeight: '600',
          letterSpacing: '0.02em',
          fontSize: { base: '40px', sm: '50px', lg: '55px', xl: '60px' },
          lineHeight: { base: '44px', sm: '54px', lg: '60px', xl: '66px' },
        },
      },
      subTitle: {
        value: {
          fontWeight: '400',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontSize: { base: '16px', sm: '20px', lg: '24px', xl: '26px' },
          lineHeight: { base: '25px', sm: '30px', lg: '40px', xl: '45px' },
        },
      },
      // A heading in small capitals: section headings, dates and links back
      label: {
        value: {
          fontWeight: '600',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontSize: { base: '13px', md: '15px' },
          lineHeight: '24px',
        },
      },
      // The title of one item in a list
      itemTitle: {
        value: {
          fontWeight: '600',
          letterSpacing: '0.01em',
          fontSize: { base: '26px', md: '32px' },
          lineHeight: { base: '30px', md: '38px' },
        },
      },
      // The text of an article, set a little larger and looser than `body` for reading
      reading: {
        value: {
          fontWeight: '400',
          fontSize: { base: '18px', md: '21px' },
          lineHeight: { base: '29px', md: '34px' },
        },
      },
      body: {
        value: {
          fontWeight: '300',
          fontSize: { base: '14px', sm: '16px', lg: '18px', xl: '20px' },
        },
      },
      fine: {
        value: {
          fontWeight: '300',
          fontSize: { base: '12px', md: '16px' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
