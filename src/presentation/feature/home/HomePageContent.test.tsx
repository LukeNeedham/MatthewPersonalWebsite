import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { HomePageContent } from '@/presentation/feature/home/HomePageContent'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

const uiState = { name: 'Name', role: 'Role', blogHref: '/blog' }

test('shows the state it is given', () => {
  renderWithChakra(<HomePageContent uiState={uiState} />)

  expect(screen.getByText('Name')).toBeDefined()
  expect(screen.getByText('Role')).toBeDefined()
})

test('has a button to the blog', () => {
  renderWithChakra(<HomePageContent uiState={uiState} />)

  expect(screen.getByRole('link', { name: 'Blog' }).getAttribute('href')).toBe('/blog')
})
