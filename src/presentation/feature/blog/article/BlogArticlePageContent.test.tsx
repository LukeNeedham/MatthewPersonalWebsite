import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { BlogArticlePageContent } from '@/presentation/feature/blog/article/BlogArticlePageContent'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

test('shows the title, the date and the html of the article', () => {
  renderWithChakra(
    <BlogArticlePageContent
      uiState={{
        title: 'A post',
        date: '7 November 2026',
        contentHtml: '<p>Some <strong>bold</strong> words</p>',
      }}
    />,
  )

  expect(screen.getByRole('heading', { name: 'A post' })).toBeDefined()
  expect(screen.getByText('7 November 2026')).toBeDefined()
  expect(screen.getByText('bold').tagName).toBe('STRONG')
})

test('links back to the list of articles', () => {
  renderWithChakra(<BlogArticlePageContent uiState={{ title: 'A post', date: '' }} />)

  expect(screen.getByRole('link', { name: /All articles/ }).getAttribute('href')).toBe('/blog')
})

test('an article that does not exist shows no content', () => {
  const { container } = renderWithChakra(
    <BlogArticlePageContent uiState={{ title: 'Article not found', date: '' }} />,
  )

  expect(screen.getByRole('heading', { name: 'Article not found' })).toBeDefined()
  expect(container.querySelector('.blog-article-content')).toBeNull()
})
