import {create} from "zustand";

export const useUsers = create((set ) => ({
    users: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
        try {
            set({loading: true , error: null});
            const res = await fetch('https://jsonplaceholder.typicode.com/users ')
            const data = await res.json()
            set({users:data , loading: false})
        } catch (e) {
            set({error: e.message , loading: false})
        }
    }
}))