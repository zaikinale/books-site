import { create } from 'zustand';

export const useUserStore = create((set) => ({
    name: '',
    email: '',
    password: '',

    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),

    reset: () => set({ name: '', email: '', password: '' }),

    setUser: (userData) => set({
        name: userData.name || '',
        email: userData.email || '',
        password: userData.password || '',
    }),
}));