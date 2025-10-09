import {create} from "zustand";

export const useCounter = create((set , get) => ({

    count: 0,
    inc: () => set((s) => ({count: s.count + 1})),
    dec: () => set((s) => ({count: s.count -1})),
    reset: () => set((s) => ({count: 0}))

}))