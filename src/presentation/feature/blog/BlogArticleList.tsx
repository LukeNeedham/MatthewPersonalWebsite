import { Box } from '@chakra-ui/react'
import { BlogArticleListItem } from '@/presentation/feature/blog/BlogArticleListItem'
import type { BlogArticleItem } from '@/presentation/feature/blog/BlogUiState'

interface Props {
  articles: BlogArticleItem[]
}

/** The articles as a ruled index, like the contents of a drawing set. */
export function BlogArticleList({ articles }: Props) {
  return (
    <Box as="ul" listStyleType="none" m="0" p="0" borderTop="1px solid #1a1a1a">
      {articles.map((it) => (
        <BlogArticleListItem key={it.id} article={it} />
      ))}
    </Box>
  )
}
