import { useEffect, useState } from 'react'

type UseRequest<T> = {
  request: () => Promise<T>
}

export const useRequest = <T>({ request }: UseRequest<T>) => {
  const { data, error, isLoading, callRequest } = useRequestController({ request })
  useEffect(callRequest, [])
  return { data, error, isLoading, callRequest }
}

export const useRequestController = <T>({ request }: UseRequest<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const callRequest = () => {
    setIsLoading(true)
    request()
      .then(setData)
      .catch((err) => {
        setError(err as Error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    data,
    error,
    isLoading,
    callRequest,
  }
}
