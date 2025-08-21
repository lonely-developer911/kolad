"use client"

import { Button } from '@/components/ui/button'

export default function TeacherReportsPage() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Reports</h2>
			<div className="rounded-2xl border p-4">
				<div className="mb-2 text-sm text-muted-foreground">Continuous Assessment Results</div>
				<div className="flex gap-2">
					<Button>Export PDF</Button>
					<Button variant="outline">Export Excel</Button>
				</div>
			</div>
		</div>
	)
}