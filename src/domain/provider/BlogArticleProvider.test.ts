import { expect, test } from 'vitest'
import { BlogArticleProvider } from '@/domain/provider/BlogArticleProvider'

test('the newest article is first', () => {
  const dates = BlogArticleProvider.articles.map(
    (it) => it.publishDate.year * 10000 + it.publishDate.month * 100 + it.publishDate.day,
  )
  expect(dates).toEqual([...dates].sort((a, b) => b - a))
})

test('every id is unique, because it is the markdown file name and the address', () => {
  const ids = BlogArticleProvider.articles.map((it) => it.id)
  expect(new Set(ids).size).toBe(ids.length)
})

test('an article is found by its id, and an unknown id has none', () => {
  expect(BlogArticleProvider.getArticle('light-and-material')?.title).toBe('Light and Material')
  expect(BlogArticleProvider.getArticle('nothing-here')).toBeUndefined()
})

test('every article has the markdown it is made from', async () => {
  const fs = await import('node:fs')
  for (const article of BlogArticleProvider.articles) {
    expect(fs.existsSync(`content/blog/${article.id}.md`), article.id).toBe(true)
  }
})

test('every markdown file is listed, so none is written and then forgotten', async () => {
  const fs = await import('node:fs')
  const files = fs.readdirSync('content/blog').filter((it) => it.endsWith('.md'))
  const ids = BlogArticleProvider.articles.map((it) => it.id)
  expect(files.map((it) => it.replace(/\.md$/, '')).sort()).toEqual([...ids].sort())
})
