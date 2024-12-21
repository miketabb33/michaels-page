import { Params } from 'react-router-dom'
import { UseRouterReturn as UseRouterResult } from '../../../src/router/useRouter'

export const USE_ROUTER_RESULT: UseRouterResult = {
  navigateTo: function (): void {
    throw new Error('Function not implemented.')
  },
  useParams: function <ParamsOrKey extends string | Record<string, string | undefined> = string>(): Readonly<
    [ParamsOrKey] extends [string] ? Params<ParamsOrKey> : Partial<ParamsOrKey>
  > {
    throw new Error('Function not implemented.')
  },
  hostname: '',
  pathname: '',
}
