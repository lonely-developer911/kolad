"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AdminSchoolsPage() {
	const [open, setOpen] = useState(false)
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Manage Schools</h2>
				<Button onClick={() => setOpen(true)}>Add School</Button>
			</div>
			<div className="rounded-2xl border">
				<div className="grid grid-cols-3 border-b p-3 text-sm font-semibold">
					<span>Name</span><span>City</span><span>Actions</span>
				</div>
				{[{ name: 'Unity Primary', city: 'Lagos' }].map(row => (
					<div key={row.name} className="grid grid-cols-3 items-center border-b p-3 text-sm">
						<span>{row.name}</span><span>{row.city}</span>
						<div className="flex gap-2">
							<Button size="sm">Edit</Button>
							<Button size="sm" variant="destructive">Delete</Button>
						</div>
					</div>
				))}
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Add School</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<div className="space-y-2"><Label>Name</Label><Input /></div>
						<div className="space-y-2"><Label>City</Label><Input /></div>
						<Button type="submit">Save</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}