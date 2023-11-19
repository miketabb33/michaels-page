import { useParams } from 'react-router-dom'

export const useRouter = () => {
  return {
    useParams,
    hostname: location.hostname,
    pathname: location.pathname,
  }
}
