"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function ParentDashboard() {
	return (
		<div className="grid gap-4 md:grid-cols-3">
			{[
				{ title: "Child's average", value: '82%' },
				{ title: 'Missed assignments', value: 1 },
				{ title: 'Alerts', value: 2 },
			].map((item, i) => (
				<motion.div key={item.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
					<Card>
						<CardHeader>
							<CardTitle>{item.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-semibold">{item.value as any}</div>
						</CardContent>
					</Card>
				</motion.div>
			))}
		</div>
	)
}