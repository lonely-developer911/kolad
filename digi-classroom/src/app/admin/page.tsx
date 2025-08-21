"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function AdminDashboard() {
	return (
		<div className="grid gap-4 md:grid-cols-3">
			{[
				{ title: 'Active schools', value: 12 },
				{ title: 'Active users', value: 540 },
				{ title: 'System stats', value: 'OK' },
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