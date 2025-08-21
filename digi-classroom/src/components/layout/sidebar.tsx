"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GraduationCap, Users2, ClipboardList, FileText, BarChart3, Settings, School, Library, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin'

const roleNav: Record<UserRole, { label: string; href: string; icon: React.ComponentType<{ className?: string }> }[]> = {
	teacher: [
		{ label: 'Dashboard', href: '/teacher', icon: BarChart3 },
		{ label: 'Classes', href: '/teacher/classes', icon: Users2 },
		{ label: 'Assignments', href: '/teacher/assignments', icon: ClipboardList },
		{ label: 'Tests/Exams', href: '/teacher/tests', icon: FileText },
		{ label: 'Reports', href: '/teacher/reports', icon: BarChart3 },
		{ label: 'Settings', href: '/teacher/settings', icon: Settings },
	],
	student: [
		{ label: 'Dashboard', href: '/student', icon: BarChart3 },
		{ label: 'My Classes', href: '/student/classes', icon: GraduationCap },
		{ label: 'Assignments', href: '/student/assignments', icon: ClipboardList },
		{ label: 'Tests/Exams', href: '/student/tests', icon: FileText },
		{ label: 'Progress', href: '/student/progress', icon: BarChart3 },
		{ label: 'Offline Library', href: '/student/library', icon: Library },
		{ label: 'Settings', href: '/student/settings', icon: Settings },
	],
	parent: [
		{ label: 'Dashboard', href: '/parent', icon: BarChart3 },
		{ label: 'Child Progress', href: '/parent/child-progress', icon: BarChart3 },
		{ label: 'Reports', href: '/parent/reports', icon: FileText },
		{ label: 'Messages', href: '/parent/messages', icon: MessageSquare },
		{ label: 'Settings', href: '/parent/settings', icon: Settings },
	],
	admin: [
		{ label: 'Dashboard', href: '/admin', icon: BarChart3 },
		{ label: 'Manage Schools', href: '/admin/schools', icon: School },
		{ label: 'Manage Teachers', href: '/admin/teachers', icon: Users2 },
		{ label: 'Manage Students', href: '/admin/students', icon: GraduationCap },
		{ label: 'Reports', href: '/admin/reports', icon: FileText },
	],
}

export function Sidebar({ role }: { role: UserRole }) {
	const pathname = usePathname()
	const nav = roleNav[role]
	return (
		<aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:bg-background">
			<div className="flex h-14 items-center px-4 font-bold">Digi Classroom</div>
			<nav className="flex-1 space-y-1 p-2">
				{nav.map(item => {
					const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
					const Icon = item.icon
					return (
						<Link key={item.href} href={item.href} className={cn(
							'flex items-center gap-3 rounded-2xl px-3 py-2 text-sm hover:bg-muted',
							isActive ? 'bg-muted font-semibold' : 'text-foreground'
						)}>
							<Icon className="h-5 w-5" />
							<span>{item.label}</span>
						</Link>
					)
				})}
			</nav>
		</aside>
	)
}

export { roleNav }