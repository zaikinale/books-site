import { create } from 'zustand';

export const useUserStore = create((set) => ({
    name: '',
    email: '',
    role: '',

    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setRole: (role) => set({ role }),

    reset: () => set({ name: '', email: '', role: '' }),

    setUser: (userData) => set({
        name: userData.name || '',
        email: userData.email || '',
        role: userData.role || '',
    }),
}));