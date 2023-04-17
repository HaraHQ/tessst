import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserState {
  user: any
  setUser: (user: any) => void
  removeUser: () => void
}

const useJsonStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: {},
        setUser: (user: any) => set({ user: user }),
        removeUser: () => set({ user: {} })
      }),
      {
        name: 'user-json-storage',
      }
    )
  )
)

export default useJsonStore;