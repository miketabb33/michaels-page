import React, { useState } from 'react'
import styled from 'styled-components'
import P from '../m-blocks/typography/P'
import Input, { ExternalInputProps, useWithInput } from '../m-blocks/Input'

const Container = styled.div<{ $isHidden: boolean }>`
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  margin-top: 3rem;
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
  value: string
  hide: () => void
  show: () => void
  bind: TimeInputTTTProps
}

export const useWithTimeInputTTT = (initIsHidden: boolean): UseWithTimeInputTTTReturnArgs => {
  const [isHidden, setIsHidden] = useState(initIsHidden)

  const validateNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberRegex = new RegExp('^[0-9]*$')
    return numberRegex.test(event.target.value)
  }

  const input = useWithInput({ validationOnChange: validateNumber, maxLength: 5 })

  const hide = () => setIsHidden(true)
  const show = () => setIsHidden(false)

  return {
    value: input.value,
    hide,
    show,
    bind: { inputBind: input.bind, isHidden },
  }
}

export default TimeInputTTT
