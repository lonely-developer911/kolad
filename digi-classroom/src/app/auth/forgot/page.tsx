"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function ForgotPasswordPage() {
	const [open, setOpen] = useState(false)
	function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setOpen(true)
	}
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-4">
			<div className="w-full max-w-md rounded-2xl border bg-card p-6 shadow-sm">
				<h1 className="mb-1 text-2xl font-bold">Forgot password</h1>
				<p className="mb-6 text-sm text-muted-foreground">Enter your email to reset</p>
				<form onSubmit={onSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" required placeholder="you@example.com" />
					</div>
					<Button type="submit" className="w-full">Send reset link</Button>
				</form>
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Check your email</DialogTitle>
						<DialogDescription>We sent a password reset link if an account exists.</DialogDescription>
					</DialogHeader>
					<Button onClick={() => setOpen(false)} className="mt-2 w-full">Close</Button>
				</DialogContent>
			</Dialog>
		</div>
	)
}