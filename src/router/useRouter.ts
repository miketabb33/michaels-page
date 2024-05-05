import { Params, useNavigate, useParams } from 'react-router-dom'

export type UseRouterReturn = {
  navigateTo: (path: string) => void
  useParams: <ParamsOrKey extends string | Record<string, string | undefined> = string>() => Readonly<
    [ParamsOrKey] extends [string] ? Params<ParamsOrKey> : Partial<ParamsOrKey>
  >
  hostname: string
  pathname: string
}

export const useRouter = (): UseRouterReturn => {
  const navigate = useNavigate()

  const navigateTo = (path: string) => {
    navigate(path)
  }
  return {
    navigateTo,
    useParams,
    hostname: location.hostname,
    pathname: location.pathname,
  }
}
