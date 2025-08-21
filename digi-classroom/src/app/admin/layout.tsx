"use client"

import { DashboardShell } from '@/components/layout/dashboard-shell'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return <DashboardShell role="admin" title="Admin">{children}</DashboardShell>
}