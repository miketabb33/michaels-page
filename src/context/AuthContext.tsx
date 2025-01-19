import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'
import { initAnalytics } from '../analytics/initAnalytics'
import { uuid } from '../uuid'

export type User = {
  id: string
}

type AuthContextType = {
  user: User
}

const AuthContext = createContext<AuthContextType>({
  user: { id: '' },
})

export const useAuthProvider = () => {
  const USER_ID_KEY = 'user-id'
  const [user, setUser] = useState<User>({ id: '' })

  const getUserId = () => {
    const userId = localStorage.getItem(USER_ID_KEY)
    if (userId) return userId
    const newUserId = uuid()
    localStorage.setItem(USER_ID_KEY, newUserId)
    return newUserId
  }

  const loadUser = () => {
    const userId = getUserId()
    setUser({ id: userId })
    initAnalytics(userId)
  }

  return {
    loadUser,
    user,
  }
}

export const AuthContextProvider = ({ children }: ChildrenProp) => {
  const { loadUser, user } = useAuthProvider()
  useEffect(loadUser, [])
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext)
}
