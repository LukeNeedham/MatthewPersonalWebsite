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
