import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodos = create(
    persist(
        (set) => ({
            items: [],
            filters: 'all',
            search: '',

            add: (title) => set(state => ({ items: [...state.items, { id: crypto.randomUUID(), title: title.trim(), done: false }] })),
            remove: (id) => set(state => ({ items: state.items.filter(t => t.id !== id) })),
            toggle: (id) => set(state => ({ items: state.items.map(t => t.id === id ? { ...t, done: !t.done } : t) })),

            setFilter: (f) => set({ filters: f }),
            setSearch: (q) => set({ search: q }),
           forall: () => set(s => ({
               items: s.items.map( t => ({ ...t  , done: true})),
           })),
            clearDone: () => set(s => ({
                items: s.items.filter(t => !t.done),
            }))
        }),
        { name: 'todos-v1' }
    )
);
