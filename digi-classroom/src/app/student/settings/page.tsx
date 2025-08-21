"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function StudentSettingsPage() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Settings</h2>
			<form className="max-w-md space-y-3">
				<div className="space-y-2"><Label>Full name</Label><Input placeholder="Your name" /></div>
				<div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
				<Button>Save changes</Button>
			</form>
		</div>
	)
}