"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function TeacherClassesPage() {
	const [open, setOpen] = useState(false)
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Classes</h2>
				<Button onClick={() => setOpen(true)}>Create Class</Button>
			</div>
			<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
				{['Primary 4', 'Primary 5', 'Primary 6'].map(name => (
					<div key={name} className="rounded-2xl border p-4">
						<div className="font-semibold">{name}</div>
						<div className="mt-2 flex gap-2">
							<Button size="sm">Edit</Button>
							<Button size="sm" variant="destructive">Delete</Button>
						</div>
					</div>
				))}
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Create Class</DialogTitle>
					</DialogHeader>
					<form className="space-y-3">
						<div className="space-y-2">
							<Label>Name</Label>
							<Input placeholder="e.g. Primary 5" />
						</div>
						<Button type="submit">Save</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}