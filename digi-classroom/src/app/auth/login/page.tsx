"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'
import type { UserRole } from '@/components/layout/sidebar'

export default function LoginPage() {
	const [role, setRole] = useState<UserRole>('student')
	const setUser = useAuthStore(s => s.setUser)
	const router = useRouter()

	function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setUser({ id: 'u1', name: 'Demo User', email: 'demo@example.com', role })
		switch (role) {
			case 'teacher':
				router.push('/teacher')
				break
			case 'parent':
				router.push('/parent')
				break
			case 'admin':
				router.push('/admin')
				break
			default:
				router.push('/student')
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-4">
			<div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
				<h1 className="mb-1 text-2xl font-bold">Welcome back</h1>
				<p className="mb-6 text-sm text-muted-foreground">Login to your account</p>
				<form onSubmit={onSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" required placeholder="you@example.com" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" required placeholder="••••••••" />
					</div>
					<div className="space-y-2">
						<Label>Role</Label>
						<Select value={role} onValueChange={v => setRole(v as UserRole)}>
							<SelectTrigger>
								<SelectValue placeholder="Select role" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="student">Student</SelectItem>
								<SelectItem value="teacher">Teacher</SelectItem>
								<SelectItem value="parent">Parent</SelectItem>
								<SelectItem value="admin">Admin</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button type="submit" className="w-full">Login</Button>
				</form>
				<div className="mt-4 text-center text-sm">
					<a className="cursor-pointer text-blue-600 hover:underline" href="/auth/register">Create an account</a>
					<span className="mx-2">·</span>
					<a className="cursor-pointer text-blue-600 hover:underline" href="/auth/forgot">Forgot password?</a>
				</div>
			</div>
		</div>
	)
}