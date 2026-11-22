import { ChakraProvider } from '@chakra-ui/react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { HomePageContent } from '@/presentation/feature/home/HomePageContent'
import { system } from '@/presentation/theme/system'

afterEach(cleanup)

test('shows the state it is given', () => {
  render(
    <ChakraProvider value={system}>
      <HomePageContent uiState={{ name: 'Name', role: 'Role' }} />
    </ChakraProvider>,
  )

  expect(screen.getByText('Name')).toBeDefined()
  expect(screen.getByText('Role')).toBeDefined()
})
