type KeyboardEventType = 'keydown' | 'keyup' | 'keypress'
class KeyboardEventListener {
  private removeListenersArray: (() => void)[] = []

  addListener = (type: KeyboardEventType, listener: (e: KeyboardEvent) => void) => {
    const removeListener = () => removeEventListener(type, listener)
    this.removeListenersArray.push(removeListener)
    addEventListener(type, listener)
  }

  removeListeners = () => {
    this.removeListenersArray.forEach((r) => r())
  }
}

export const KeyboardListener = new KeyboardEventListener()
