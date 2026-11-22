import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { BlogPageContent } from '@/presentation/feature/blog/BlogPageContent'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

const articles = [
  {
    id: 'one',
    title: 'First post',
    summary: 'About the first',
    date: '7 November 2026',
    href: '/blog/one',
  },
  {
    id: 'two',
    title: 'Second post',
    summary: 'About the second',
    date: '1 January 2025',
    href: '/blog/two',
  },
]

test('lists every article with its date and summary, linked to its page', () => {
  renderWithChakra(<BlogPageContent uiState={{ articles }} />)

  expect(screen.getByRole('heading', { name: 'Blog' })).toBeDefined()
  expect(screen.getByText('7 November 2026')).toBeDefined()
  expect(screen.getByText('About the second')).toBeDefined()
  expect(screen.getByText('Second post').closest('a')?.getAttribute('href')).toBe('/blog/two')
})

test('links back to the home page', () => {
  renderWithChakra(<BlogPageContent uiState={{ articles }} />)

  expect(screen.getByRole('link', { name: /Home/ }).getAttribute('href')).toBe('/')
})

test('with no articles it still shows the page', () => {
  renderWithChakra(<BlogPageContent uiState={{ articles: [] }} />)
  expect(screen.getByRole('heading', { name: 'Blog' })).toBeDefined()
})
