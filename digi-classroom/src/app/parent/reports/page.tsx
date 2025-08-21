"use client"

import { Button } from '@/components/ui/button'

export default function ParentReportsPage() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Reports</h2>
			<div className="rounded-2xl border p-4">
				<div className="mb-2 text-sm text-muted-foreground">Official report card</div>
				<Button>Download PDF</Button>
			</div>
		</div>
	)
}