import React, { useEffect, useState } from 'react'
import { createContext, useContext } from 'react'
import { ChildrenProp } from '../types/ChildrenProp'
import { setAnalyticsUserId } from '../analytics/setAnalyticsUserId'

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
    const newUserId = create_UUID()
    localStorage.setItem(USER_ID_KEY, newUserId)
    return newUserId
  }

  const loadUser = () => {
    const userId = getUserId()
    setUser({ id: userId })
    setAnalyticsUserId(userId)
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

const create_UUID = () => {
  let dateTime = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const random = (dateTime + Math.random() * 16) % 16 | 0
    dateTime = Math.floor(dateTime / 16)
    return (c == 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
  return uuid
}
