"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function TeacherTestsPage() {
	const [open, setOpen] = useState(false)
	const [uploadOpen, setUploadOpen] = useState(false)
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Tests & Exams</h2>
				<div className="flex gap-2">
					<Button onClick={() => setOpen(true)}>Create Test</Button>
					<Button variant="outline" onClick={() => setUploadOpen(true)}>Upload CSV</Button>
				</div>
			</div>
			<div className="rounded-2xl border">
				<div className="grid grid-cols-4 border-b p-3 text-sm font-semibold">
					<span>Title</span><span>Type</span><span>Date</span><span>Actions</span>
				</div>
				{[{ title: 'Math CA Test', type: 'MCQ', date: '2025-09-10' }].map(row => (
					<div key={row.title} className="grid grid-cols-4 items-center border-b p-3 text-sm">
						<span>{row.title}</span><span>{row.type}</span><span>{row.date}</span>
						<div className="flex gap-2">
							<Button size="sm">View Results</Button>
							<Button size="sm" variant="destructive">Delete</Button>
						</div>
					</div>
				))}
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Create Test/Exam</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<div className="space-y-2"><Label>Title</Label><Input /></div>
						<div className="space-y-2"><Label>Type</Label><Input placeholder="MCQ or Essay" /></div>
						<Button type="submit">Save</Button>
					</form>
				</DialogContent>
			</Dialog>
			<Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Upload Question Bank (CSV)</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<Input type="file" accept=".csv" />
						<Button type="submit">Upload</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}