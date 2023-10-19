import { expect, test } from 'vitest'
import { classNames } from './classNames'

test('with first param', () => {
  expect(classNames('app')).toBe('app')
})

test('with mods', () => {
  expect(classNames(
    'app',
    { 'hovered': true, 'selected': false }
  )).toBe('app hovered')
})

test('with additional', () => {
  expect(classNames(
    'app',
    {},
    ['dark', 'size']
  )).toBe('app dark size')
})


test('with undefined', () => {
  expect(classNames(
    'app',
    { 'hovered': undefined, 'selected': undefined },
    [undefined, 'dark', undefined]
  )).toBe('app dark')
})

test('all', () => {
  expect(classNames(
    'app',
    { 'hovered': true, 'selected': true },
    ['dark', 'size']
  )).toBe('app dark size hovered selected')
})
