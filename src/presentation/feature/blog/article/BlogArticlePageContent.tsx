import { RootScaffold } from '@/presentation/common/RootScaffold'
import { UrlProvider } from '@/domain/provider/UrlProvider'
import type { BlogArticleUiState } from '@/presentation/feature/blog/article/BlogArticleUiState'

interface Props {
  uiState: BlogArticleUiState
}

/** All of the UI of an article. The article is plain HTML, styled by the CSS that `scripts/build-blog.ts` generates. */
export function BlogArticlePageContent({ uiState }: Props) {
  return (
    <RootScaffold back={{ label: 'All articles', href: UrlProvider.blog }}>
      <article className="blog-article">
        <header className="blog-article-header">
          <h1 className="blog-article-title">{uiState.title}</h1>
          <p className="blog-article-date">{uiState.date}</p>
        </header>
        {uiState.contentHtml === undefined ? null : (
          <div
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: uiState.contentHtml }}
          />
        )}
      </article>
    </RootScaffold>
  )
}
