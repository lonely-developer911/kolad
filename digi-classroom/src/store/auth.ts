import { create } from 'zustand'
import type { UserRole } from '@/components/layout/sidebar'

export type User = {
	id: string
	name: string
	email: string
	role: UserRole
}

type AuthState = {
	user: User | null
	setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthState>(set => ({
	user: null,
	setUser: user => set({ user }),
}))