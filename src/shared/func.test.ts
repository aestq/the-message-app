import { expect, test } from 'vitest'
import { func } from './func.ts'

test('adds 1 + 2 to equal 3', () => {
  expect(func(1, 2)).toBe(3)
})