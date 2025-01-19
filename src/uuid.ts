export const uuid = () => {
  let dateTime = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const random = (dateTime + Math.random() * 16) % 16 | 0
    dateTime = Math.floor(dateTime / 16)
    return (c == 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
  return uuid
}
