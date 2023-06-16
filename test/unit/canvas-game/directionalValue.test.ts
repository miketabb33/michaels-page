import { calcNewBounceDirection, flipDirection } from '../../../src/canvas-game/directionalValue'
import { DirectionValue } from '../../../src/canvas-game/types/DirectionValue'

describe('Flip Direction', () => {
  it('should flip X positive', () => {
    const VALUE: DirectionValue = { x: 0.45, y: 0.55 }
    const result = flipDirection({ value: VALUE, flipX: true })
    expect(result).toEqual({ x: -0.45, y: 0.55 })
  })
  it('should flip X negative', () => {
    const VALUE: DirectionValue = { x: -0.45, y: 0.55 }
    const result = flipDirection({ value: VALUE, flipX: true })
    expect(result).toEqual({ x: 0.45, y: 0.55 })
  })
  it('should flip Y positive', () => {
    const VALUE: DirectionValue = { x: -0.45, y: 0.55 }
    const result = flipDirection({ value: VALUE, flipY: true })
    expect(result).toEqual({ x: -0.45, y: -0.55 })
  })
  it('should flip Y negative', () => {
    const VALUE: DirectionValue = { x: -0.45, y: -0.55 }
    const result = flipDirection({ value: VALUE, flipY: true })
    expect(result).toEqual({ x: -0.45, y: 0.55 })
  })
})

describe('Calc New Bounce Direction', () => {
  it('should return a upward moving direction value when given a NEGATIVE Y, based on POSITIVE X', () => {
    const newX = 0.35
    const oldY = -0.9
    const result = calcNewBounceDirection({ newX, oldY })
    expect(result).toEqual({ x: 0.35, y: 0.65 })
  })
  it('should return a upward moving direction value when given a NEGATIVE Y, based on NEGATIVE X', () => {
    const newX = -0.35
    const oldY = -0.9
    const result = calcNewBounceDirection({ newX, oldY })
    expect(result).toEqual({ x: -0.35, y: 0.65 })
  })
  it('should return a downward moving direction value when given a POSITIVE Y, based on POSITIVE X', () => {
    const newX = 0.35
    const oldY = 0.9
    const result = calcNewBounceDirection({ newX, oldY })
    expect(result).toEqual({ x: 0.35, y: -0.65 })
  })
  it('should return a downward moving direction value when given a POSITIVE Y, based on NEGATIVE X', () => {
    const newX = -0.35
    const oldY = 0.9
    const result = calcNewBounceDirection({ newX, oldY })
    expect(result).toEqual({ x: -0.35, y: -0.65 })
  })
})
