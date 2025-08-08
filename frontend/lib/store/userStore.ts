import { userInfo } from '@/types/user'
import {create} from 'zustand'

interface UserState {
    user: userInfo | null;
    setUser: (user: userInfo | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

