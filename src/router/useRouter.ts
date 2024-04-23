import { useNavigate, useParams } from 'react-router-dom'

export const useRouter = () => {
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
