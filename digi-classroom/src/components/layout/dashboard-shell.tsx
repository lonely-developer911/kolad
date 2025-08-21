"use client"

import * as React from 'react'
import { Sidebar, type UserRole } from '@/components/layout/sidebar'
import { Topbar } from '@/components/ui/topbar'

export function DashboardShell({ role, title, children }: { role: UserRole; title?: string; children: React.ReactNode }) {
	const [open, setOpen] = React.useState(false)
	return (
		<div className="flex min-h-screen w-full">
			<Sidebar role={role} />
			<div className="flex flex-1 flex-col">
				<Topbar title={title} onMenuClick={() => setOpen(true)} />
				<main className="container py-4">
					{children}
				</main>
			</div>
			{/* Mobile drawer */}
			<div className="md:hidden">
				{/* Simple sheet implementation */}
				{open && (
					<div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
						<div className="absolute inset-y-0 left-0 w-64 bg-background p-2 shadow-2xl" onClick={e => e.stopPropagation()}>
							<Sidebar role={role} />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}