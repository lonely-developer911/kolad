"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ParentChildProgressPage() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Child Progress</h2>
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader><CardTitle>Performance Graph</CardTitle></CardHeader>
					<CardContent>
						<div className="h-48 w-full rounded-2xl bg-gradient-to-r from-blue-50 to-green-50" />
					</CardContent>
				</Card>
				<Card>
					<CardHeader><CardTitle>Weekly Report</CardTitle></CardHeader>
					<CardContent>
						<ul className="list-inside list-disc text-sm">
							<li>Completed 3 lessons</li>
							<li>Submitted 2 assignments</li>
							<li>Average score: 82%</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}