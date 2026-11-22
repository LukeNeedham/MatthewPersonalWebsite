import { expect, test } from 'vitest'
import { LocalDate } from '@/domain/model/LocalDate'

test('is written out in words', () => {
  expect(new LocalDate(7, 11, 2026).format()).toBe('7 November 2026')
  expect(new LocalDate(1, 1, 2025).format()).toBe('1 January 2025')
})
