import { Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface BackLinkData {
  label: string
  href: string
}

/** A small link back to the page this one came from. */
export function BackLink({ label, href }: BackLinkData) {
  return (
    <NextLink href={href} style={{ textDecoration: 'none' }}>
      <Text
        as="span"
        textStyle="label"
        color="#5a5a5a"
        transition="color 0.2s"
        _hover={{ color: '#1a1a1a' }}
      >
        ← {label}
      </Text>
    </NextLink>
  )
}
