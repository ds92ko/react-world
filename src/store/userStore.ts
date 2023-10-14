import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IUserData } from '@/types/users'

interface IUserStore {
  userData: IUserData
  resetUserData: () => void
  setUserData: (newUserData: IUserData) => void
  isLoggedIn: () => boolean
}

export const initUserData: IUserData = {
  email: '',
  token: '',
  username: '',
  bio: '',
  image: '',
}

const useUserStore = create(
  persist<IUserStore>(
    (set, get) => ({
      userData: { ...initUserData },
      resetUserData: () =>
        set({
          userData: { ...initUserData },
        }),
      setUserData: newUserData =>
        set({
          userData: newUserData,
        }),
      isLoggedIn: () => Boolean(get().userData.token),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useUserStore
