/* eslint-disable @typescript-eslint/no-unused-vars */
export const EVENT_MOCK: Event = {
  bubbles: false,
  cancelBubble: false,
  cancelable: false,
  composed: false,
  currentTarget: null,
  defaultPrevented: false,
  eventPhase: 0,
  isTrusted: false,
  returnValue: false,
  srcElement: null,
  target: null,
  timeStamp: 0,
  type: '',
  composedPath: function (): EventTarget[] {
    throw new Error('Function not implemented.')
  },
  initEvent: function (type: string, bubbles?: boolean | undefined, cancelable?: boolean | undefined): void {
    throw new Error('Function not implemented.')
  },
  preventDefault: function (): void {},
  stopImmediatePropagation: function (): void {
    throw new Error('Function not implemented.')
  },
  stopPropagation: function (): void {
    throw new Error('Function not implemented.')
  },
  NONE: 0,
  CAPTURING_PHASE: 1,
  AT_TARGET: 2,
  BUBBLING_PHASE: 3,
}
