import { Box, Button, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import type { HomeUiState } from '@/presentation/feature/home/HomeUiState'

interface Props {
  uiState: HomeUiState
}

/** All of the UI of the home page. Stateless: state comes down, events go up. */
export function HomePageContent({ uiState }: Props) {
  return (
    <RootScaffold>
      <VStack gap="12px">
        <Text as="h1" textStyle="mainTitle" textAlign="center">
          {uiState.name}
        </Text>
        <Text as="p" textStyle="subTitle" textAlign="center">
          {uiState.role}
        </Text>
        <Box pt={{ base: '28px', md: '40px' }}>
          <Button
            asChild
            variant="outline"
            textStyle="label"
            h="auto"
            px="32px"
            py="12px"
            borderRadius="0"
            borderColor="#1a1a1a"
            color="#1a1a1a"
            transition="background 0.2s, color 0.2s"
            _hover={{ background: '#1a1a1a', color: '#fff' }}
          >
            <NextLink href={uiState.blogHref}>Blog</NextLink>
          </Button>
        </Box>
      </VStack>
    </RootScaffold>
  )
}
