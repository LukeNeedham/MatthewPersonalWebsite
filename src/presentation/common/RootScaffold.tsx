import { Box, Center, Flex } from '@chakra-ui/react'
import { BackLink } from '@/presentation/common/BackLink'
import type { BackLinkData } from '@/presentation/common/BackLink'

interface Props {
  children: React.ReactNode
  /** A link in the top corner back to the page this one came from. Left out on the home page. */
  back?: BackLinkData
}

/** The layout shared by every page. */
export function RootScaffold({ children, back }: Props) {
  return (
    <Flex direction="column" w="full" minH="100vh">
      {back === undefined ? null : (
        <Box px={{ base: '5%', md: '10%' }} pt={{ base: '24px', md: '40px' }}>
          <BackLink {...back} />
        </Box>
      )}
      <Center flex={1}>
        <Box py="50px" w={{ base: '90%', md: '80%', lg: '70%' }}>
          {children}
        </Box>
      </Center>
    </Flex>
  )
}
