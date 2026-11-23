import { renderHook } from '@testing-library/react'
import { expect, test } from 'vitest'
import { useHomeViewModel } from '@/presentation/feature/home/useHomeViewModel'

test('shows the name and role, and links to the blog', () => {
  const { result } = renderHook(() => useHomeViewModel())

  expect(result.current.uiState).toEqual({
    name: 'Matthew J. Needham',
    role: 'Architect',
    blogHref: '/blog',
  })
})
