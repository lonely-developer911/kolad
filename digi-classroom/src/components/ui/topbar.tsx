"use client"

import { Bell, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Topbar({ onMenuClick, title }: { onMenuClick?: () => void; title?: string }) {
	return (
		<div className={cn('sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-md')}>
			<div className="flex items-center gap-2">
				<Button size="icon" variant="ghost" onClick={onMenuClick} className="md:hidden">
					<Menu className="h-5 w-5" />
				</Button>
				<span className="font-semibold">{title ?? 'Digi Classroom'}</span>
			</div>
			<div className="flex items-center gap-2">
				<Button size="icon" variant="ghost">
					<Bell className="h-5 w-5" />
				</Button>
			</div>
		</div>
	)
}