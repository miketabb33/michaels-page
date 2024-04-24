import React, { useState } from 'react'
import styled from 'styled-components'
import P from '../m-blocks/typography/P'
import Input, { ExternalInputProps, useWithInput } from '../m-blocks/Input'

const Container = styled.div<{ $isHidden: boolean }>`
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const InputWrapper = styled.div`
  width: 9rem;
`

type TimeInputTTTProps = {
  isHidden: boolean
  inputBind: ExternalInputProps
}

const TimeInputTTT = ({ isHidden, inputBind }: TimeInputTTTProps) => {
  return (
    <Container id="time-input-view" $isHidden={isHidden}>
      <P>Starting Time:</P>
      <InputWrapper>
        <Input {...inputBind} />
      </InputWrapper>
    </Container>
  )
}

type UseWithTimeInputTTTReturnArgs = {
  bind: TimeInputTTTProps
  hide: () => void
  show: () => void
  clear: () => void
}

export const useWithTimeInputTTT = (onChange: (value: number) => void): UseWithTimeInputTTTReturnArgs => {
  const [isHidden, setIsHidden] = useState(false)

  const validateNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberRegex = new RegExp('^[0-9]*$')
    return numberRegex.test(event.target.value)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value
    let time = value * 100
    if (time < 90) time = 100
    onChange(time)
  }

  const input = useWithInput({ validationOnChange: validateNumber, maxLength: 5, onChange: onInputChange })

  const hide = () => setIsHidden(true)
  const show = () => setIsHidden(false)
  const clear = () => input.clear()

  return {
    bind: { inputBind: input.bind, isHidden },
    hide,
    show,
    clear,
  }
}

export default TimeInputTTT
