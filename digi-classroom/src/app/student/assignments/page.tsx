"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export default function StudentAssignmentsPage() {
	const [open, setOpen] = useState(false)
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Assignments</h2>
			<div className="rounded-2xl border">
				<div className="grid grid-cols-4 border-b p-3 text-sm font-semibold">
					<span>Title</span><span>Due</span><span>Status</span><span>Actions</span>
				</div>
				{[{ title: 'Fractions Worksheet', due: '2025-08-31', status: 'Pending' }].map(row => (
					<div key={row.title} className="grid grid-cols-4 items-center border-b p-3 text-sm">
						<span>{row.title}</span><span>{row.due}</span><span>{row.status}</span>
						<div className="flex gap-2">
							<Button size="sm" onClick={() => setOpen(true)}>Submit</Button>
						</div>
					</div>
				))}
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Submit Assignment</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<Input type="file" />
						<Button type="submit">Upload</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}