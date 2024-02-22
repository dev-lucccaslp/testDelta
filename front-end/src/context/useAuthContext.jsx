import { create } from 'zustand'

export const useAuthContext = create((set) => ({
  data: {},
  value: '',

  addData: (state) => set(() => ({data: state})),
  removeAlldata: () => set({ data: {} }),

  userLoged: (state) => Object.keys(state.data).length >  0 ? true : false,
}))