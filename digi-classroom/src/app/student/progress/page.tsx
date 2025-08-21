"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function StudentProgressPage() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Progress</h2>
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader><CardTitle>Badges</CardTitle></CardHeader>
					<CardContent>
						<div className="flex flex-wrap gap-2">
							<span className="rounded-2xl bg-yellow-100 px-3 py-1 text-sm">⭐ Star Student</span>
							<span className="rounded-2xl bg-green-100 px-3 py-1 text-sm">📚 Book Lover</span>
							<span className="rounded-2xl bg-blue-100 px-3 py-1 text-sm">🧮 Math Master</span>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader><CardTitle>Weekly Progress</CardTitle></CardHeader>
					<CardContent>
						<div className="h-40 w-full rounded-2xl bg-gradient-to-r from-blue-50 to-green-50" />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}