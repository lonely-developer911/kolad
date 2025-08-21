"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import type { UserRole } from '@/components/layout/sidebar'

export default function RegisterPage() {
	const [role, setRole] = useState<UserRole>('student')
	const router = useRouter()
	function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		router.push('/auth/login')
	}
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-4">
			<div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
				<h1 className="mb-1 text-2xl font-bold">Create account</h1>
				<p className="mb-6 text-sm text-muted-foreground">Join Digi Classroom</p>
				<form onSubmit={onSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Full Name</Label>
						<Input id="name" required placeholder="Jane Doe" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" required placeholder="you@example.com" />
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password" required placeholder="••••••••" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirm">Confirm Password</Label>
							<Input id="confirm" type="password" required placeholder="••••••••" />
						</div>
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
					<Button type="submit" className="w-full">Create account</Button>
				</form>
				<div className="mt-4 text-center text-sm">
					<a className="cursor-pointer text-blue-600 hover:underline" href="/auth/login">Back to login</a>
				</div>
			</div>
		</div>
	)
}