"use client"

import { Button } from '@/components/ui/button'

export default function AdminTeachersPage() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Manage Teachers</h2>
			<div className="rounded-2xl border">
				<div className="grid grid-cols-4 border-b p-3 text-sm font-semibold">
					<span>Name</span><span>School</span><span>Class</span><span>Actions</span>
				</div>
				{[{ name: 'Mr. Okoro', school: 'Unity Primary', class: 'P5' }].map(row => (
					<div key={row.name} className="grid grid-cols-4 items-center border-b p-3 text-sm">
						<span>{row.name}</span><span>{row.school}</span><span>{row.class}</span>
						<div className="flex gap-2">
							<Button size="sm">Assign</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}