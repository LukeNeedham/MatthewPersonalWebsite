import { Box, Flex, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { BlogArticleItem } from '@/presentation/feature/blog/BlogUiState'

interface Props {
  article: BlogArticleItem
}

export function BlogArticleListItem({ article }: Props) {
  return (
    <Box as="li" borderBottom="1px solid #d8d8d8">
      <NextLink href={article.href} style={{ display: 'block', textDecoration: 'none' }}>
        <Flex
          role="group"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '8px', md: '40px' }}
          py={{ base: '24px', md: '32px' }}
          px="8px"
          transition="background 0.2s"
          _hover={{ background: '#f4f4f2' }}
        >
          <Text textStyle="label" color="#5a5a5a" flexShrink={0} w={{ md: '190px' }} pt="6px">
            {article.date}
          </Text>
          <Box flex={1} minW="0">
            <Text as="h2" textStyle="itemTitle">
              {article.title}
            </Text>
            <Text textStyle="reading" color="#444" pt="8px">
              {article.summary}
            </Text>
          </Box>
          <Text
            display={{ base: 'none', md: 'block' }}
            textStyle="itemTitle"
            color="#1a1a1a"
            opacity={0}
            transform="translateX(-6px)"
            transition="opacity 0.2s, transform 0.2s"
            _groupHover={{ opacity: 1, transform: 'translateX(0)' }}
            aria-hidden
          >
            →
          </Text>
        </Flex>
      </NextLink>
    </Box>
  )
}
