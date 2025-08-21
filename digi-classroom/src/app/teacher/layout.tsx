"use client"

import { DashboardShell } from '@/components/layout/dashboard-shell'

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
	return <DashboardShell role="teacher" title="Teacher">{children}</DashboardShell>
}