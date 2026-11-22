import { Box, Text, VStack } from '@chakra-ui/react'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import { UrlProvider } from '@/domain/provider/UrlProvider'
import { BlogArticleList } from '@/presentation/feature/blog/BlogArticleList'
import type { BlogUiState } from '@/presentation/feature/blog/BlogUiState'

interface Props {
  uiState: BlogUiState
}

/** All of the UI of the blog page. */
export function BlogPageContent({ uiState }: Props) {
  return (
    <RootScaffold back={{ label: 'Home', href: UrlProvider.home }}>
      <Box maxW="860px" mx="auto">
        <VStack gap="12px" pb={{ base: '40px', md: '60px' }}>
          <Text as="h1" textStyle="mainTitle" textAlign="center">
            Blog
          </Text>
          <Text as="p" textStyle="subTitle" textAlign="center">
            Notes and interests
          </Text>
        </VStack>
        <BlogArticleList articles={uiState.articles} />
      </Box>
    </RootScaffold>
  )
}
