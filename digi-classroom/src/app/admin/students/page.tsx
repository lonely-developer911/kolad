"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export default function AdminStudentsPage() {
	const [open, setOpen] = useState(false)
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Manage Students</h2>
				<Button variant="outline" onClick={() => setOpen(true)}>Bulk Import (CSV)</Button>
			</div>
			<div className="rounded-2xl border">
				<div className="grid grid-cols-4 border-b p-3 text-sm font-semibold">
					<span>Name</span><span>Class</span><span>Status</span><span>Actions</span>
				</div>
				{[{ name: 'Amina Bello', class: 'P5', status: 'Active' }].map(row => (
					<div key={row.name} className="grid grid-cols-4 items-center border-b p-3 text-sm">
						<span>{row.name}</span><span>{row.class}</span><span>{row.status}</span>
						<div className="flex gap-2">
							<Button size="sm">View</Button>
						</div>
					</div>
				))}
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Bulk Import Students</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<Input type="file" accept=".csv" />
						<Button type="submit">Upload</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}