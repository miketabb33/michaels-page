export const formatTimerDisplay = (timeInHundredthsOfSeconds: number) => {
  if (timeInHundredthsOfSeconds <= 0) return '00:00.00'
  return getOver0TimeFormat(timeInHundredthsOfSeconds)
}

const addPrefixWhenNeeded = (time: string) => {
  if (time.length == 2) return time
  if (time.length == 1) return '0' + time
  if (time.length == 0) return '00'
  return '++'
}

const getOver0TimeFormat = (timeInHundredthsOfSeconds: number) => {
  const stringifiedTimeInHundredthsOfSeconds = timeInHundredthsOfSeconds.toString()
  const timeRemovedHundredthsOfSeconds = parseInt(
    stringifiedTimeInHundredthsOfSeconds.substring(0, stringifiedTimeInHundredthsOfSeconds.length - 2)
  )

  const minutes = Math.floor(timeRemovedHundredthsOfSeconds / 60)
  const conditionedMinutes = isNaN(minutes) ? 0 : minutes

  const conditionedSeconds = isNaN(timeRemovedHundredthsOfSeconds) ? 0 : timeRemovedHundredthsOfSeconds

  const stringifiedSeconds = (conditionedSeconds % 60).toString()
  const stringifiedMinutes = conditionedMinutes.toString()

  const conditionedHundredthsOfSeconds = stringifiedTimeInHundredthsOfSeconds.substring(
    stringifiedTimeInHundredthsOfSeconds.length - 2,
    stringifiedTimeInHundredthsOfSeconds.length
  )

  const formattedMinutes = addPrefixWhenNeeded(stringifiedMinutes)
  const formattedSeconds = addPrefixWhenNeeded(stringifiedSeconds)
  const formattedHundredthOfSeconds = addPrefixWhenNeeded(conditionedHundredthsOfSeconds)

  const formattedTime = `${formattedMinutes}:${formattedSeconds}.${formattedHundredthOfSeconds}`

  return formattedTime
}
