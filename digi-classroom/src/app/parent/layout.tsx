"use client"

import { DashboardShell } from '@/components/layout/dashboard-shell'

export default function ParentLayout({ children }: { children: React.ReactNode }) {
	return <DashboardShell role="parent" title="Parent">{children}</DashboardShell>
}