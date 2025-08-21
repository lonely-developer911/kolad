"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function TeacherAssignmentsPage() {
	const [open, setOpen] = useState(false)
	const [gradeOpen, setGradeOpen] = useState(false)
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold">Assignments</h2>
				<Button onClick={() => setOpen(true)}>Create Assignment</Button>
			</div>
			<div className="rounded-2xl border">
				<div className="grid grid-cols-4 border-b p-3 text-sm font-semibold">
					<span>Title</span><span>Due</span><span>Submissions</span><span>Actions</span>
				</div>
				{[{ title: 'Fractions Worksheet', due: '2025-08-31', submissions: 12 }].map(row => (
					<div key={row.title} className="grid grid-cols-4 items-center border-b p-3 text-sm">
						<span>{row.title}</span><span>{row.due}</span><span>{row.submissions}</span>
						<div className="flex gap-2">
							<Button size="sm" onClick={() => setGradeOpen(true)}>Grade</Button>
							<Button size="sm" variant="destructive">Delete</Button>
						</div>
					</div>
				))}
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Create Assignment</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<div className="space-y-2"><Label>Title</Label><Input /></div>
						<div className="space-y-2"><Label>Description</Label><Textarea /></div>
						<div className="space-y-2"><Label>Due date</Label><Input type="date" /></div>
						<Button type="submit">Save</Button>
					</form>
				</DialogContent>
			</Dialog>
			<Dialog open={gradeOpen} onOpenChange={setGradeOpen}>
				<DialogContent>
					<DialogHeader><DialogTitle>Grade Submission</DialogTitle></DialogHeader>
					<form className="space-y-3">
						<div className="space-y-2"><Label>Score</Label><Input type="number" /></div>
						<div className="space-y-2"><Label>Comments</Label><Textarea /></div>
						<Button type="submit">Submit Grade</Button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}