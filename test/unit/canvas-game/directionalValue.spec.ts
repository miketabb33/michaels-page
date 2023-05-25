import { flipDirection } from '../../../src/canvas-game/directionalValue'
import { DirectionValue } from '../../../src/types/DirectionValue'

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
