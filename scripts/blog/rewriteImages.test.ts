import { expect, test } from 'vitest'
import { renderMarkdown } from './renderMarkdown'

test('an image of the content repo is served from the site', async () => {
  expect(await renderMarkdown('![Plan](../images/plan.png)')).toContain(
    'src="/blog-images/plan.png"',
  )
})

test('an image in raw html is rewritten too', async () => {
  expect(await renderMarkdown('<img src="../images/a.jpg" alt="A">')).toContain(
    'src="/blog-images/a.jpg"',
  )
})

test('any other image is left alone', async () => {
  expect(await renderMarkdown('![x](https://example.com/x.png)')).toContain(
    'src="https://example.com/x.png"',
  )
})
